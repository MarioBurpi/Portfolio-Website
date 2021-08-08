import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScrComponent } from './screens/home-scr/home-scr.component';
import { WorkScrComponent } from './screens/work-scr/work-scr.component';
import { AboutScrComponent } from './screens/about-scr/about-scr.component';
import { ContactScrComponent } from './screens/contact-scr/contact-scr.component';


const routes: Routes = [
  { path: 'home', component: HomeScrComponent },
  { path: 'work', component: WorkScrComponent },
  { path: 'about', component: AboutScrComponent },
  { path: 'contact', component: ContactScrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }
