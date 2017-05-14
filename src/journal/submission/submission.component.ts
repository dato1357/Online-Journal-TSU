import { SubmissionModel } from './submission.model';
import { Component, OnInit} from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'submission',
  templateUrl: 'submission.component.html',
  styleUrls: ['submission.component.css'],
  providers:[]
})
export class SubmissionComponent implements OnInit {

  constructor() { }
  model : SubmissionModel = new SubmissionModel();

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

   uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost:4200/upload'
  };
  sizeLimit = 2000000;
 
  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }
 
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

  save(form){
    this.model.File = this.file
    console.log(this.model);
  }
  

}



///php backend code for file upload 
// <?php
 
// header("Access-Control-Allow-Origin: *");
 
// if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
//   echo json_encode(array('status' => false));
//   exit;
// }
 
// $path = 'uploads/';
 
// if (isset($_FILES['file'])) {
//   $originalName = $_FILES['file']['name'];
//   $ext = '.'.pathinfo($originalName, PATHINFO_EXTENSION);
//   $generatedName = md5($_FILES['file']['tmp_name']).$ext;
//   $filePath = $path.$generatedName;
 
//   if (!is_writable($path)) {
//     echo json_encode(array(
//       'status' => false,
//       'msg'    => 'Destination directory not writable.'
//     ));
//     exit;
//   }
 
//   if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
//     echo json_encode(array(
//       'status'        => true,
//       'originalName'  => $originalName,
//       'generatedName' => $generatedName
//     ));
//   }
// }
// else {
//   echo json_encode(
//     array('status' => false, 'msg' => 'No file uploaded.')
//   );
//   exit;
// }
 
// ?> 
