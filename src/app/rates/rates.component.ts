import { Component, OnInit } from '@angular/core';
import {ExternalLinkService} from "../external-link.service";

interface Rate {
  name: string;
  price: string;
}

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  rates: Rate[] = [
    {
      name: "Initial Visit",
      price: "$199"
    },
    {
      name: "Follow-Up",
      price: "$95"
    }
  ]

  constructor(
    public eLinks: ExternalLinkService
  ) { }

  ngOnInit(): void {
  }

}
