import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform<T extends object>(elements: T[], filter: T): Array<T> {

    // If no elements in the filter then return the elements
    if (!elements || !filter) {
      return elements;
    }
    // If there are elements, apply the filter
    return elements.filter(element => this.applyFilter(element, filter));
  }

  private applyFilter<T>(element: T, filter: T): boolean {
    // Loop through filter to determine if there are any values to filter by
    for (const field in filter) {
      // for in loop iterate through keys on filter (book.ts)
      if (this.validInput(filter[field]) && this.validInput(element[field])) {
        // filter[field] is whether there is a value in filter
        if (
          !element[field]
          .toString()
          .toLowerCase()
          .includes(filter[field].toString().toLowerCase())
        ) {
          return false;
        }
      }
    }
    return true;
  }

  private validInput<T>(input: T): boolean {
    return input !== undefined && input !== null;
  }
}
