import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCoverageComponent } from './cost-coverage.component';

describe('CostCoverageComponent', () => {
  let component: CostCoverageComponent;
  let fixture: ComponentFixture<CostCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCoverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
