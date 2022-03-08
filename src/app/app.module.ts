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
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyComponent } from './privacy/privacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { FeedbackContactFormPopUpComponent } from './feedback-contact-form-pop-up/feedback-contact-form-pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImprintComponent,
    MainAreaComponent,
    MySkillsComponent,
    FooterComponent,
    StartComponent,
    AboutMeComponent,
    MyWorkComponent,
    ContactMeComponent,
    PrivacyComponent,
    FeedbackContactFormPopUpComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
