import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'bp-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  onSubmit(form: NgForm) {
    window.open('mailto:adamsonb12@byu.edu?subject='+form.value.emailsubject+'&body='+'Hey Brett, this is ' +
      form.value.namefull + ' and my number is ' + form.value.userphone + '%0D%0A' + '%0D%0A' + form.value.emailmessage);
  }

}
