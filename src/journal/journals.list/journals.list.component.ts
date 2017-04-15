import { Component,OnInit } from '@angular/core';
import {Journal}  from '../models/journal.model'
import {JournalService} from '../journal.services/journal.service'
@Component({
  selector: 'app-root',
  templateUrl: './journals.list.component.html',
  styleUrls: ['./journals.list.component.css']
})
export class JournalsComponent implements OnInit{
    constructor(public journalService :JournalService){

    }
  journalList2 : Array<Journal> = [];
  
 

  ngOnInit(){
      this.journalList2 = this.journalService.getJournals();
  }
}
