import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-article',
    pathMatch: 'full'
  },
  {
    path: 'add-article',
    loadChildren: () => import('./AllPages/add-article/add-article.module').then( m => m.AddArticlePageModule)
  },
  {
    path: 'draft-article',
    loadChildren: () => import('./AllPages/draft-article/draft-article.module').then( m => m.DraftArticlePageModule)
  },
  {
    path: 'published-article',
    loadChildren: () => import('./AllPages/published-article/published-article.module').then( m => m.PublishedArticlePageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./AllPages/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
