import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollyComponent } from './polly.component';

describe('PollyComponent', () => {
  let component: PollyComponent;
  let fixture: ComponentFixture<PollyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
