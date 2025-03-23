import { NgStyle } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ProjetsService } from './services/projets.service';
import { Projet } from './services/interfaceProjet';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [MatToolbarModule, RouterModule, MatCardModule, NgStyle],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent implements OnInit {
  private projectList = inject(ProjetsService);
  
  listeProjets: Projet[] = [];

  ngOnInit() {
    this.listeProjets = this.projectList.getProjets();
  }
}
