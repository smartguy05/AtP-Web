import { Component, OnInit } from '@angular/core';
import {ResumeService} from "@resume/services/resume.service";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'atp-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  // public skills$: Observable<any[]> = this.api.skills;
  public skills$ = new Subject<any[]>();

  constructor(
    private readonly api: ResumeService
  ) { }

  ngOnInit(): void {
    this.api.skills.subscribe(s => {
      console.log(s);
      this.skills$.next(s);
    });
  }

}
