import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
            <h2>{{ getTitle() }}</h2>
            <ul>
                <li *ngFor="let course of courses">{{ course }}</li>
            </ul>
        `
})
export class CoursesComponenet{
    title = "List of Courses";
    courses;

    //This will Work but it should never be used
    /*
    constructor(){
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
    */
    constructor(service: CoursesService)
    {
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }
}