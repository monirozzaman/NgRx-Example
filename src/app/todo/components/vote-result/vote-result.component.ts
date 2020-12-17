import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';


@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.css']
})
export class VoteResultComponent implements OnInit {
  countVoteListForChittagong: number;
  countVoteListForDhaka: number;


  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {

  }

  getResult(): void {
    this.backendService.getResult().subscribe(res => {
      console.log(res);
      // res.forEach(result => {
      //
      //   console.log(result.totalVote);
      //   // if (result.symbolName.match('dhaka')) {
      //   //
      //   //   this.countVoteListForDhaka = result.totalVote;
      //   //   console.log('Dhaka' + this.countVoteListForDhaka);
      //   // } else if ( result.symbolName.match('chittagong')) {
      //   //   this.countVoteListForChittagong = result.totalVote;
      //   //   console.log('chittagong' + this.countVoteListForDhaka);
      //   // }
      // });

    });
  }
}
