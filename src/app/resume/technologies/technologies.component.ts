import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'atp-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  @Input()
  public technologies!: string[];
  @Input()
  public category!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
