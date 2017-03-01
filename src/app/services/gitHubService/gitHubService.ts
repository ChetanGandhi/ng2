import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface IGitHubUser {
    login: string;
    id: number;
    avatarUrl: string;
    htmlUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    starredUurl: string;
    subscriptionsUrl: string;
    organizationsUrl: string;
    reposUrl: string;
    type: string;
    siteAdmin: boolean;
    name: string;
    location: string;
    email: string;
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
    createdAt: string;
    updatedAt: string;
}

export interface IGitHubService {
    search: (user: string) => Observable<IGitHubUser>;
}

@Injectable()
export class GitHubService implements IGitHubService {
    private clientId: string = "28033350aba577b4b435";
    private clientSecret: string = "df3210920e6e9c1b0ed766ec51eb8ce8f1e65a54";

    constructor(private http: Http) {
        console.log("GitHubService");
    }

    public search(userName: string): Observable<IGitHubUser> {
        if(!userName) {
            return null;
        }

        return this.http.get("https://api.github.com/users/" + userName).map((user) => {
            return <IGitHubUser>(user.json());
        });
    }
}
