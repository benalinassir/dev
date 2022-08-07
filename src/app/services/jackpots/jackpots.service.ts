import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JackpotsService {

  constructor(private http: HttpClient) { }
  GetJackpot() {
    let URL = 'http://stage.whgstage.com/front-end-test/jackpots.php';
    return this.http.get<any>(URL).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
