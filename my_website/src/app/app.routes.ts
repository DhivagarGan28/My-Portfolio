import { Routes } from '@angular/router';
import { Work } from './work/work';
import { App } from './app';

export const routes: Routes = [
     {path :'', component: App},
     {path :'work', component: Work}
];
