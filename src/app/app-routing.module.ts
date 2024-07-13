import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './course/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthguardService } from './Service/authguard.service';
import { CanActivate, CanActivateChild, resolve } from './auth.gaurd';
import { Course } from './Model/course';

const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path: '', redirectTo:'Home', pathMatch: 'full'},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  // {path:'Contact', component:ContactComponent, canDeactivate:[AuthguardService]},
  {path:'Contact', component:ContactComponent, canDeactivate:[(comp: ContactComponent) =>{return comp.canExit()}]},

  {path:'Courses', component:CoursesComponent, resolve: {Course: resolve} },
  // {path:'Courses/Course/:id', component:CourseDetailComponent},
  // {path:'Courses', canActivateChild:[AuthguardService], children:[
  {path:'Courses', canActivateChild:[CanActivateChild], children:[
    {path: 'Course/:id', component:CourseDetailComponent},
    {path:'Popular', component:PopularComponent},
    {path:'Checkout', component:CheckoutComponent, data:{name:'Test Course', Price:399}}

    // {path:'Checkout', component:CheckoutComponent, canActivate: [CanActivate]}
    // {path:'Checkout', component:CheckoutComponent, canActivate: [()=>{
    //   return true;
    // }]}
  ]},
  {path:'Login', component:LoginComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
