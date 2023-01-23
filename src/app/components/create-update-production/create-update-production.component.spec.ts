import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateProductionComponent } from './create-update-production.component';

describe('CreateUpdateProductionComponent', () => {
  let component: CreateUpdateProductionComponent;
  let fixture: ComponentFixture<CreateUpdateProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
