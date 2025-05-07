import { Component } from '@angular/core';

@Component({
  selector: 'app-hijri-datepicker',
  standalone: true,
  templateUrl: './hijri-datepicker.component.html',
  styles: [],
})
export class HijriDatepickerComponent {
  selectedDate: string | null = null;
}
