import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { GalleryImage } from '../models/galleryImage.model';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;
  
  imageData: GalleryImage[];
  keys: String[];

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  ngOnInit() {
    var imageData = this.db.list('uploads');
    this.keys = Object.keys(this.imageData);
 }


  getImages(): Observable<GalleryImage[]> {
    return this.db.list('uploads');
    
  }
  
  getImage(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
    .then((snap) => snap.val());
    
  }

 
}
