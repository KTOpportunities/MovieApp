import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Result } from '../../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Result[] = [];
  upcomingMovies: Result[] = [];
  topRatedMovies: Result[] = [];

  constructor(private mService: MoviesService) {}

  ngOnInit(): void {
    this.mService.getMovies('popular').subscribe((res: any) => {
      this.popularMovies = res.results;
    });

    this.mService.getMovies('upcoming').subscribe((res: any) => {
      this.upcomingMovies = res.results;
    });

    this.mService.getMovies('top_rated').subscribe((res: any) => {
      this.topRatedMovies = res.results;
    });
  }
}
