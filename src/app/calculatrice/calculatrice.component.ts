import { Component } from '@angular/core';
import { EnteteComponent } from '../entete/entete.component';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [EnteteComponent],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css',
})
export class CalculatriceComponent {
  
}
