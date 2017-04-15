import { Injectable } from '@angular/core';
import {Journal}  from '../models/journal.model'
import {OnInit} from '@angular/core';

@Injectable()
export class JournalService {
 journalList : Array<Journal> = [
      (
      new Journal(1,'ჟურნალ 1', 'დათო კესოშვილი','01-01-2000','http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg','რაღაცა'),
      new Journal(2,'ჟურნალ 2', 'დათო კესოშვილი','01-01-2000','http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg','რაღაცა'),
      new Journal(3,'ჟურნალ 3', 'დათო კესოშვილი','01-01-2000','http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg','რაღაცა'),
      new Journal(4,'ჟურნალ 4', 'დათო კესოშვილი','01-01-2000','http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg','რაღაცა'),
      new Journal(5,'ჟურნალ 5', 'დათო კესოშვილი','01-01-2000','http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg','რაღაცა'),
      new Journal(6,'ჟურნალ 6', 'დათო კესოშვილი','01-01-2000','http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg','რაღაცა'),
      new Journal(7,'ჟურნალ 7', 'დათო კესოშვილი','01-01-2000','http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg','რაღაცა'),
      new Journal(8,'ჟურნალ 8', 'დათო კესოშვილი','01-01-2000','http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg','რაღაცა'))
 ]
  

 getJournals(){
     return this.journalList;
 }
 
}