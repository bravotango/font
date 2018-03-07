import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcodesComponent } from './htmlcodes.component';

describe('HtmlcodesComponent', () => {
  let component: HtmlcodesComponent;
  let fixture: ComponentFixture<HtmlcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
