import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaArticulosComponent } from './tabla-articulos.component';

describe('TablaArticulosComponent', () => {
  let component: TablaArticulosComponent;
  let fixture: ComponentFixture<TablaArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaArticulosComponent]
    });
    fixture = TestBed.createComponent(TablaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
