import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private info: InfoService
  ) { }

  companyName: string = this.info.getCompanyName();

  ngOnInit(): void {
  }

}
