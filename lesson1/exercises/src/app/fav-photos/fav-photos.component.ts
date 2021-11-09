import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = `
  ... with the exception of the wit and wisdom of Calvin and Hobbes, not much lasts forever. - Ted Lasso`;
  image2 = 'https://www.pixelstalk.net/wp-content/uploads/2016/05/Images-Calvin-and-Hobbes-Backgrounds.png';
  image3 = 'https://i1.wp.com/images.fanpop.com/images/image_uploads/Calvin---Hobbes-calvin--26-hobbes-116940_1024_768.jpg';

  constructor() { }

  ngOnInit() {
  }

}