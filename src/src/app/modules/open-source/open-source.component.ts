import { Component, OnInit } from '@angular/core';
import { GitHubService } from '@app/service/git-hub.service';

@Component({
  selector: 'app-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent implements OnInit {
  repos: any[];
  showSpinner = true;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
    this.gitHubService.getAllRepos().subscribe(result => {
      this.repos = result;
      this.showSpinner = false;
    });
  }
}
