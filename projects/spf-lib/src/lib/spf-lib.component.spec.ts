import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpfLibComponent } from './spf-lib.component';

describe('SpfLibComponent', () => {
  let component: SpfLibComponent;
  let fixture: ComponentFixture<SpfLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpfLibComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpfLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
