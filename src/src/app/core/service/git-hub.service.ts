import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private http: HttpClient) { }

  getAllRepos(): Observable<any[]> {
    return this.http.get<any[]>('https://api.github.com/users/dof-dss/repos');
  }
}
