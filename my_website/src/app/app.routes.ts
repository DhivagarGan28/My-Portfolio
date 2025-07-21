import { Routes } from '@angular/router';
import { Work } from './work/work';
import { Home } from './home/home';
import { About } from './about/about';
export const routes: Routes = [
     {path :'home', component: Home},
     {path :'work', component: Work},
     {path :'about', component: About},
];
