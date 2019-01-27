import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => {
      return (
        item.restaurantName.toLowerCase().indexOf(filter.toLowerCase()) !==
          -1 || item.cuisines.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      );
    });
  }
}
