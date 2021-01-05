import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Goty } from '../../models/goty.model';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent {
  public listOfGotys: Goty[] = [];
  
  constructor(private _firebaseService: FirebaseService) {
    setTimeout(() => {
      this.getGotys(); 
    }, 1000); 
  }

  async getGotys() {
    await this._firebaseService.getGotys()
    .subscribe((res: any) => {
      console.log(res);
      this.listOfGotys = [];
      for(let i = 0; i < res.length; i++) {
        if(res[i].payload.doc.data()) {
          this.listOfGotys = [res[i].payload.doc.data(), ...this.listOfGotys];
        }
      }
    });
  }

  async vote(goty: Goty) {
    console.log(goty)
    goty.votes += 1; 
    await this._firebaseService.vote(goty).then(data => console.log(data))
    
  }
}
