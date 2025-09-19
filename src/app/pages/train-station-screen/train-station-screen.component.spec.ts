import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainStationScreenComponent } from './train-station-screen.component';

describe('TrainStationScreenComponent', () => {
  let component: TrainStationScreenComponent;
  let fixture: ComponentFixture<TrainStationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainStationScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainStationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
