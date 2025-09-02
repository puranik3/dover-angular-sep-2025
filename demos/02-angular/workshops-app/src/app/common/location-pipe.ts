import { Pipe, PipeTransform } from '@angular/core';
import { ILocation } from '../workshops/models/IWorkshop';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(location: ILocation, length: number = 0 ): unknown {
    const locationStr = `${location.address}, ${location.city}, ${location.state}`;

    if ( length > 0 ) {
      if ( locationStr.length > length ) {
        return locationStr.substring( 0, length ) + '...';
      }
    }

    return locationStr;
  }

}
