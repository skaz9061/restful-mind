import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";
import {ExternalLinkService} from "../external-link.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public info: InfoService,
    public eLinks: ExternalLinkService
  ) { }

  ngOnInit(): void {
  }

}
