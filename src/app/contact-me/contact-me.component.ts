import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    message: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(contactForm: NgForm) {
  //   if (contactForm.valid) {
  //     //this.sendForm(myForm);
  //   }
  // }

}
