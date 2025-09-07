import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-alert',
  imports: [
    NgbModule
  ],
  templateUrl: './error-alert.html',
  styleUrl: './error-alert.scss'
})
export class ErrorAlert {
  @Input()
  error!: Error | null;
}
