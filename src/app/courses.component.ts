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
            <div (click)="onDivClicked()">
                <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'gray'" (click)="onSaveClick($event)" >Submit</button>
            </div>
            <br />
            <br />
            <input [(ngModel)]="name" (keyup.enter)="enterClick()"/>
            <h2>Pipe Demo</h2>
            {{ course.title | uppercase}}<br />
            {{ course.students | number }}<br />
            {{ course.rating | number:'1.1-1' }}<br />
            {{ course.price | currency:'INR':true}}<br />
            {{ course.date }}<br />

            <h2>Custom Pipe Demo</h2>
            {{ text | summary:125 }}
        `
})
export class CoursesComponenet{
    title = "List of Courses";
    imageUrl = "http://lorempixel.com/400/200";
    name = "Gulshan";
    colSpan = 2;
    isActive = true;
    courses;
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    course = {
        title: 'An Angular Guide',
        students: 12365,
        rating: 4.9562,
        price: 129569.356,
        date: new Date(2016, 3, 26)
        }

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

    onSaveClick($event){
        //to stop event bubbling
        $event.stopPropagation();
        alert('You Clicked Save');
    }

    onDivClicked(){
        alert('Div Was Clicked');
    }

    enterClick(){
        alert(this.name);
    }
}