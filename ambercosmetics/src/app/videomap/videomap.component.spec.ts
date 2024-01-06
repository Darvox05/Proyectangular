import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideomapComponent } from './videomap.component';

describe('VideomapComponent', () => {
  let component: VideomapComponent;
  let fixture: ComponentFixture<VideomapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideomapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideomapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
