import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieVideos } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieVideos: MovieVideos[] = [];
  movie: Movie | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private mService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      console.log(id);
      this.getMovieDetails(id);
      this.getMovieVideos(id);
    });
  }

  getMovieDetails(id: string) {
    this.mService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    });
  }

  getMovieVideos(id: string) {
    this.mService.getMovieVideos(id).subscribe((movieVidData) => {
      console.log(movieVidData);
      this.movieVideos = movieVidData;
    });
  }
}
