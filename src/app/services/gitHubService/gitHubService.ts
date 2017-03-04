import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GitHubUser, IGitHubUser } from "../../modals/gitUser"

import 'rxjs/add/operator/map';

export interface IGitHubService {
    search: (user: string) => Observable<IGitHubUser>;
}

@Injectable()
export class GitHubService implements IGitHubService {
    private clientId: string = "28033350aba577b4b435";
    private clientSecret: string = "df3210920e6e9c1b0ed766ec51eb8ce8f1e65a54";

    constructor(private http: Http) {
    }

    public search(userName: string): Observable<IGitHubUser> {
        if (!userName) {
            return null;
        }

        return this.http.get("https://api.github.com/users/" + userName).map((user) => {
            console.log(user.json());
            return new GitHubUser(user.json());
        });
    }
}
