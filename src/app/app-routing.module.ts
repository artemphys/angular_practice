import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './core/courses/courses.component';
import { LoginComponent } from './core/login/login.component';

export const ROUTES: Routes = [
  { path: 'courses-page', component: CoursesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // TODO: implement ProtectedRoutes
  { path: 'login', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
