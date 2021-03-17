import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import { TechComponent } from './components/tech/tech.component';
import { ProjectComponent } from './components/project/project.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tech',
    component: TechComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
