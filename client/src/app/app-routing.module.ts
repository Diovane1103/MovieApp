import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PersonComponent } from './person/person.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'tv', component: TvShowComponent },
  { path: 'person', component: PersonComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
