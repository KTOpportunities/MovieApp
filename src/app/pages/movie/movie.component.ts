import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;

  constructor(private route: ActivatedRoute, private mService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      console.log(id);
      this.getMovieDetails(id);
    });
  }

  getMovieDetails(id: string) {
    this.mService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    });
  }
}
