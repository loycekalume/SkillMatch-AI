import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../jobseekerContent/sidebar/sidebar.component';
import { HeaderComponent } from '../jobseekerContent/header/header.component';


@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,SidebarComponent,HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
