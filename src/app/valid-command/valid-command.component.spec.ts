import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidCommandComponent } from './valid-command.component';

describe('ValidCommandComponent', () => {
  let component: ValidCommandComponent;
  let fixture: ComponentFixture<ValidCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
