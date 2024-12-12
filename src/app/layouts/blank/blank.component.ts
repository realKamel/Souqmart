import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarBlankComponent } from "../../components/nav-bar-blank/nav-bar-blank.component";

@Component({
  selector: 'app-blank',
  imports: [RouterOutlet, NavBarBlankComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

}
