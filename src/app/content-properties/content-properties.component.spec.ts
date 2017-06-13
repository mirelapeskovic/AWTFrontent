import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPropertiesComponent } from './content-properties.component';

describe('ContentPropertiesComponent', () => {
  let component: ContentPropertiesComponent;
  let fixture: ComponentFixture<ContentPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
