import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(value:any,categoryType:string,minValue:number,maxValue:number): any {
    if(value.length == 0||(categoryType==='All' && minValue==0 && maxValue==200))
    {
      return value;
    }
    const filtredProducts=[];
    if(categoryType==='All'){
      for(const product of value){
          if(product.price>=minValue && product.price<=maxValue)
          filtredProducts.push(product);
      }
    }
    else{
      for(const product of value){
        if(product.category===categoryType)
        {
          if(product.price>=minValue && product.price<=maxValue)
          filtredProducts.push(product);
        }
      }
    }
    return filtredProducts;
  }

}
