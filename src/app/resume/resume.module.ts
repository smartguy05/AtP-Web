import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume.component';
import { WorkComponent } from './work/work.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import {ResumeRoutingModule} from "./resume-routing.module";
import {CommonModule} from "@angular/common";
import {ResumeService} from "@resume/services/resume.service";
import {MaterialModule} from "@core/material.module";

@NgModule({
  declarations: [
    ResumeComponent,
    WorkComponent,
    TechnologiesComponent,
  ],
  imports: [
    ResumeRoutingModule,
    CommonModule,
    MaterialModule
  ],
  providers: [
    ResumeService
  ],
})
export class ResumeModule { }
