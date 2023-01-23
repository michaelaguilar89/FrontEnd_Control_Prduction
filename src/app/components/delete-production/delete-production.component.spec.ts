import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductionComponent } from './delete-production.component';

describe('DeleteProductionComponent', () => {
  let component: DeleteProductionComponent;
  let fixture: ComponentFixture<DeleteProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
