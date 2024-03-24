import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCamelCase',
})
export class ToCamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value
      // Split the string into words using a regex that matches spaces, underscores, and hyphens
      .split(/[\s_-]+/)
      // Transform each word to lowercase, then capitalize the first letter of each word
      .map((word, index) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      // Join the words back together with a space in between
      .join(' ');
  }

}
