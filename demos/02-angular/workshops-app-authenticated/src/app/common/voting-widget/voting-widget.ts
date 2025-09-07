import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCaretUp,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import { VoteType } from '../../workshops/sessions';

@Component({
  selector: 'app-voting-widget',
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './voting-widget.html',
  styleUrl: './voting-widget.scss'
})
export class VotingWidget {
  @Input()
  votes!: number;

  @Output()
  vote = new EventEmitter<VoteType>();

  icons = {
    faCaretUp,
    faCaretDown,
  }

  emitVote( voteType : VoteType ) {
    this.vote.emit( voteType );
  }
}
