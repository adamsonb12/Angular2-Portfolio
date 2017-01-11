import {Component, OnInit, OnDestroy} from '@angular/core';
import {Experience} from "../experience";
import {ExperienceService} from "../experience.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'bp-experiences-detail',
  templateUrl: './experiences-detail.component.html',
  styleUrls: ['./experiences-detail.component.css']
})
export class ExperiencesDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private experienceIndex: number;
  selectedExperience: Experience;

  constructor(private route: ActivatedRoute, private experienceService: ExperienceService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.experienceIndex = params['id'];
        this.selectedExperience = this.experienceService.getExperience(this.experienceIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
