import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LocationPipe } from '../../../common/location-pipe';
import IWorkshop from '../../models/IWorkshop';

@Component({
  selector: 'app-item',
  imports: [
    RouterLink,
    DatePipe,
    LocationPipe,
    FontAwesomeModule
  ],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {
  @Input()
  workshop!: IWorkshop;

  @Output()
  delete = new EventEmitter();

  icons = {
    faPencil,
    faTrash
  }

  onDeleteWorkshop() {
    this.delete.emit();
  }
}
