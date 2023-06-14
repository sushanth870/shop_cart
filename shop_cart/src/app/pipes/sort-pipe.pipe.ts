import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: Array<object>, sortValue: number): Array<object> {
    if (value.length === 0 || sortValue === 0) {
      return value;
    }
    // console.log(typeof (1));
    // console.log(typeof (sortValue));
    if (sortValue == 1) {
      value.sort((a: any, b: any) => {
        // console.log(a.price);
        if (a.price < b.price) {
          return -1;
        }
        else if (a.price > b.price) {
          return 1;
        }
        else {
          return 0;
        }
      });
    }
    else if (sortValue == 2) {
      value.sort((a: any, b: any) => {
        if (a.price < b.price) {
          return 1;
        }
        else if (a.price > b.price) {
          return -1;
        }
        else {
          return 0;
        }
      });
    }
    else if (sortValue == 3) {
      value.sort((a: any, b: any) => {
        if (a.title < b.title) {
          return -1;
        }
        else if (a.title > b.title) {
          return 1;
        }
        else {
          return 0;
        }
      });
    }
    // console.log(value)
    return value;
  }

}
