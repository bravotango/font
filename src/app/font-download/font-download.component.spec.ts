import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontDownloadComponent } from './font-download.component';

describe('FontDownloadComponent', () => {
  let component: FontDownloadComponent;
  let fixture: ComponentFixture<FontDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
