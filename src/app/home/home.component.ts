import { Component, OnInit } from '@angular/core';
import {ExternalLinkService} from "../external-link.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public eLinks: ExternalLinkService
  ) { }

  ngOnInit(): void {
  }

}
