import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-value-timeonly',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-value-timeonly.component.html',
  styleUrls: ['./label-value-timeonly.component.scss']
})
export class LabelValueTimeonlyComponent {
  // TODO: Test inputs rendered correctly.
  @Input() dateString?: string;
}
