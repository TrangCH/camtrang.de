import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FeedbackContactFormPopUpComponent } from '../feedback-contact-form-pop-up/feedback-contact-form-pop-up.component';



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

  constructor(private http: HttpClient, public dialog: MatDialog) { }

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
          next: () => setTimeout(() => {
            const dialogRef= this.dialog.open(FeedbackContactFormPopUpComponent);
            dialogRef.afterClosed().subscribe(() => {
              console.log('The dialog was closed');
              window.location.reload();
            });
          }, 500), //console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    }
  }

}
