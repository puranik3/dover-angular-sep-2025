import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {
  @Input()
  page!: number;

  @Output()
  pageChange = new EventEmitter<number>()

  changePage( by : number ) {
    // this.page += by;

    this.pageChange.emit( by );
  }
}
