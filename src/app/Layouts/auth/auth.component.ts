import { Component } from '@angular/core';
import { NavBarAuthComponent } from '../../Components/nav-bar-auth/nav-bar-auth.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NavBarAuthComponent, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
