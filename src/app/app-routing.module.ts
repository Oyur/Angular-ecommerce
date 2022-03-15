import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { CreateComponent } from './pages/frontend/create/create.component';
import { ForgotpassComponent } from './pages/frontend/forgotpass/forgotpass.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { LoginComponent } from './pages/frontend/login/login.component';
import { RegisterComponent } from './pages/frontend/register/register.component';
import { ViewComponent } from './pages/frontend/view/view.component';

const routes: Routes = [
  //Route
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgotpass',
        component: ForgotpassComponent
      }
    ]
  },
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children: [
      {
        path: 'stock',
        component: StockComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
