import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[] , filterText: string): Product[] {
    // filterText = filterText ? filterText.toLowerCase() : " ";
    return filterText ? value.filter((p:Product)=>p.productName.toLowerCase().includes(filterText))
    :value; 
  }

}
