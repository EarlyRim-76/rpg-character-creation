import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCategoryListComponent } from './animal-category-list.component';

describe('AnimalCategoryListComponent', () => {
  let component: AnimalCategoryListComponent;
  let fixture: ComponentFixture<AnimalCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
