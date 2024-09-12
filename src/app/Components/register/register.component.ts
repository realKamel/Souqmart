import { Component, inject } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [RouterLink, ReactiveFormsModule, NgClass],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css',
})
export class RegisterComponent {
	readonly _AuthService = inject(AuthService);
	registerForm: FormGroup = new FormGroup(
		{
			name: new FormControl(null, [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(20),
			]),
			email: new FormControl(null, [
				Validators.required,
				Validators.email,
			]),
			password: new FormControl(null, [
				Validators.required,
				Validators.pattern(/^\w{6,}$/),
			]),
			rePassword: new FormControl(null, [Validators.minLength(6)]),
			phone: new FormControl(null, [
				Validators.required,
				Validators.pattern(/^01[0125]\d{8}$/),
			]),
		},
		this.passwordMatchValidator
	);
	passwordMatchValidator(g: AbstractControl) {
		return g.get('password')?.value === g.get('rePassword')?.value
			? null
			: { mismatch: true };
	}

	registerUser() {
		console.log(this.registerForm);
	}
}
