import { Component } from '@angular/core';

@Component({
  selector: 'app-qns1-display-name-age',
  templateUrl: './qns1-display-name-age.component.component.html',
  styleUrls: ['./qns1-display-name-age.component.component.css']
})
export class Qns1DisplayNameAgeComponent {
  name: string = '';
  age: number | null = null;
}
