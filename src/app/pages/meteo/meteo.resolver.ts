import { ResolveFn } from '@angular/router';
import { Weather } from './weather.interface';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { WeatherService } from './weather.service';

export const meteoResolver: ResolveFn<Weather> = (route, state): Observable<Weather> => {
  const meteoService = inject(WeatherService);
  return meteoService.get();
};
