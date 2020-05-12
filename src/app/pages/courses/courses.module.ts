import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreModule, CoursesRoutingModule],
})
export class CoursesModule {}
