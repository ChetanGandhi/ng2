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

export class GitHubUser implements IGitHubUser {

    constructor(private _user: any) { }

    public get login(): string {
        return this._user["login"];
    };

    public get id(): number {
        return this._user["id"];
    };

    public get avatarUrl(): string {
        return this._user["avatar_url"];
    };

    public get htmlUrl(): string {
        return this._user["html_url"];
    };

    public get followersUrl(): string {
        return this._user["followers_url"];
    };

    public get followingUrl(): string {
        return this._user["following_url"];
    };

    public get gistsUrl(): string {
        return this._user["gists_url"];
    };

    public get starredUurl(): string {
        return this._user["starred_url"];
    };

    public get subscriptionsUrl(): string {
        return this._user["subscriptions_url"];
    };

    public get organizationsUrl(): string {
        return this._user["organizations_url"];
    };

    public get reposUrl(): string {
        return this._user["repos_url"];
    };

    public get type(): string {
        return this._user["type"];
    };

    public get siteAdmin(): boolean {
        return this._user["site_admin"];
    };

    public get name(): string {
        return this._user["name"];
    };

    public get location(): string {
        return this._user["location"];
    };

    public get email(): string {
        return this._user["email"];
    };

    public get publicRepos(): number {
        return this._user["public_repos"];
    };

    public get publicGists(): number {
        return this._user["public_gists"];
    };

    public get followers(): number {
        return this._user["followers"];
    };

    public get following(): number {
        return this._user["following"];
    };

    public get createdAt(): string {
        return this._user["created_at"];
    };

    public get updatedAt(): string {
        return this._user["updated_at"];
    };

    public get url(): string {
        return this._user["url"];;
    };
}