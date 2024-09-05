import { Component } from '@angular/core';
import { NavBarBlankComponent } from '../../Components/nav-bar-blank/nav-bar-blank.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [NavBarBlankComponent,RouterOutlet],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {

}
