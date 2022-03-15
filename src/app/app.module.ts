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
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { RegisterComponent } from './pages/frontend/register/register.component';
import { LoginComponent } from './pages/frontend/login/login.component';
import { ForgotpassComponent } from './pages/frontend/forgotpass/forgotpass.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout/backend-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontendLayoutComponent,
    HeaderFrontendComponent,
    CreateComponent,
    ViewComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpassComponent,
    StockComponent,
    BackendLayoutComponent
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
