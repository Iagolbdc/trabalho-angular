import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: String = "http://localhost:8000/"
  token = localStorage.getItem('user');
  constructor(private http: HttpClient) { }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.url}aluno/${id}`, { headers: { 'Content-Type': "application/json" } })
  }

  listAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.url}alunos/`);
  }

  deleteAluno(id?: number) {
    return this.http.delete(`${this.url}aluno/${id}`, { headers: { "Authorization": `Bearer ${this.token}` } });
  }

  addAluno(aluno: any) {
    return this.http.post(`${this.url}alunos/`, aluno, { headers: { "Authorization": `Bearer ${this.token}` } });
  }

  updateAluno(aluno: any, id: number) {
    return this.http.patch(`${this.url}aluno/${id}`, aluno, { headers: { "Authorization": `Bearer ${this.token}` } });
  }

  verificarHorarios() {
    return this.http.post(`${this.url}aluno/verificar_horarios/`, { headers: { "Authorization": `Bearer ${this.token}` } });
  }

  liberarAluno(id: number) {
    return this.http.post(`${this.url}aluno/${id}/liberar_aluno/`, { headers: { "Authorization": `Bearer ${this.token}` } });
  }
}
