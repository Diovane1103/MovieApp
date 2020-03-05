import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PersonComponent } from './person/person.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'tv', component: TvShowComponent },
  { path: 'person', component: PersonComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: MainComponent },
  { path: '**', component: PageNotFoundComponent }
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
