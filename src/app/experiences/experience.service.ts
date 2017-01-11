import { Injectable } from '@angular/core';
import {Experience} from "./experience";

@Injectable()
export class ExperienceService {

  private experiences: Experience[] = [
    new Experience('Student Developer', 'I coded like a boss', 'Missionary Training Center'),
    new Experience('Product Manager', 'I product managed like a boss', 'Missionary Training Center'),
    new Experience('Call Center Agent', 'I agented like a boss', 'Safe Home Control')
  ];

  constructor() { }

  getExperiences() {
    return this.experiences;
  }

  getExperience(id: number) {
    return this.experiences[id];
  }

}
