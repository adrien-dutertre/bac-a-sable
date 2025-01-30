import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Projet } from '../accueil/services/interfaceProjet';
import { ProjetsService } from '../accueil/services/projets.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entete',
  imports: [RouterLink, NgFor, MatIconModule, MatButtonModule, MatToolbarModule, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './entete.component.html',
  styleUrl: './entete.component.css'
})
export class EnteteComponent {
  constructor (private projectList : ProjetsService) {}

  listeProjets: Projet[] = [];
  @Input () valeur : string = "";

  ngOnInit() {
    this.listeProjets = this.projectList.getProjets();
  }
}
