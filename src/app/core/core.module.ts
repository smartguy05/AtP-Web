import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component'
import {MaterialModule} from "./material.module";

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    MaterialModule,
  ],
  providers: [],
})
export class CoreModule { }
