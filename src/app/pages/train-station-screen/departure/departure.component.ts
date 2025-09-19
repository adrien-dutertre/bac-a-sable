import { Component, HostBinding, Input, input } from '@angular/core';
import { Train } from '../train.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-departure',
  imports: [DatePipe],
  templateUrl: './departure.component.html',
  styleUrl: './departure.component.css'
})
export class DepartureComponent {
  train = input.required<Train>();

  @Input()
  @HostBinding('class.delayed') isDelayed: boolean = false;

  @Input()
  @HostBinding('class.isLater') laterTrain: boolean = false;

  getDelayedTime(): Date {
    return new Date(this.train().departureTime.getTime() + this.train().delay.delayTime);
  }
}
