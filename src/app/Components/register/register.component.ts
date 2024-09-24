import { Component, inject, OnDestroy, signal } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { NgClass } from '@angular/common';
import { finalize, Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';
@Component({
	selector: 'app-register',
	standalone: true,
	imports: [
		RouterLink,
		ReactiveFormsModule,
		NgClass,
		InputGroupAddonModule,
		InputGroupModule,
		PasswordModule,
		DividerModule,
		InputMaskModule,
	],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css',
})
export class RegisterComponent implements OnDestroy {
	readonly _AuthService = inject(AuthService);
	readonly _ToastrService = inject(ToastrService);
	readonly _Router = inject(Router);
	isLoading = signal(false);
	private destroy$ = new Subject<void>();
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
			rePassword: new FormControl(null, [Validators.minLength(1)]),
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
		console.log(this.registerForm.value);
		if (this.registerForm.valid) {
			this.isLoading.set(true);
			this._AuthService
				.signUp(this.registerForm.value)
				.pipe(
					finalize(() => this.isLoading.set(false)),
					takeUntil(this.destroy$)
				)
				.subscribe({
					next: (res) => {
						this._AuthService.setUserToken(res.token);
						this._ToastrService.success(res.message, 'Souq');
						this._Router.navigate(['/home']);
					},
				});
		} else {
			this.registerForm.markAllAsTouched();
		}
	}
	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
