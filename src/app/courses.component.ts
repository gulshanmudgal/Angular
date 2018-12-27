import { Component } from '@angular/core';

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
    courses = ["Course 1", "Course 2", "Course 3"];

    getTitle(){
        return this.title;
    }
}