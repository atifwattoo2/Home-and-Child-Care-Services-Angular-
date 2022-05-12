import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtifComponent } from './atif.component';

describe('AtifComponent', () => {
  let component: AtifComponent;
  let fixture: ComponentFixture<AtifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
