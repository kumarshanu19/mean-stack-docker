import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // Link to our api, pointing to localhost
 API = 'http://localhost:3000';

 // Declare empty list of people
 people: any[] = [];

 constructor(private http: HttpClient) {}

 // Angular 2 Life Cycle event when component has been initialized
 ngOnInit() {
   this.getAllPeople();
 }

 // Add one person to the API
 addPerson(name:any, age:any) {
   this.http.post(`${this.API}/users`, {name, age})
     .subscribe(() => {
       this.getAllPeople();
     })
 }

 // Get all users from the API
  getAllPeople() {
  this.http.get(`${this.API}/users`)
     .subscribe({
      next: (people: any) => this.people = people,
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    })

 }
}
