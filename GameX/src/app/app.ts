import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MegaMenuComponent } from './shared/mega_menu/mega-menu.component';
import { Home } from './Componnent/home/home';
import { Footer } from './Componnent/footer/footer';
import { AboutUs } from './Componnent/about-us/about-us';
import { Login } from './Auth/login/login';
import { Header } from './Componnent/header/header';
@Component({
  selector: 'app-root',
  imports: [FloatLabelModule, Home, Footer, AboutUs, Login, Header],

  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('GameX');
}
