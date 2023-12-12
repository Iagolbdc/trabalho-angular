import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doisNomes'
})
export class DoisNomesPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!value) {
      return value;
    }

    const names = value.split(' ');

    const primeirosNome = names.slice(0, 2);

    return primeirosNome.join(' ');
  }

}
