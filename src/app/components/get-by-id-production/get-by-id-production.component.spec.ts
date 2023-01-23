import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdProductionComponent } from './get-by-id-production.component';

describe('GetByIdProductionComponent', () => {
  let component: GetByIdProductionComponent;
  let fixture: ComponentFixture<GetByIdProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIdProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByIdProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
