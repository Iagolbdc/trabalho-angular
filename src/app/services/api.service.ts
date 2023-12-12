import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "https://a3e8-45-4-62-22.ngrok-free.app/"
  token = localStorage.getItem('user');
  constructor(private http: HttpClient) { }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.url}aluno/${id}`, { headers: { 'Content-Type': "application/json", "Authorization": `Bearer ${this.token}`, "ngrok-skip-browser-warning": "69420" } })
  }

  listAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.url}alunos/`, { headers: { 'Content-Type': "application/json", "ngrok-skip-browser-warning": "69420" } });
  }

  deleteAluno(id?: number) {
    return this.http.delete(`${this.url}aluno/${id}`, { headers: { "Authorization": `Bearer ${this.token}`, "ngrok-skip-browser-warning": "69420" } });
  }

  addAluno(aluno: any) {
    return this.http.post(`${this.url}alunos/`, aluno, { headers: { "Authorization": `Bearer ${this.token}`, "ngrok-skip-browser-warning": "69420" } });
  }

  updateAluno(aluno: any, id: number) {
    return this.http.patch(`${this.url}aluno/${id}`, aluno, { headers: { "Authorization": `Bearer ${this.token}`, "ngrok-skip-browser-warning": "69420" } });
  }

  verificarHorarios() {
    console.log(this.token)
    return this.http.post(`${this.url}aluno/verificar_horarios/`, {}, { headers: { "Authorization": `Bearer ${this.token}`, "ngrok-skip-browser-warning": "69420" } });
  }

  liberarAluno(id: number) {
    return this.http.post(`${this.url}aluno/${id}/liberar_aluno/`, {}, { headers: { "Authorization": `Bearer ${this.token}`, "ngrok-skip-browser-warning": "69420" } });
  }

  horarioEntrada(id: number) {
    return this.http.post(`${this.url}aluno/${id}/entrada_aluno/`, {}, { headers: { "Authorization": `Bearer ${this.token}`, "ngrok-skip-browser-warning": "69420" } });
  }

  horarioSaida(id: number) {
    return this.http.post(`${this.url}aluno/${id}/saida_aluno/`, {}, { headers: { "Authorization": `Bearer ${this.token}`, "ngrok-skip-browser-warning": "69420" } });
  }
}
