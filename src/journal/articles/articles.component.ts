import { Component, OnInit} from '@angular/core';
import {Journal}  from '../models/journal.model'
import {JournalService} from '../journal.services/journal.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'articles',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.css']
})
export class ArticleComponent implements OnInit {
 journal : Journal;
 id : number;
 hide = true;

  constructor(public journalService : JournalService,public router : ActivatedRoute){

  }

  showYourArticle(){
    this.hide ? this.hide = false : this.hide = true;
  }
 
  ngOnInit(){
      this.id = this.router.snapshot.params['id'];
      console.log(this.id)
        this.journal = this.journalService.getJournals().find(e=>e.Id == this.id);
        console.log(this.journal)
  }
}
