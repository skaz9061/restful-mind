import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'app-condition-card',
  templateUrl: './condition-card.component.html',
  styleUrls: ['./condition-card.component.css']
})
export class ConditionCardComponent implements OnInit {

  constructor() { }

  @Input() photoLoc: string = "";
  @Input() condition: string = "";
  @Input() infoUrl: string = "";

  ngOnInit(): void {
  }

}
