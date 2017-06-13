import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavigationMenuComponent } from './user-navigation-menu.component';

describe('UserNavigationMenuComponent', () => {
  let component: UserNavigationMenuComponent;
  let fixture: ComponentFixture<UserNavigationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavigationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
