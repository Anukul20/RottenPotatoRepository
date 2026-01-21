import { Component } from '@angular/core';
import { Headere } from '../headere/headere';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Headere,],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  trendingMovies:any;
constructor(private http:HttpClient){

}
  ngOnInit(){
this.getTrendingMovies();
  }
  getTrendingMovies(){
this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)=>{
this.trendingMovies=movies;
})
  }
}
