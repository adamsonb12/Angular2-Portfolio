import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Experience} from "../experience";
import {ExperienceService} from "../experience.service";

@Component({
  selector: 'bp-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css']
})
export class ExperiencesListComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
  }

  onSelected(experience: Experience) {

  }

}
