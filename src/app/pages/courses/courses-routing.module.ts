import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from '../../core/courses/courses.component';
import { EditCourseComponent } from '../../core/edit-course/edit-course.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    data: {
      breadcrumb: 'courses',
    },
  },
  {
    path: 'new',
    component: EditCourseComponent,
    data: {
      breadcrumb: 'new',
    },
  },
  {
    path: ':id',
    component: EditCourseComponent,
    data: {
      breadcrumb: 'id',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
