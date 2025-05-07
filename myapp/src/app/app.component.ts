import { Component } from '@angular/core';
import { HijriDatepickerComponent } from './hijri-datepicker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HijriDatepickerComponent],
  template: `
    <h1>Hello World</h1>
    <app-hijri-datepicker></app-hijri-datepicker>
  `,
  styles: [],
})
export class AppComponent {}
