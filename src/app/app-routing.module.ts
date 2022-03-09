import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { CreateComponent } from './pages/frontend/create/create.component';
import { HomeComponent } from './pages/frontend/home/home.component';
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
        path: 'view',
        component: ViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
