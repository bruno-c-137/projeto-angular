
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true }) elemento?: ElementRef;
  ngOnInit(): void {
    new Chart(this.elemento?.nativeElement, {
      type: 'line',
      data: {
        labels: ["0", "1", "2", "3", " 4", " 5", "6 ", " 7", "8 ", "9 ", "10 ", " 11", " 12", " 13", " 14"],
        datasets: [{
          data: [10, 15, 20, 30, 40, 50, 60, 5, 2, 10, 15, 20, 30, 40, 50,20],
          label: "Today",
          borderColor: '#4488FF',
          backgroundColor: 'rgba(0, 66, 131, 0.3)',




        }, {
          label: "Yesterday",
          data: [20, 30, 40, 50, 60, 5, 2, 15, 20, 30, 40, 50, 60,2, 10, 15,],


        }]

      },
      options: {

        title: {

          display: true,
          fontSize: 20,

          text: "Today's trends",

        }
      }

    });

  }

}