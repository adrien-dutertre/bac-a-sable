import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

export const routes: Routes = [
    { path: '', component : AccueilComponent },
    { path: 'calculatrice', component : CalculatriceComponent },
    { path: 'generateur-mdp', component: PasswordGeneratorComponent }
];