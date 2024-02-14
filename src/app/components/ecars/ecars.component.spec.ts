import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcarsComponent } from './ecars.component';

describe('EcarsComponent', () => {
  let component: EcarsComponent;
  let fixture: ComponentFixture<EcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
