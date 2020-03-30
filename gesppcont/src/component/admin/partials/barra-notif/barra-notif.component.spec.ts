import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNotifComponent } from './barra-notif.component';

describe('BarraNotifComponent', () => {
  let component: BarraNotifComponent;
  let fixture: ComponentFixture<BarraNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
