import { Component } from '@angular/core';
import { NavBarBlankComponent } from '../../Components/nav-bar-blank/nav-bar-blank.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [NavBarBlankComponent, RouterOutlet, FooterComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {

}
