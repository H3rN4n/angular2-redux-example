import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MoviesService {

  lastId: number = 0;

  movies: Movie[] = [];
  // API endpoint
  //private BASE_URL: string = 'http://localhost:3000/movie/';
  private BASE_URL: string = 'https://dzt9ceh093.execute-api.us-east-1.amazonaws.com/dev/movie/';
  constructor(private http: Http) {}

  // POST
  public addMovie(movie: Movie) {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' })
    });
    return this.http.post(`${this.BASE_URL}`, JSON.stringify(movie), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  // DELETE
  public deleteMovieById(id: number) {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    });

    return this.http.delete(`${this.BASE_URL}${id}`, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // GET by Id
  public getMovieById(id: number) {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    });

    return this.http.get(`${this.BASE_URL}${id}`, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // LIST
  public getMovies(): Observable<Movie[]> {
    return this.http.get(`${this.BASE_URL}`)
      .map((res: Response) => {
        const json: any[] = res.json().payload.Items;
        let data: Movie[] = [];
        json.forEach(movieData => {
          data.push(new Movie(movieData));
        });
        return data;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  // PUT
  public updateMovie(movie: Movie) {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' })
    });
    return this.http.put(`${this.BASE_URL}${movie['id']}`, JSON.stringify(movie), options).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
