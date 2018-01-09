import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  'news': {
    'id': 12345,
    'author': 'John Doe',
    'tags': 'webdesign,  mobile, software development',
    'imageurl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rjhHwUcSX19nHJ4g0TLGVZOBVsdl694baHym8_yybDKiacjR2w (10 kB)',
    'content': 'Software Mobile',
    'category': 'mobile development'
  }
  now = new Date()
  year = this.now.getFullYear()
  month = this.now.getMonth() + 1
  day = this.now.getDate()
  date = this.day + '/' + this.month + '/' + this.year
  
  constructor() { }

  ngOnInit() {
    
  }

}
