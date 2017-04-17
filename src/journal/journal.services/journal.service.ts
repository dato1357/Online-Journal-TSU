import { Injectable } from '@angular/core';
import {Journal}  from '../models/journal.model'
import {OnInit} from '@angular/core';

@Injectable()
export class JournalService {
 journalList : Array<Journal> = [
      (
      new Journal(8,'TSU Computer Science Journal', 'დათო კესოშვილი','01-01-2000','http://www.cs.cmu.edu/~harchol/bookcover.png',
      'ეს ჟურნალი არის რაღაც ლორემ იპსუმის შესახებ რომელიც არის ბლაბლაბ აკსაჯდასჯ დსაკდკასჯკლასჯ დლასჯდლას დლკასჯდლას ჯდკლასჯ  ჯდასკლდჯასლკჯდასლ'))
 ]
  

 getJournals(){
     return this.journalList;
 }
 
}