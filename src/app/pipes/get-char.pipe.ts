import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetCharPipe implements PipeTransform {
//value = valeur/elt sur lql le pipe va fonctionner
  transform(value: string, ...args: number[]): string {
    const position = args[0] ?? 0;
    return value[position];
  }

}
