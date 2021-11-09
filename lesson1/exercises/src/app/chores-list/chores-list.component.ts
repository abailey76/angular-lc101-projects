import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['Wash the dishes', 
   'LaunchCode prep work', 
   'Buy groceries',
   'Fold the laundry',
   'Feed the dog',
   'Water the plants',
   'Check the mail'];

   constructor() { }

   ngOnInit() {
   }

}