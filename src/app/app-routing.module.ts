import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectoryComponent } from './directory/directory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToggleImageComponent } from './toggle-image/toggle-image.component';
import { AngFormComponent } from './ang-form/ang-form.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/Guard/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  // {
  //   path: "",redirectTo: "login",pathMatch: "full"
  // },
  // {path:"",component:DataBindingComponent}, //default routing
  {path:"databinding",component:DataBindingComponent,canActivate:[AuthGuard]}, //naming routing
  {path:"directive",component:DirectoryComponent,canActivate:[AuthGuard]},
  {path:"toggleimage",component:ToggleImageComponent,canActivate:[AuthGuard]},
  {path:"toggleimage/id",component:ToggleImageComponent,canActivate:[AuthGuard]},//parameterize routing
  {path:"myPipe",component:MypipeComponent,canActivate:[AuthGuard]},
  // lazyloading
  {path:"crud",
  loadChildren:()=>import('./crud/crud.module').then((m)=>m.CRUDModule),canActivate:[AuthGuard]
},
  {path:"service-data",component:ServiceDataComponent,canActivate:[AuthGuard]},
  // child routing
  {path:"angForm",component:AngFormComponent,canActivate:[AuthGuard], children:[
    {path:"utdf",component:UtdfComponent},
    {path:"rtf",component:RtfComponent},
    {path:"",component:RtfComponent}
  ]},
  {
    path:"**",redirectTo:"/login", pathMatch:"full"
  }
  // {path:"**",component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
