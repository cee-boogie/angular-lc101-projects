import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'These animals are super neato';
  image1 = 'https://www.ctvnews.ca/polopoly_fs/1.3946461.1527337767!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg';
  image2 = 'https://static.boredpanda.com/blog/wp-content/uploads/2016/05/cute-baby-foxes-cubs-17-574436be67482__880.jpg';
  image3 = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/05/10/cubs8.jpg?width=640&auto=webp&quality=75';

  constructor() { }

  ngOnInit() {
  }

}