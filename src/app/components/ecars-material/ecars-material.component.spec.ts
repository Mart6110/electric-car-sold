import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcarsMaterialComponent } from './ecars-material.component';

describe('EcarsMaterialComponent', () => {
  let component: EcarsMaterialComponent;
  let fixture: ComponentFixture<EcarsMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcarsMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcarsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
