import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "@models/experience.model";

@Component({
  selector: 'atp-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @Input()
  public experience!: Experience;

  public display!: string;

  constructor() { }

  ngOnInit(): void {
    this.display = JSON.stringify(this.experience);
  }

}
