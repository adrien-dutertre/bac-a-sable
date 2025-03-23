import { Component, inject, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Projet } from '../accueil/services/interfaceProjet';
import { ProjetsService } from '../accueil/services/projets.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entete',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './entete.component.html',
  styleUrl: './entete.component.css',
})
export class EnteteComponent implements OnInit {
  private projectList = inject(ProjetsService);
  description: string = "";
  listeProjets: Projet[] = [];
  @Input() valeur: string = '';

  ngOnInit(): void {
    this.listeProjets = this.projectList.getProjets();
    const projetEnCours: number = this.listeProjets.findIndex( (projet) => {
      return projet.titre.includes(this.valeur);
    });
    this.description = this.listeProjets[projetEnCours].description;
  }
}
