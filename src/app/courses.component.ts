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
            <input #name (keyup.enter)="enterClick(name.value)" />
        `
})
export class CoursesComponenet{
    title = "List of Courses";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;
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

    onSaveClick($event){
        //to stop event bubbling
        $event.stopPropagation();
        alert('You Clicked Save');
    }

    onDivClicked(){
        alert('Div Was Clicked');
    }

    enterClick(name){
        alert(name);
    }
}