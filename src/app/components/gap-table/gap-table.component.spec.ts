import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapTableComponent } from './gap-table.component';

describe('GapTableComponent', () => {
  let component: GapTableComponent;
  let fixture: ComponentFixture<GapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GapTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
