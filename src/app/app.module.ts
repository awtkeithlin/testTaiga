import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TuiDialogModule, TuiNotificationsModule, TuiRootModule} from '@taiga-ui/core';
import {iconsPathFactory, TUI_ICONS_PATH} from '@taiga-ui/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    AppRoutingModule,
  ],
  providers: [ {
    provide: TUI_ICONS_PATH,
    useValue: iconsPathFactory('assets/taiga-ui/icons/'),
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
