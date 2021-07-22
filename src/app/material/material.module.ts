import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
} from "@angular/material";

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
