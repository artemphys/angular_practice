import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  public breadcrumbs: Subject<string[]> = new Subject();

  public set(items): void {
    this.breadcrumbs.next(items);
  }
}
