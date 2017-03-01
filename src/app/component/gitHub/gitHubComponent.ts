import { Component } from "@angular/core"
import { GitHubService } from "../../services/gitHubService/gitHubService"
import { IGitHubService } from "../../services/gitHubService/gitHubService"
import { IGitHubUser } from "../../services/gitHubService/gitHubService"

@Component({
    moduleId: module.id,
    selector: 'git-hub-search',
    templateUrl: "gitHubComponent.tpl.html",
    providers: [GitHubService]
})

export class GitHubComponent {
    private user: IGitHubUser;

    constructor(private gitHubService: GitHubService) {
        this.gitHubService.search("chetangandhi").subscribe((user: IGitHubUser) => {
            this.user = user;
        });
    }
}
