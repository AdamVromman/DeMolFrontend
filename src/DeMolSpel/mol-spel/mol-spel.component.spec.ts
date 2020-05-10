import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolSpelComponent } from './mol-spel.component';

describe('MolSpelComponent', () => {
  let component: MolSpelComponent;
  let fixture: ComponentFixture<MolSpelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolSpelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolSpelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
