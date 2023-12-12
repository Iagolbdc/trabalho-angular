import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.sass']
})
export class AddAlunoComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  aluno: { nome: any, telefone_responsavel: any, matricula: any, foto: any, idade: any } = {
    nome: '',
    telefone_responsavel: '',
    matricula: '',
    foto: null,
    idade: 0
  };

  previewUrl?: string | ArrayBuffer | null = null;
  fileError: string | null = null;

  errorMessage: string = '';

  formData = new FormData()


  submitForm() {


    this.formData.append("nome", this.aluno.nome);
    this.formData.append("telefone_responsavel", this.aluno.telefone_responsavel);
    this.formData.append("matricula", this.aluno.matricula);
    this.formData.append("foto", this.aluno.foto);
    this.formData.append("idade", this.aluno.idade);
    this.formData.append("url", this.apiService.url);

    console.log(this.aluno);
    this.apiService.addAluno(this.formData).subscribe(
      (response: any) => {
        this.router.navigate(["/"]);
        console.log(response);
      },
      (error: any) => {
        if (!this.aluno.nome || !this.aluno.foto || !this.aluno.idade || !this.aluno.matricula || !this.aluno.telefone_responsavel) {
          this.errorMessage = "Preencha todos os campos!";
        } else {
          this.errorMessage = "Matrícula já utilizada!";
        }
      }
    );
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
          this.aluno.foto = file;
        };
      } else {
        this.fileError = 'Por favor, selecione um arquivo de imagem.';
        this.previewUrl = null;
      }
    }
  }

}
