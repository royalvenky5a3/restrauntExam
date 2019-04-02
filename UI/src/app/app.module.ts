import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DisplayRestrauntsComponent } from './display-restraunts/display-restraunts.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadRestrauntComponent } from './upload-restraunt/upload-restraunt.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayRestrauntsComponent,
    UploadRestrauntComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'vaultwebdb'),
    AngularFirestoreModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
