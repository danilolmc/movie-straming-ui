import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idInput'
})
export class IdInputPipe implements PipeTransform {

  transform(id: string){
    return id.replace(" ", "").toLowerCase();
  }

}
