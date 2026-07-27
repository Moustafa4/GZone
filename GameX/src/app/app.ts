import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';@Component({
  selector: 'app-root',
  imports: [ DatePicker, FloatLabelModule],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('GameX');
}
