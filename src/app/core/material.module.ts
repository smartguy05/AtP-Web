import {NgModule} from "@angular/core";
import {MatCommonModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  imports: [
    MatCommonModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [
    MatListModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
