import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { UserComponent } from './user/user.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { SectionComponent } from './section/section.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightCourseDirective } from '../directives/highlight-course.directive';
import { DurationPipe } from '../pipes/duration.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { DeleteCourseModalComponent } from './delete-course-modal/delete-course-modal.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingBlockComponent } from './loading-block/loading-block.component';
import { TitleInputComponent } from './form-fields/title-input/title-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CoursesComponent,
    CourseComponent,
    UserComponent,
    CourseSearchComponent,
    FooterComponent,
    HighlightCourseDirective,
    DurationPipe,
    SearchPipe,
    OrderByPipe,
    DeleteCourseModalComponent,
    EditCourseComponent,
    NotFoundComponent,
    LoadingBlockComponent,
    TitleInputComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CoursesComponent,
    FooterComponent,
    LoadingBlockComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
})
export class CoreModule {}
