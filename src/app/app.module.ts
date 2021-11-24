import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImprintComponent,
    MainAreaComponent,
    MySkillsComponent,
    FooterComponent,
    StartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
