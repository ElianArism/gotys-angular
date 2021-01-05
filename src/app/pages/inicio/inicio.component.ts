import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Goty } from '../../models/goty.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public games: {name: string, value: any}[] = [];
  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this._firebaseService.changeVotes()
      .subscribe((games: Goty[]) => {
        for(let i = 0; i < games.length; i++) {
          const {name, votes} = games[i];
          const data = { name, value: votes };

          this.games = [data, ...this.games]; 
        }
      });
  }

}
