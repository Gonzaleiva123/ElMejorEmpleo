import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmploymentComponent } from './detail-employment.component';

describe('DetailEmploymentComponent', () => {
  let component: DetailEmploymentComponent;
  let fixture: ComponentFixture<DetailEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEmploymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
