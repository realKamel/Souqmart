import {
	ChangeDetectionStrategy,
	Component,
	signal,
	WritableSignal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { InputOtpModule } from 'primeng/inputotp';
@Component({
	selector: 'app-forget-password',
	standalone: true,
	imports: [
		ButtonModule,
		StepperModule,
		IconFieldModule,
		InputTextModule,
		InputIconModule,
		FormsModule,
		RippleModule,
		InputOtpModule,
	],
	templateUrl: './forget-password.component.html',
	styleUrl: './forget-password.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgetPasswordComponent {
	email: WritableSignal<string> = signal('');
	code: WritableSignal<string> = signal('');
	password: WritableSignal<string> = signal('');
}
