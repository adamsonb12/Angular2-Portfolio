import { Injectable } from '@angular/core';
import {Experience} from "./experience";

@Injectable()
export class ExperienceService {

  private experiences: Experience[] = [
    new Experience('Student Developer', 'I build web apps using Java, Angular 2, and SQL with OracleWork', 'Work in large teams to regularly release new versions and updates', 'I am comfortable using Angular 2 to build adaptive, responsive, well-designed web-applications', 'Developed some mobile apps on the Android platform in Android Studio', null, null, 'Missionary Training Center', '/assets/img/water.jpg'),
    new Experience('Product Manager', 'I owned and facilitated all user testing, weekly ideation standups, alpha and beta testing, and final rollout of new features (including user training) for 4 large scale web applications.', 'Tech stack included Angular, Angular 2, HTML, CSS, iOS, Android, and integrations with various 3rd party applications such as G Suite.', 'Web apps were built for internal use with ~1500 users.', 'I aggregated, vetted, and decided which new features and improvements be built.', 'Worked directly with designers, lead programmers, and scrum masters on a daily basis to deliver better experiences to our users.', 'I used Jira to organize projects, write user stories, and design new internal applications', 'Missionary Training Center', '/assets/img/water.jpg'),
    new Experience('Call Center Agent', 'I applied HTML and CSS helping Safe Home Control’s development specialist and used Microsoft Excel & VBA to create reports for upper management.', 'I analyzed and controlled sensitive data input and output using salesforce.com and internal data encryption tools.', 'I trained new employees and lead a team of four call center agents.', null, null, null, 'Safe Home Control', '/assets/img/water.jpg')
  ];

  constructor() { }

  getExperiences() {
    return this.experiences;
  }

  getExperience(id: number) {
    return this.experiences[id];
  }

}
