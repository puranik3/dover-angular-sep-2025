import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import ISession from '../../models/ISession';
import { Sessions } from '../../sessions';

@Component({
  selector: 'app-add-session',
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './add-session.html',
  styleUrl: './add-session.scss'
})
export class AddSession {
  constructor(
    private activatedRoute : ActivatedRoute,
    private sessionsService : Sessions
  ) {
  }

  addSession(addSessionForm: NgForm) {
    const id = +(this.activatedRoute.snapshot.parent?.paramMap.get(
            'id'
        ) as string);

        const newSession = {
            ...addSessionForm.value,
            workshopId: id,
            upvoteCount: 0,
            sequenceId: +addSessionForm.value.sequenceId,
            duration: +addSessionForm.value.duration,
        } as Omit<ISession, 'id'>;

        console.log(newSession);

        this.sessionsService.addSession(newSession).subscribe({
            next: (addedSession) => {
                alert(`Added session with id = ${addedSession.id}`);

                // You can also use navigateByUrl()
                // this.router.navigate(['/workshops', id]);
            },
        });
  }
}
