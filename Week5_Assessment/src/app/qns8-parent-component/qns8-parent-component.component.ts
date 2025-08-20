import { Component } from '@angular/core';

@Component({
  selector: 'app-qns8-parent-component',
  templateUrl: './qns8-parent-component.component.html',
  styleUrls: ['./qns8-parent-component.component.css']
})
export class Qns8ParentComponentComponent {
  parentName: string = 'John Doe';  // Sample name to pass to child
}
