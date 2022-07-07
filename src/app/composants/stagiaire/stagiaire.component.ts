import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  nom = "";
  prenom = "";

  //injecte des dépendances
  //initalise des attributs
  constructor(private route: ActivatedRoute) { }

  //initalise le composant
  ngOnInit(): void {
    //paramMap est un observable
    //subscrite est un oberver
    this.route.paramMap.subscribe({
      next: (res) => {
        this.nom = res.get('nom') ?? "";
        this.prenom = res.get('prenom') ?? "";
      },
    })
  }

}
