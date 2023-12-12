import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string | number): string {
    let valorFormatado = value + '';

    valorFormatado = valorFormatado
      .replace(
        /(\d{2})(\d{2})(\d{4})(\d{4})/,
        '$1 ($2) 9$3-$4'
      );


    return valorFormatado;
  }
}
