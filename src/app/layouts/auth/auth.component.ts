import { Component } from '@angular/core';
import { NavBarAuthComponent } from '../../components/nav-bar-auth/nav-bar-auth.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-auth',
	imports: [RouterOutlet, NavBarAuthComponent],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.scss',
})
export class AuthComponent {}
