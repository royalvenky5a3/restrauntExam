import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayRestrauntsComponent } from './display-restraunts/display-restraunts.component';
import { UploadRestrauntComponent } from './upload-restraunt/upload-restraunt.component';

const routes: Routes = [
  {path: '', redirectTo: 'displayRestraunts', pathMatch: 'full'},
  {path: 'displayRestraunts', component: DisplayRestrauntsComponent},
  {path: 'uploadRestraunt', component: UploadRestrauntComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
