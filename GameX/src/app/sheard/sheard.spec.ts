import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sheard } from './sheard';

describe('Sheard', () => {
  let component: Sheard;
  let fixture: ComponentFixture<Sheard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sheard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sheard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
