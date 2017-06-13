import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentPropertiesComponent } from './content-properties/content-properties.component';
import { ContentFilterComponent } from './content-filter/content-filter.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { UserNavigationMenuComponent } from './user-navigation-menu/user-navigation-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    DashboardComponent,
    ContentPropertiesComponent,
    ContentFilterComponent,
    NavigationMenuComponent,
    UserNavigationMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
