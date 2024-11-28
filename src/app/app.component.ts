import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/shared/layout/footer/footer.component';
import { HeaderComponent } from './component/shared/layout/header/header.component';
import { SidebarComponent } from './component/shared/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '.:: neura-nexa ::.';
}
