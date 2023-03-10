import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NavbarComponent } from '../navbar/navbar.component';
import { MaterialModule } from './material.module';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
