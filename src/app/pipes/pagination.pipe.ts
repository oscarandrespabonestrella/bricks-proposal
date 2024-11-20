import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform<T>(array: T[], page: number = 1, itemsPerPage: number = 10): T[] {
    if (!array || !array.length) return [];
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return array.slice(startIndex, endIndex);
  }
}

