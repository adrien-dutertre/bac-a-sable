import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CalculatriceComponent } from './pages/calculatrice/calculatrice.component';
import { PasswordGeneratorComponent } from './pages/password-generator/password-generator.component';
import { ToDoComponent } from './pages/todo/todo.component';
import { MeteoComponent } from './pages/meteo/meteo.component';
import { meteoResolver } from './pages/meteo/meteo.resolver';

export const routes: Routes = [
    { path: '', component : AccueilComponent },
    { path: 'calculatrice', component : CalculatriceComponent },
    { path: 'generateur-mdp', component: PasswordGeneratorComponent },
    { path: 'to-do', component: ToDoComponent },
    { path: 'meteo', component: MeteoComponent,
        resolve: {
        meteo: meteoResolver
    }}
];