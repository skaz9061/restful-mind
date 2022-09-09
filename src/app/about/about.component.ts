import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";
import {Utils} from "../utils";
import {KeyValue} from "@angular/common";
import {Location} from "../location";
import {ExternalLinkService} from "../external-link.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private info: InfoService,
    public eLinks: ExternalLinkService
    ) { }

  ngOnInit(): void {
  }

  providerName = this.info.getProviderName();
  providerDesc = this.info.getProviderDesc();
  providerImage = this.info.getProviderImageLoc();

  schoolImages: string[] = [
    "assets/school-logos/jfk-muhlenburg.jpg",
    "assets/school-logos/University_of_Texas_at_Arlington_seal.png",
    "assets/school-logos/usu_seal.jpg",
    "assets/school-logos/aanp-stamp.png"
  ];

  officeHours: {[key: string]: string} = this.info.getHours();
  locations: Location[] = this.info.getLocations();
  hoursSort: (a: KeyValue<string, string>, b: KeyValue<string, string>) => number = Utils.getOriginalOrderSortFunction();
}
