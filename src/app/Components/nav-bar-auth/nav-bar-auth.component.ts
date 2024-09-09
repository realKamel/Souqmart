import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-nav-bar-auth',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './nav-bar-auth.component.html',
	styleUrl: './nav-bar-auth.component.css',
})
export class NavBarAuthComponent {}
