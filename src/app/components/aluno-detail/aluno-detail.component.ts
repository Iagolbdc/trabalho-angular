import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.sass']
})
export class AlunoDetailComponent {
  aluno: Aluno | null = null;
  isEditing: boolean = false;

  previewUrl?: string | ArrayBuffer | null = null;
  fileError: string | null = null;

  errorMessage: string = '';

  alunoUpdate: any = {
    nome: '',
    telefone_responsavel: '',
    liberado: this.aluno?.liberado,
    foto: null,
    idade: 0
  };

  formData = new FormData()

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const alunoId = Number(params.get('id'));
      this.getAluno(alunoId);
    });
  }

  getAluno(id: number): void {
    this.apiService.getAluno(id)
      .subscribe(aluno => this.aluno = aluno);
  }

  deleteAluno() {
    this.apiService.deleteAluno(this.aluno?.id).subscribe(
      (response: any) => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        alert("Deu erro ai");
      }
    );
  }

  updateAluno() {
    if (this.alunoUpdate.nome) {
      this.formData.append("nome", this.alunoUpdate.nome);
    }

    if (this.alunoUpdate.idade) {
      this.formData.append("idade", this.alunoUpdate.idade);
    }

    if (this.alunoUpdate.telefone_responsavel) {
      this.formData.append("telefone_responsavel", this.alunoUpdate.telefone_responsavel);
    }

    if (this.alunoUpdate.foto) {
      this.formData.append("foto", this.alunoUpdate.foto);
    }

    this.formData.append("liberado", this.alunoUpdate.liberado);

    this.apiService.updateAluno(this.formData, this.aluno!.id).subscribe(
      (response: any) => {
        console.log(response);
        window.location.reload();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  startEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        this.fileError = null;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.previewUrl = e.target?.result;
          this.alunoUpdate.foto = file;
        };
      } else {
        this.fileError = 'Por favor, selecione um arquivo de imagem.';
        this.previewUrl = null;
      }
    }
  }

}
