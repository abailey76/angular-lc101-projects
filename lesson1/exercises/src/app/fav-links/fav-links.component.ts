import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    'https://www.duckduckgo.com',
    'https://www.slashdot.com',
    'https://www.reddit.com',
    'https://www.bleacherreport.com',
    'https://www.amazon.com',
    'https://www.imdb.com',
    'https://www.launchcode.org']
  constructor() { }

  ngOnInit() {
  }

}
