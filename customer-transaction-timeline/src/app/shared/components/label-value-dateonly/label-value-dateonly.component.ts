import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-value-dateonly',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-value-dateonly.component.html',
  styleUrls: ['./label-value-dateonly.component.scss']
})
export class LabelValueDateonlyComponent {
  @Input() dateString?: string;
}
