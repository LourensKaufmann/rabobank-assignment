import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss'],
})
export class NavigationButtonComponent {
  @Input() to?: string | any[] | null | undefined;
}
