import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProdutos } from './edicao-produtos';

describe('EdicaoProdutos', () => {
  let component: EdicaoProdutos;
  let fixture: ComponentFixture<EdicaoProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(EdicaoProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
