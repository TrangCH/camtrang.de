import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



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

  constructor( private http: HttpClient) { }

  // endPoint = "http://cam-huy-trang.developerakademie.com/assets/send_mail/send_mail.php";

  post = {
    endPoint: 'https://cam-huy-trang.developerakademie.com/assets/send_mail/send_mail.php', // Ex. www.my-domain/sendMail.php

    body: (payload: any) => JSON.stringify(payload),

    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  ngOnInit(): void {
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.submitted && contactForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => alert("Hello, your message is being sent."),//console.log(response),
          error: (error) => alert("Hello, your message could not be sent. You can also send a message to Cam Trang via your email account."),//console.error(error),
          complete: () => alert("Hello, your message has been sent.")//console.info('send post complete'),
        });
    }
  }

}
