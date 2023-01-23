import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductionComponent } from './list-production.component';

describe('ListProductionComponent', () => {
  let component: ListProductionComponent;
  let fixture: ComponentFixture<ListProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
