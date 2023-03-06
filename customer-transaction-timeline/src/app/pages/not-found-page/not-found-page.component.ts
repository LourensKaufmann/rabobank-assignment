import { Component } from '@angular/core';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';

@Component({
  standalone: true,
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  imports: [LayoutComponent],
})
export class NotFoundPageComponent {}
