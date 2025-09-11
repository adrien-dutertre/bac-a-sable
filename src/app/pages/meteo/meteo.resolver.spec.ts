import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { meteoResolver } from './meteo.resolver';

describe('meteoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => meteoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
