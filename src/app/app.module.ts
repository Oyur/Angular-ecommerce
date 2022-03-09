import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { HeaderFrontendComponent } from './shared/frontend/header-frontend/header-frontend.component';
import { CreateComponent } from './pages/frontend/create/create.component';
import { ViewComponent } from './pages/frontend/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontendLayoutComponent,
    HeaderFrontendComponent,
    CreateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
