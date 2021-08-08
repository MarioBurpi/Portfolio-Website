import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './shared/main/main.component';
import { HomeScrComponent } from './screens/home-scr/home-scr.component';
import { AboutScrComponent } from './screens/about-scr/about-scr.component';
import { WorkScrComponent } from './screens/work-scr/work-scr.component';
import { ContactScrComponent } from './screens/contact-scr/contact-scr.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeScrComponent,
    AboutScrComponent,
    WorkScrComponent,
    ContactScrComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
