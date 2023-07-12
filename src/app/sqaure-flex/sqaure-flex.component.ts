import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  templateUrl: './sqaure-flex.component.html',
  styleUrls: ['./sqaure-flex.component.scss'],
})
export class SqaureFlexComponent {
  @Input() divWidth = 100;
  @Input() divHeight = 100;
}
