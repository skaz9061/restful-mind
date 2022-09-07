import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  insuranceLogos: string[] = [
    "aetna.png",
    "bcbs.png",
    "cigna.png",
    "oscar.webp",
    "oxford.png",
    "uhc.png"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
