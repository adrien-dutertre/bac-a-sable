import { Component, ElementRef, ViewChild } from '@angular/core';
import { EnteteComponent } from '../../components/entete/entete.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [EnteteComponent, MatIconModule],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css',
})
export class CalculatriceComponent {
  @ViewChild ('valeur', { static: true }) valeurEcran!: ElementRef;
  valeurAffichee: string[] = [];
  valeurEnCours: number = 0;
  memoire: number = 0;
  operateur: string = "";
  effacerAffichage: boolean = true;

  afficherValeur() : void {
    this.valeurEcran.nativeElement.innerHTML = this.valeurAffichee.length > 10 ? this.valeurAffichee.slice(0, 9).join("") + "..." : this.valeurAffichee.join("");
  }

  ajoutChiffre(chiffre : string) : void {
    if (this.effacerAffichage) {
      this.effacerSaisie();
    }
    if (this.valeurAffichee.length < 9) {
      this.valeurAffichee.push(chiffre);
      this.afficherValeur();
    }
  }

  convertirEnNombre() : void {
    const valeur : string[] = this.valeurAffichee;
    let signe : number = 1;

    if (valeur[0] == "ERREUR") {
      this.valeurEnCours = 0;
    } else {
      const positionVirgule: number = valeur.indexOf(",");
      if (valeur.includes("-")) {
        signe = -1;
        valeur.shift();
      }
      let valeursAvantVirgule: string[] = [];
      let valeursAprèsVirgule: string[] = [];

      //Position de la virgule
      if (positionVirgule !== -1) {
        valeursAvantVirgule = valeur.slice(0, positionVirgule).reverse();
        valeursAprèsVirgule = valeur.slice(positionVirgule + 1);
      } else {
        valeursAvantVirgule = valeur.reverse();
      }

      //Partie entière
      for (let i = 0; i < valeursAvantVirgule.length; i++) {
        this.valeurEnCours += parseInt(valeursAvantVirgule[i]) * Math.pow(10, i);
      }

      //Partie décimale
      for (let i = 0; i < valeursAprèsVirgule.length; i++) {
        this.valeurEnCours += parseInt(valeursAprèsVirgule[i])/(Math.pow(10, i+1));
      }

      this.valeurEnCours *= signe;
    }
    
  }

  effacerChiffre() : void {
    this.valeurAffichee.pop();
    this.afficherValeur();
  }

  effacerSaisie() : void {
    this.effacerAffichage = false;
    this.valeurEnCours = 0;
    this.valeurAffichee = [];
    this.afficherValeur();
  }

  effacerMemoire() : void {
    this.effacerAffichage = false;
    this.valeurEnCours = 0;
    this.valeurAffichee = [];
    this.afficherValeur();
    this.memoire = 0;
  }

  ajoutVirgule() : void {
    if (this.valeurAffichee.length == 0) {
      this.valeurAffichee.push("0",",");
      this.afficherValeur();
    } else {
      if (this.valeurAffichee.indexOf(',') < 0) {
        if (this.valeurAffichee.length < 9) {
          this.valeurAffichee.push(",");
          this.afficherValeur();
        }
      }
    }
  }

  btnSigne() : void {
    this.valeurAffichee.includes("-") ? this.valeurAffichee.shift() : this.valeurAffichee.unshift("-");
    this.afficherValeur();
  }

  btnFonction(operateur : string) : void {
    this.effacerAffichage = true;
    this.convertirEnNombre();
    this.memoire = this.valeurEnCours;
    this.valeurEnCours = 0;
    this.operateur = operateur;
  }

  btnEgal() : void {
    switch (this.operateur) {
      case "Ajouter":
        this.ajouter();
        break;
      case "Soustraire":
        this.soustraire();
        break;
      case "Multiplier":
        this.multiplier();
        break;
      case "Diviser":
        this.diviser();
        break;
    }
  }

  ajouter() : void {
    this.operateur = "";
    this.convertirEnNombre();
    const total = this.memoire + this.valeurEnCours;

    this.valeurAffichee = total.toString().replace(".", ",").split("");
    this.afficherValeur();
    this.effacerAffichage = true;
    this.valeurEnCours = 0;
    this.memoire = 0;
  }

  soustraire() : void {
    this.operateur = "";
    this.convertirEnNombre();
    const total = this.memoire - this.valeurEnCours;

    this.valeurAffichee = total.toString().replace(".", ",").split("");
    this.afficherValeur();
    this.effacerAffichage = true;
    this.valeurEnCours = 0;
    this.memoire = 0;
  }

  multiplier() : void {
    this.operateur = "";
    this.convertirEnNombre();
    const total = this.memoire * this.valeurEnCours;

    this.valeurAffichee = total.toString().replace(".", ",").split("");
    this.afficherValeur();
    this.effacerAffichage = true;
    this.valeurEnCours = 0;
    this.memoire = 0;
  }

  diviser() : void {
    this.operateur = "";
    this.convertirEnNombre();
    let total : number | null = 0;
    if (this.valeurEnCours != 0) {
      total = this.memoire / this.valeurEnCours;
    } else {
      total = null;
    }

    this.valeurAffichee = total ? total.toString().replace(".", ",").split("") : ["ERREUR"];
    this.afficherValeur();
    this.effacerAffichage = true;
    this.valeurEnCours = 0;
    this.memoire = 0;
  }
}
