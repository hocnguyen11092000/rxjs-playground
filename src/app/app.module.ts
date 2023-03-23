import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormItemComponent } from 'src/components/form-item/form-item.component';
import { FormContainerComponent } from 'src/components/form-container/form-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FormItemComponent, FormContainerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
