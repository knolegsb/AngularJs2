import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular 2 App</h1>'
    template: '<h1>{{welcomeMessage}}</h1>'
})
export class AppComponent {
    welcomeMessage: string = "Welcome to Angular 2 Mvc Project";
}
