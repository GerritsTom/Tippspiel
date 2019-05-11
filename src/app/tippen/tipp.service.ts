import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TippService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addTipp(scoreTeam1: number, scoreTeam2: number, spielId: string) {
    const url = `${this.baseUrl}/`;
    const postData = {
      scoreTeam1,
      scoreTeam2,
      createdAt: new Date(),
      changedAt: new Date(),
      user: '5ccc8bde96af1143dcc21a66',
      spiel: spielId
    };

    console.log('postData');
    console.log(postData);

    return this.http.post(url + 'tipps/', postData);
  }
}
