import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headere } from './headere';

describe('Headere', () => {
  let component: Headere;
  let fixture: ComponentFixture<Headere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headere);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
