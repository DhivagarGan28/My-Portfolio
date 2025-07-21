import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public router:Router){}
  mywor(){
      this.router.navigate(['/work']);
  }
  about(){
      this.router.navigate(['/about']);
  }
}
