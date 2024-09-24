import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
@Component({
	selector: 'app-nav-bar-blank',
	standalone: true,
	imports: [
		RouterLink,
		RouterLinkActive,
		IconFieldModule,
		InputTextModule,
		InputIconModule,
	],
	templateUrl: './nav-bar-blank.component.html',
	styleUrl: './nav-bar-blank.component.css',
})
export class NavBarBlankComponent {}
