import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { ImageService } from '../services/image.service';
import { Upload } from '../models/upload.model';
import { GalleryImage } from '../models/galleryImage.model';
import * as _ from 'lodash'; // to help loop over files more succinctly

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: FileList;
  upload: Upload;
  imageData: GalleryImage;
  
  

  constructor(private uploadService: UploadService, private imageService: ImageService) { }

  handleFiles(event) {
    this.files = event.target.files;
    this.imageData = event.target.imageData;
    this.imageData.category =  event.target.imageData.category;
  }

 

  uploadFiles() {
    const filesToUpload = this.files;
    const dataToUpload = this.imageData;
    const filesIdx = _.range(filesToUpload.length);
    // const category = dataToUpload[1];

    _.each( filesIdx, (idx) => {
      //console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);
      this.imageData = new GalleryImage();
      this.uploadService.uploadFile(this.upload, this.imageData );
    });
  }
}
