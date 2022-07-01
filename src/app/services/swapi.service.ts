import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarsPerson } from '../models/star-wars-person';
import { StarWarsMovie } from '../models/star-wars-movie';

// https://swapi.dev/

// https://swapi.dev/documentation#films
// https://swapi.dev/documentation#people

@Injectable()
export class SwapiService {
  constructor(private http: HttpClient) {}

  getStarWarsPeople() {
    // TODO: get star wars people
  }

  getStarWarsMovieById(url: string) {
    // TODO: get movie by id
  }
}
