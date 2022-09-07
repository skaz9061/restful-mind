import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cost-coverage',
  templateUrl: './cost-coverage.component.html',
  styleUrls: ['./cost-coverage.component.css']
})
export class CostCoverageComponent implements OnInit {

  constructor(private activatedRote: ActivatedRoute) { }
  ngOnInit(): void {
    setTimeout( () => {
      if (this.activatedRote.snapshot.url[0].path == "rates") {
        const el = document.getElementById("rates");
        if( el != null) {
          el.scrollIntoView({behavior: "smooth"});
        }
      }
    }, 500);
  }
}
