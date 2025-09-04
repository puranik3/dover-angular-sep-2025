import { Component } from '@angular/core';
import { ReactiveFormsModule, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import ISession from '../../models/ISession';
import { Sessions } from '../../sessions';

@Component({
  selector: 'app-add-session',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './add-session.html',
  styleUrl: './add-session.scss'
})
export class AddSession {
  addSessionForm = new FormGroup({
      "sequenceId": new FormControl(
          '', // initial value of the input
          [
              // the list of validators
              Validators.required,
              Validators.pattern('\\d+'),
          ],
      ),
      name: new FormControl(
          '',
          [Validators.required, Validators.pattern('[A-Z][A-Za-z ]+')],
      ),
      speaker: new FormControl(
          '',
          [
              Validators.required,
              Validators.pattern('[A-Z][A-Za-z ]+(,[A-Z ][A-Za-z ]+)*'),
          ],
      ),
      duration: new FormControl(
          '',
          [Validators.required, Validators.min(0.5), Validators.max(10)],
      ),
      level: new FormControl(
          '',
          [Validators.required]
      ),
      abstract: new FormControl(
          '',
          [Validators.required, Validators.minLength(2)],
      ),
  });

  get sequenceId() {
    return this.addSessionForm.get( 'sequenceId' ) as FormControl;
  }

  get name() {
      return this.addSessionForm.get('name') as FormControl;
  }

  get speaker() {
      return this.addSessionForm.get('speaker') as FormControl;
  }

  get duration() {
      return this.addSessionForm.get('duration') as FormControl;
  }

  get level() {
      return this.addSessionForm.get('level') as FormControl;
  }

  get abstract() {
      return this.addSessionForm.get('abstract') as FormControl;
  }

  constructor(
    private activatedRoute : ActivatedRoute,
    private sessionsService : Sessions
  ) {
  }

  addSession() {
    const id = +(this.activatedRoute.snapshot.parent?.paramMap.get(
          'id'
      ) as string);

    console.log( this.addSessionForm );
  }
}
