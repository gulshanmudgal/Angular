import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
            <h2>{{ getTitle() }}</h2>
            <!-- Property Binding -->
            <img [src]="imageUrl" />
            <ul>
                <li *ngFor="let course of courses">{{ course }}</li>
            </ul>
            <table>
                <tr>
                    <!-- Attribute Binding -->
                    <td [attr.colspan]="colSpan"></td>
                </tr>
            </table>
            <!-- Bootstrap Button Demo -->
            <button class="btn btn-primary" >Submit</button>
        `
})
export class CoursesComponenet{
    title = "List of Courses";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
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