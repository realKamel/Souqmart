import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-log-in',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './log-in.component.html',
	styleUrl: './log-in.component.css',
})
export class LogInComponent {}
