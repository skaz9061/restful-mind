import { Component, OnInit } from '@angular/core';
import {ExternalLinkService} from "../external-link.service";

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent implements OnInit {

  constructor(
    public eLinks: ExternalLinkService
  ) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
