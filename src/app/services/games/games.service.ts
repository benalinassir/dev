import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
  GetGames() {
    let URL = 'http://stage.whgstage.com/front-end-test/games.php';
    return this.http.get<any>(URL).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
