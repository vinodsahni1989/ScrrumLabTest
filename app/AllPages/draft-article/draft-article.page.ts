import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draft-article',
  templateUrl: './draft-article.page.html',
  styleUrls: ['./draft-article.page.scss'],
})
export class DraftArticlePage implements OnInit {

  apiBaseUrl = "https://jsonplaceholder.typicode.com/posts";

  userArray: any = [];
  backupUpUsers: any = [];

  constructor(
    private httpClient: HttpClient,
    public alertController: AlertController,
    private shareData: ShareDataService,
    private storage: Storage,
    private router: Router

  ) {
    this.callFakeApiLIst();

  }

  async ngOnInit() {
    await this.storage.create();
    this.callAllStorage();

  }

  callAllStorage() {
    this.storage.get("article").then((data: any) => {
      this.userArray = data;
      console.log("draft article =", this.userArray)
    })
  }

  callFakeApiLIst() {
    this.httpClient.get(this.apiBaseUrl).subscribe((data: any) => {
      this.userArray = data;
      this.backupUpUsers=this.userArray
      console.log(this.userArray);
      this.storage.set("article", this.userArray);
    })

  }

  searchArticle(event) {
    const filteration = event.target.value;
    this.userArray = this.filterItems(filteration);
    if (filteration.length === 0) {
      this.userArray = this.backupUpUsers;
    }

  }
  filterItems(searchTitle: any) {
    return this.userArray.filter(item => {
      return item.title.toLowerCase().indexOf(searchTitle.toLowerCase()) > -1;
    });
  }

  editArticle(title: any) {
    this.shareData.globalDialogBox(title)
  }

  gotoPage3() {
    this.router.navigate(['/published-article'])
  }
}
