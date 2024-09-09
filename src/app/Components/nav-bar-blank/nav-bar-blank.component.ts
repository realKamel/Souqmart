import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-nav-bar-blank',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './nav-bar-blank.component.html',
	styleUrl: './nav-bar-blank.component.css',
})
export class NavBarBlankComponent {}
