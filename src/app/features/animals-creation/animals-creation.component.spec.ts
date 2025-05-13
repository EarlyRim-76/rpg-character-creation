import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsCreationComponent } from './animals-creation.component';

describe('AnimalsCreationComponent', () => {
  let component: AnimalsCreationComponent;
  let fixture: ComponentFixture<AnimalsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
