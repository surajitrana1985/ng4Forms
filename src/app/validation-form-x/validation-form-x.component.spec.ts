import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFormXComponent } from './validation-form-x.component';

describe('ValidationFormXComponent', () => {
  let component: ValidationFormXComponent;
  let fixture: ComponentFixture<ValidationFormXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationFormXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationFormXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
