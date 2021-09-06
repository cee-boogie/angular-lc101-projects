import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fave-links',
  templateUrl: './fave-links.component.html',
  styleUrls: ['./fave-links.component.css']
})
export class FaveLinksComponent implements OnInit {
  favLinks = ['https://www.spacejam.com/1996/', 'http://www.anthonyschickenandribs.com/index2.htm'];
  constructor() { }

  ngOnInit() {
  }

}
