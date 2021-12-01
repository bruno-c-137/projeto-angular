import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  host: {'class': 'container block mx-auto px-5 sm:px-3'}
})
export class ContainerComponent implements OnInit {
  @Input() class = '';

  constructor() { }

  ngOnInit(): void {
  }

}
