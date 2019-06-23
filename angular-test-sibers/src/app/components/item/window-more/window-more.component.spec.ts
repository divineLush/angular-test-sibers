import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowMoreComponent } from './window-more.component';

describe('WindowMoreComponent', () => {
  let component: WindowMoreComponent;
  let fixture: ComponentFixture<WindowMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
