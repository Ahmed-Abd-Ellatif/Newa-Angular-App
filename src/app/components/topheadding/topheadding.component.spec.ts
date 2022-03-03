import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheaddingComponent } from './topheadding.component';

describe('TopheaddingComponent', () => {
  let component: TopheaddingComponent;
  let fixture: ComponentFixture<TopheaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheaddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
