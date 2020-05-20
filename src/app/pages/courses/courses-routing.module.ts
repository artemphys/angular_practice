import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from '../../core/courses/courses.component';
import { EditCourseComponent } from '../../core/edit-course/edit-course.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'new',
    component: EditCourseComponent,
  },
  {
    path: ':id',
    component: EditCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
