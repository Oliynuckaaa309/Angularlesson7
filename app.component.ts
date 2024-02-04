import { Component } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
 import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header/header.component';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
     FormsModule, HttpClientModule, 
     HttpClientJsonpModule, HeaderComponent, RouterLink, RouterLinkActive,  RouterModule, CommonModule, ],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
 })
 export class AppComponent {
  title = 'my-app';
 }


