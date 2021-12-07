
import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Chart } from "chart.js";
@Component({
    selector: 'app-grafico',
    templateUrl: './grafico.component.html',
    styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
   @Input() data1 = [] as any
   @Input() data2 = [] as any
    @ViewChild("meuCanvas", { static: true }) elemento?: ElementRef;
    ngOnInit(): void {
        new Chart(this.elemento?.nativeElement, {
            type: 'line',
            data: {
                labels: ["0", "1", "2", "3", " 4", " 5", "6 ", " 7", "8 ", "9 ", "10 ", " 11", " 12", " 13", " 14"],
                datasets: [{
                    data: this.data1,
                    label: "Today",
                    borderColor: '#4488FF',
                    backgroundColor: 'rgba(0, 66, 131, 0.3)',




                }, {
                    label: "Yesterday",
                    data: this.data2,


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