import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MegaMenuComponent } from "./shared/mega_menu/mega-menu.component";
import { Home } from "./Componnent/home/home";
@Component({
  selector: 'app-root',
  imports: [FloatLabelModule, Home],

  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('GameX');
}
