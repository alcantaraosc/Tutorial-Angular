import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrEventNgmodelComponent } from './attr-event-ngmodel.component';

describe('AttrEventNgmodelComponent', () => {
  let component: AttrEventNgmodelComponent;
  let fixture: ComponentFixture<AttrEventNgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrEventNgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrEventNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
