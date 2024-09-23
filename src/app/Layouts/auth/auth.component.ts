import { Component } from '@angular/core';
import { NavBarAuthComponent } from '../../Components/nav-bar-auth/nav-bar-auth.component';
import { RouterOutlet } from '@angular/router';
import { LogInComponent } from "../../Components/log-in/log-in.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NavBarAuthComponent, RouterOutlet, LogInComponent, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
