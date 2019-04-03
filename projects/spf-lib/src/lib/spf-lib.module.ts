import { NgModule } from '@angular/core';
import { SpfLibComponent } from './spf-lib.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [SpfLibComponent, ButtonComponent],
  imports: [],
  exports: [SpfLibComponent, ButtonComponent]
})
export class SpfLibModule {}
