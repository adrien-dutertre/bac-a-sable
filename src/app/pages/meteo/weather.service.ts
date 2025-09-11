import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather.interface';
import { WeatherCode } from './weatherCode.interface';
import { City } from './city.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient);
  readonly linkAPI = "https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,temperature_2m_min&models=meteofrance_seamless&current=is_day,temperature_2m,weather_code&timezone=Europe%2FBerlin&forecast_days=3";
  readonly weatherCodePath = "/weather/weatherCode.json";
  readonly citiesPath = "/weather/cities.json";
  
  get(latitude: number = 45.7485, longitude: number = 4.8467): Observable<Weather> {
    return this.http.get<Weather>(this.linkAPI+`&latitude=${latitude}&longitude=${longitude}`);
  }

  getWeatherCodes(): Observable<WeatherCode[]> {
    return this.http.get<WeatherCode[]>(this.weatherCodePath);
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesPath);
  }
  
}
