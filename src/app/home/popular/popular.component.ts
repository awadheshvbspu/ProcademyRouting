import { Component,inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../Service/course.service';
import { Course } from '../../Model/course';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses(){
    //this.router.navigate(['Courses'], {relativeTo: this.activeRoute});
    this.router.navigateByUrl('Courses');
  }
}
