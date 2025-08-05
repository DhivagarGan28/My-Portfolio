import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList  } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate} from '@angular/animations';

@Component({
     selector: 'app-home',
     imports: [],
     templateUrl: './home.html',
     styleUrl: './home.css',
     animations: [
          trigger('fadeIn', [
               transition(':enter', [ // enter means when element is added to the DOM
               style({ opacity: 0 }),
               animate('800ms ease-out', style({ opacity: 1 }))
               ])
          ])
     ]

})
export class Home {
     constructor(public router:Router){}
     mywor(){
          this.router.navigate(['/work']);
     }
     about(){
          this.router.navigate(['/about']);
     }
     aichat(){
          this.router.navigate(['/aichat']);
     }  
     
}
