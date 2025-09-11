import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EnteteComponent } from '../../components/entete/entete.component';
import { Weather } from './weather.interface';
import { DecimalPipe } from '@angular/common';
import { WeatherService } from './weather.service';
import { WeatherCode } from './weatherCode.interface';
import { Subscription } from 'rxjs';
import { City } from './city.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meteo',
  imports: [EnteteComponent, DecimalPipe, FormsModule],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit, OnDestroy {
  @Input() meteo: Weather = {} as Weather;
  private weatherService = new WeatherService();
  private weatherSubscription = new Subscription();
  private citiesSubscription = new Subscription();
  weatherCodes: WeatherCode[] = [];
  cities: City[] = [];
  current_city = "Lyon";

  ngOnInit() {
    this.weatherSubscription = this.weatherService.getWeatherCodes().subscribe((codes) => {
      this.weatherCodes = codes;
    });
    this.citiesSubscription = this.weatherService.getCities().subscribe((cities) => {
      this.cities = cities.sort(function(a: City, b:City){ return a.city.localeCompare(b.city) });
    });
  }

  getWeatherDescription(code: number) : string {
    const index: number = this.weatherCodes.findIndex(value => value.code === code);
    return (index === -1)? "Météo inconnue" : this.weatherCodes[index].description;
  }

  getWeatherImgURL(code : number): string {
    const index: number = this.weatherCodes.findIndex(value => value.code === code);
    return (index === -1)? "/weather/wi-alien.svg" : this.weatherCodes[index].imgURL;
  }

  changeCity(city: string) : void {
    const index = this.getCity(city);
    const latitude = this.cities[index].latitude;
    const longitude = this.cities[index].longitude;
    this.weatherSubscription = this.weatherService.get(latitude, longitude).subscribe((weather) => {
      this.meteo = weather;
    });
  }

  getCity(name: string): number {
    return this.cities.findIndex(value => value.city === name);
  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
    this.citiesSubscription.unsubscribe();
  }
}