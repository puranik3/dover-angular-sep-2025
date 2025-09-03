import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VotingWidget } from '../../../common/voting-widget/voting-widget';
import ISession from '../../models/ISession';
import { Sessions, VoteType } from '../../sessions';

@Component({
  selector: 'app-sessions-list',
  imports: [
    VotingWidget
  ],
  templateUrl: './sessions-list.html',
  styleUrl: './sessions-list.scss'
})
export class SessionsList {
    workshopId!: number;
    sessions!: ISession[];

    constructor(
        private sessionsService: Sessions,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        // this.activatedRoute.snapshot.paramMap is NOT an observable unlike this.activatedRoute.paramMap which is an observable
        const idStr = this.activatedRoute.snapshot.paramMap.get('id');
        this.workshopId = +(idStr as string);

        this.sessionsService.getSessionsForWorkshop(this.workshopId).subscribe({
            next: (sessions) => {
                this.sessions = sessions;
            },
        });
    }

    updateVote( session : ISession, voteType : VoteType ) {
        console.log( session, voteType );
    }
}
