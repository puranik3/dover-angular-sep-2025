import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import IWorkshop from '../../models/IWorkshop';

@Component({
  selector: 'app-item',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {
  @Input()
  workshop!: IWorkshop;
}
