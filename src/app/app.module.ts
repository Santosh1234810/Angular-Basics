import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { NameDirectiveComponent } from './name-directive/name-directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToggleImageComponent } from './toggle-image/toggle-image.component';
import { ToggleListComponent } from './toggle-list/toggle-list.component';
import { NavComponent } from './nav/nav.component';
import { AngFormComponent } from './ang-form/ang-form.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { SqaurePipe } from './shared/customePipe/sqaure.pipe';
import { MygenderPipe } from './shared/customPipe/mygender.pipe';
import { ServiceDataComponent } from './service-data/service-data.component';
import {HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    NameDirectiveComponent,
    DataBindingComponent,
    ToggleImageComponent,
    ToggleListComponent,
    NavComponent,
    AngFormComponent,
    UtdfComponent,
    RtfComponent,
    PageNotFoundComponent,
    MypipeComponent,
    SqaurePipe,
    MygenderPipe,
    ServiceDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
