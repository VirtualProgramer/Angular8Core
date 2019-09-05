import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDeployComponent } from './example-deploy.component';

describe('ExampleDeployComponent', () => {
  let component: ExampleDeployComponent;
  let fixture: ComponentFixture<ExampleDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
