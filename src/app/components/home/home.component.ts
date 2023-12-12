import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  alunos: Aluno[] = [];
  selectedAluno: Aluno | null = null;

  currentPage: number = 1;
  itemsPerPage = 8;


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.apiService.listAlunos()
      .subscribe(alunos => { this.alunos = alunos }, (error) => { console.log(error) });
  }

  pageChanged(event: any): void {
    this.currentPage = event;
  }

  navigateToDetails(aluno: Aluno): void {
    this.router.navigate(['/aluno', aluno.id]);
  }
}
