import { Injectable } from '@angular/core';
import { Projet } from './interfaceProjet';

@Injectable({
  providedIn: 'any'
})
export class ProjetsService {

  constructor() { }

  listeProjets : Projet[] = [
    {
      titre: "Calculatrice",
      description: "Une calculatrice, comme on en a besoin tous les jours si l'on est un comptable.",
      route: "calculatrice"
    }
  ];
  
  getProjets() {
    return this.listeProjets;
  }
}
