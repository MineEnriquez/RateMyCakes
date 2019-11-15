import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaketoshowComponent } from './caketoshow.component';

describe('CaketoshowComponent', () => {
  let component: CaketoshowComponent;
  let fixture: ComponentFixture<CaketoshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaketoshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaketoshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
