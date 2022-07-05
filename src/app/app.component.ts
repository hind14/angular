import { Component } from '@angular/core';
import { Stagiaire } from './interfaces/stagiaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  tab: number[] = [2, 5, 3, 8];
  moyennes: number[] = [12,5,16,18]
  stagiaire1: Stagiaire = { num :22, nom: "El Gharbi", prenom: "Hind" };
  direBonjour() {
    alert("Yo Man");
  };
  stagiaires : Stagiaire[] = [
    { num: 100, nom: "wick", prenom: "john" },
    { num: 200, nom: "dalton", prenom: "jack" },
    { num: 300, nom: "doe", prenom: "joe" },
    { num: 400, nom: "maggio", prenom: "sophie" },
  ]
}
