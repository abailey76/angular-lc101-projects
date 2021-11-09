import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = [
      'The Gentlemen', 
      'Ocean\'s 8', 
      'Kung-Fu Hustle', 
      'The Last Dragon',
      'The Godfather',
      'Clue',
      'Can\'t Hardly Wait'];

   constructor() { }

   ngOnInit() {
   }

}
