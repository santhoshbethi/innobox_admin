import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [components],
})
export class CommonuiModule {}
