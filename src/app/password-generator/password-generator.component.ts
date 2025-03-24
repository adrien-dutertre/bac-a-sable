import { Component, inject, OnInit } from '@angular/core';
import { EnteteComponent } from "../entete/entete.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  imports: [EnteteComponent, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatExpansionModule, ReactiveFormsModule, MatCheckboxModule, FormsModule],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css'
})
export class PasswordGeneratorComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);
  listeMinuscules : string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  listeMajuscules : string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  listeChiffres: string[] = "0123456789".split("");

  motDePasse: string = "";

  formulaire = this.fb.group({
    longueur: [16, [Validators.required, Validators.min(8)]],
    numerique: [true],
    lettresMin: [true],
    lettresMaj: [true],
    symboles: ['+-=,;:!?./§*'],
  })

  // Liste symboles !";#$%&'()*+,-./:;<=>?@[]^_`{|}~

  copytToClipboard() : void {
    navigator.clipboard.writeText(this.motDePasse).then( _ => {
      this._snackBar.open("Copié dans le presse-papier !", "OK" , { duration: 5000 });
    });
  }

  generatePassword(): void {
    this.motDePasse = "";
    // Déclaration des variables
    const longueur: number = this.formulaire.get('longueur')?.value as number;
    const numerique: boolean = this.formulaire.get('numerique')?.value as boolean;
    const lettresMin: boolean = this.formulaire.get('lettresMin')?.value as boolean;
    const lettresMaj: boolean = this.formulaire.get('lettresMaj')?.value as boolean;
    const symboles: string[] = this.formulaire.get('symboles')?.value?.split("") as string[];
    const liste: string[] = [];

    //Construction de la liste des possibilités
    if (numerique) {
      this.listeChiffres.forEach(element => {
        liste.push(element);
      });
    }
    if (lettresMin) {
      this.listeMinuscules.forEach(element => {
        liste.push(element);
      });
    }
    if (lettresMaj) {
      this.listeMajuscules.forEach(element => {
        liste.push(element);
      });
    }
    symboles.forEach(element => {
      liste.push(element);
    });

    // Construction du mot de passe en fonction de la longueur
    for (let i = 0; i < longueur; i++) {
      this.motDePasse += liste[this.random(liste.length)];
    }
  }

  random(max: number) : number {
    return Math.floor( Math.random() * max );
  }

  ngOnInit(): void {
    this.generatePassword();
  }
}
