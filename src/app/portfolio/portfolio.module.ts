import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';
import {PortfolioRoutingModule} from "./portfolio-routing.module";

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    PortfolioRoutingModule
  ],
  providers: [],
})
export class PortfolioModule { }
