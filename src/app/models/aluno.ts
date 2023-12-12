export class Aluno {
  id: number;
  idade: number;
  matricula: string;
  telefone_responsavel: string;
  liberado: boolean;
  nome: string;
  foto: string;
  qrcode: string;
  horario_entrada: Date;
  horario_saida: Date;
  advertencias: number;

  constructor(id: number, nome: string, foto: string, idade: number, matricula: string, telefone_responsavel: string,
    liberado: boolean, qrcode: string, horario_entrada: Date, horario_saida: Date, advertencias: number) {
    this.id = id;
    this.nome = nome;
    this.foto = foto;
    this.idade = idade;
    this.matricula = matricula;
    this.advertencias = advertencias;
    this.telefone_responsavel = telefone_responsavel;
    this.liberado = liberado;
    this.qrcode = qrcode;
    this.horario_entrada = horario_entrada;
    this.horario_saida = horario_saida;
  }
}
