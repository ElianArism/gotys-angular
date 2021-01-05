import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Goty } from '../models/goty.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private _angularFirestore: AngularFirestore) {
    
  }
  // get gotys from Firebase 
  getGotys() {
    return this._angularFirestore.collection('gotys').snapshotChanges(); 
  }
  
  postGoty(goty: Goty) {
    this._angularFirestore.collection('gotys').add(goty);
  }

  // put on firestore
  vote(goty: Goty) {
    return this._angularFirestore.collection('gotys').doc(`${goty.id}`).set(goty);
  }

  changeVotes() {
    return this._angularFirestore.collection('gotys').valueChanges();
  }
}
