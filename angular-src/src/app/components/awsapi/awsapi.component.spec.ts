import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsapiComponent } from './awsapi.component';

describe('AwsapiComponent', () => {
  let component: AwsapiComponent;
  let fixture: ComponentFixture<AwsapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
