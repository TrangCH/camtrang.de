import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { StartComponent } from './start/start.component';







const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'privacy', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
