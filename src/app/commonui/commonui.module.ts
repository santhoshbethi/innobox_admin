import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from  '@angular/material/list';


const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [components],
})
export class CommonuiModule {}
