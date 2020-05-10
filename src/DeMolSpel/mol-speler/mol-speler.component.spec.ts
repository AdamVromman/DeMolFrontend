import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolSpelerComponent } from './mol-speler.component';

describe('MolSpelerComponent', () => {
  let component: MolSpelerComponent;
  let fixture: ComponentFixture<MolSpelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolSpelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolSpelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
