import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";
import {ExternalLinkService} from "../external-link.service";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  token: string|undefined;
  contactForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    message: ['', Validators.required],
    recaptcha: ['', Validators.required]
  })

  constructor(
    public info: InfoService,
    public eLinks: ExternalLinkService,
    private api: ApiService,
    private fb: FormBuilder,
  ) {
    this.token = undefined;
  }

  ngOnInit(): void {

  }

  get name() {return this.contactForm.get('name') as FormControl;}
  get address() {return this.contactForm.get('address') as FormControl;}
  get email() {return this.contactForm.get('email') as FormControl;}
  get phoneNumber() {return this.contactForm.get('phoneNumber') as FormControl;}
  get message() {return this.contactForm.get('message') as FormControl;}
  get recaptcha() {return this.contactForm.get('recaptcha') as FormControl;}


  public send(): void {
    if(this.contactForm.invalid){
      this.contactForm.markAllAsTouched();
    } else {
      this.token = this.recaptcha.value
      if (this.token != null) {
        this.api.recaptcha(this.token).subscribe(
          {
            next: data => {
              if (data) {
                this.api.email(
                  this.name.value,
                  this.address.value,
                  this.email.value,
                  this.phoneNumber.value,
                  this.message.value
                ).subscribe({
                    next: data => {
                      console.log(data);
                      if (data == "success"){
                        this.contactForm.reset();
                      }
                    },
                    error: err => {
                      console.error('problem with sending email: %s', err.message);
                    }
                  }
                );
              } else {
                console.error('recaptcha verification invalid')
              }
            },
            error: err => {
              console.error('problem with recaptcha api call: %s', err.message);
            }
          }
        );
      }
    }
  }
}
