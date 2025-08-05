import { Component } from '@angular/core';
import { Home } from '../home/home';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.css'
})
export class Work {
constructor(public router:Router){}
  Home(){
      this.router.navigate(['/']);
    }
    about(){
      this.router.navigate(['/about']);
    }
    aichat(){
    this.router.navigate(['/aichat']);
  }
}
