import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'submission',
  templateUrl: 'submission.component.html',
  styleUrls: ['submission.component.css']
})
export class SubmissionComponent implements OnInit {

  constructor() { }

  file: File;
  invalid : boolean;
  
  onChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        console.log(this.file);

        if (this.file.type == "pdf"){
          this.invalid = false;
        }

    }

  ngOnInit() {

  }

  save(form){
    console.log(form);
  }
  

}
