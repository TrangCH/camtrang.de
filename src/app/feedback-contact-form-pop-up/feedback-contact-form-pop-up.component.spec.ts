import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackContactFormPopUpComponent } from './feedback-contact-form-pop-up.component';

describe('FeedbackContactFormPopUpComponent', () => {
  let component: FeedbackContactFormPopUpComponent;
  let fixture: ComponentFixture<FeedbackContactFormPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackContactFormPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackContactFormPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
