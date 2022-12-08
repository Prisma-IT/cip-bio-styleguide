import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoWatchComponent } from './also-watch.component';

describe('AlsoWatchComponent', () => {
  let component: AlsoWatchComponent;
  let fixture: ComponentFixture<AlsoWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsoWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
