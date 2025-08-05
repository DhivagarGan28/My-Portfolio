import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
    constructor(public router:Router){}
  work(){
      this.router.navigate(['/work']);
  }
  home(){
      this.router.navigate(['/']);
  }
  aichat(){
    this.router.navigate(['/aichat']);
  }
}
