import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConfirmationComponent } from './client-confirmation.component';

describe('ClientConfirmationComponent', () => {
  let component: ClientConfirmationComponent;
  let fixture: ComponentFixture<ClientConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
