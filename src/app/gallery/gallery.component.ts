import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  images: Observable<GalleryImage[]>;
  uploads: any[];
  filterBy?: string = 'all'
  

  constructor(private imageService: ImageService, private db: AngularFireDatabase) {
    console.log(this.filterBy)
    this.images = this.imageService.getImages();
  }

 /// Active filter rules
  filters = {}

  

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }
}
