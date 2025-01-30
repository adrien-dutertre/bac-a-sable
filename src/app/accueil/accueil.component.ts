import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ProjetsService } from './services/projets.service';
import { Projet } from './services/interfaceProjet';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [MatToolbarModule, NgFor, RouterModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
    constructor (private projectList : ProjetsService) {}

    listeProjets: Projet[] = [];

    ngOnInit() {
      this.listeProjets = this.projectList.getProjets();
    }
}
