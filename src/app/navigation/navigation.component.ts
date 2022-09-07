import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";
import {ExternalLinkService} from "../external-link.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private info: InfoService,
    public eLinks: ExternalLinkService
  ) { }

  phoneNumber:string = this.info.getPhoneNumber();

  ngOnInit(): void {
  }

}
