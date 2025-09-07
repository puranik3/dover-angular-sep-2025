import { Component, inject } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import ISession from '../../models/ISession';
import { Sessions } from '../../sessions';

function durationAndLevel(form: AbstractControl) {
    const durationStr = (form.get('duration') as AbstractControl).value;
    const duration = +durationStr;
    const level = (form.get('level') as AbstractControl).value;

    // if valid -> return null
    // if invalid -> return an object with the details of the error. Further this object should have the property called `durationAndLevel`
    if (durationStr === '' || level === '') {
        return null; // null -> valid
    }

    if (level === 'Basic') {
        return null;
    }

    if (level === 'Intermediate') {
        if (duration >= 2) {
            return null;
        }

        // error
        return {
            durationAndLevel: 'Intermediate level session should be at least 2 hours in duration',
        };
    }

    if (level === 'Advanced') {
        if (duration >= 3) {
            return null;
        }

        // error
        return {
            durationAndLevel: 'Advanced level session should be at least 3 hours in duration',
        };
    }

    return null;
}

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
  private fb = inject(FormBuilder);

  addSessionForm = this.fb.group({
      "sequenceId": [
          '', // initial value of the input
          [
              // the list of validators
              Validators.required,
              Validators.pattern('\\d+')
          ],
      ],
      name: [
          '',
          [Validators.required, Validators.pattern('[A-Z][A-Za-z ]+')],
      ],
      speaker: [
          '',
          [
              Validators.required,
              Validators.pattern('[A-Z][A-Za-z ]+(,[A-Z ][A-Za-z ]+)*'),
          ],
      ],
      duration: [
          '',
          [Validators.required, Validators.min(0.5), Validators.max(10)],
      ],
      level: [
          '',
          [Validators.required]
      ],
      abstract: [
          '',
          [Validators.required, Validators.minLength(20)],
      ],
  },
  {
    validators: [ durationAndLevel ]
  }
);

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
    private sessionsService : Sessions,
    // private fb: FormBuilder
  ) {
  }

  addSession() {
    const id = +(this.activatedRoute.snapshot.parent?.paramMap.get(
          'id'
      ) as string);

    console.log( this.addSessionForm );
  }
}
