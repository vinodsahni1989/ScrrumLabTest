import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftArticlePage } from './draft-article.page';

const routes: Routes = [
  {
    path: '',
    component: DraftArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftArticlePageRoutingModule {}
