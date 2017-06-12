import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], value: any): any {
 		 if (items==null) {
      		return null;
    	 }
       return items.filter(item =>{
           for (let key in item ) {
             if((""+item[key]).toLowerCase().includes(value.toLowerCase())){
                return true;
             }
           }
           return false;
        });
    }
}