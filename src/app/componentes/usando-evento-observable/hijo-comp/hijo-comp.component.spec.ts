import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoCompComponent } from './hijo-comp.component';

describe('HijoCompComponent', () => {
  let component: HijoCompComponent;
  let fixture: ComponentFixture<HijoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
