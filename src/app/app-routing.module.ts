import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './core/courses/courses.component';

const routes: Routes = [
  { path: 'courses-page', component: CoursesComponent },
  { path: '', redirectTo: '/courses-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
