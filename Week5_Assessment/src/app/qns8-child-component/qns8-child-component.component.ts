import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qns8-child-component',
  templateUrl: './qns8-child-component.component.html',
  styleUrls: ['./qns8-child-component.component.css']
})
export class Qns8ChildComponentComponent {
  @Input() name: string = '';
}
