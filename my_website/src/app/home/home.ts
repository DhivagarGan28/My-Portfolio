import { Component, AfterViewInit, ElementRef, ViewChild , QueryList  } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate} from '@angular/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
     selector: 'app-home',
     imports: [MatTooltipModule],
     templateUrl: './home.html',
     styleUrl: './home.css',
     animations: [
     trigger('fadeIn', [
          transition(':enter', [
          style({ opacity: 0 }),
          animate('1s ease-in', style({ opacity: 1 }))
          ])
     ]),
     trigger('fadeSlideIn', [
          transition(':enter', [ // when element is inserted (e.g. via *ngIf)
          style({ opacity: 0, transform: 'translateY(30px)' }),
          animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ]),
          transition(':leave', [ // optional: when element is removed
          animate('600ms ease-in', style({ opacity: 0, transform: 'translateY(30px)' }))
          ])
     ])

     ]
})
export class Home implements AfterViewInit{
     @ViewChild('fadeElement') fadeElement!: ElementRef;

     ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // add animation class
            observer.unobserve(entry.target);   // run only once
          }
        });
      },

      { threshold: 0.2 } // trigger when 20% visible
    );

    observer.observe(this.fadeElement.nativeElement);


  }
     show = true;
     toggle() { this.show = !this.show; }

     currentYear: number = new Date().getFullYear();
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
