import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishedArticlePage } from './published-article.page';

const routes: Routes = [
  {
    path: '',
    component: PublishedArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishedArticlePageRoutingModule {}
