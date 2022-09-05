import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private info: InfoService
  ) { }

  ngOnInit(): void {
  }

  companyName:string = this.info.getCompanyName();
  contactEmail:string = this.info.getContactEmail();
  phoneNumber:string = this.info.getPhoneNumber();

  year:number = new Date().getFullYear();

}
