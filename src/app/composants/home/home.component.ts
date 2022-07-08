import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stagiaire } from 'src/app/interfaces/stagiaire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  maDate = Date.now();
  nom = "Washington";
  prenom = "Denzel";
  city = "Nice"
  zipCode = "06000";
  streetName = "paradis";
  title = 'angular';
  tab: number[] = [2, 5, 3, 8];
  moyennes: number[] = [12,5,16,18];
  stagiaire1: Stagiaire = { num :24, nom: "El Gharbi", prenom: "Hind" };
  stagiaires : Stagiaire[] = [
    { num: 100, nom: "wick", prenom: "john" },
    { num: 200, nom: "dalton", prenom: "jack" },
    { num: 300, nom: "doe", prenom: "joe" },
    { num: 400, nom: "maggio", prenom: "sophie" },
  ];
//                     objet    type
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
    direBonjour() {
      alert("Yo Man");
    };
    visiter() {
      const firstname = "Lucie";
      const lastname = "Le Grand";

      this.router.navigate(['/stagiaire', lastname, firstname]);
    }
}
