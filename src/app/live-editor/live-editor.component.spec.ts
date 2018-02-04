import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEditorComponent } from './live-editor.component';

describe('LiveEditorComponent', () => {
  let component: LiveEditorComponent;
  let fixture: ComponentFixture<LiveEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
