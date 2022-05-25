import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { CsvRenderComponent } from './pages/csv-render/csv-render.component';
import { CsvUploadsComponent } from './pages/csv-uploads/csv-uploads.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'render/:id',
    component: CsvRenderComponent
  },
  {
    path: 'uploads',
    component: CsvUploadsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
