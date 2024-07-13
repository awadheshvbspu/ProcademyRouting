import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './course/courses.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BannerComponent } from './home/banner/banner.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CheckoutComponent,
    ContactComponent,
    CoursesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    BannerComponent,
    ContactUsComponent,
    PopularComponent,
    ServicesComponent,
    TestimonialComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
