import { Component, OnInit} from '@angular/core';
import {Journal}  from '../models/journal.model'
import {JournalService} from '../journal.services/journal.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'fw-register-user',
  templateUrl: 'journal.details.component.html',
  styleUrls: ['journal.details.component.css']
})
export class JournalDetailsComponent implements OnInit {
 journal : Journal;
 id : number;

  constructor(public journalService : JournalService,public router : ActivatedRoute){

  }
 
  ngOnInit(){
      this.id = this.router.snapshot.params['id'];
      console.log(this.id)
        this.journal = this.journalService.getJournals().find(e=>e.Id == this.id);
        console.log(this.journal)
  }
}
