import {Component, Input} from '@angular/core';
import {Experience} from "../experience";

@Component({
  selector: 'bp-experiences-item',
  templateUrl: './experiences-item.component.html',
  styleUrls: ['./experiences-item.component.css']
})
export class ExperiencesItemComponent {

  @Input() experience: Experience;
  @Input() experienceId: number;

}
