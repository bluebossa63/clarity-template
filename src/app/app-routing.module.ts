import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { CmdbListComponent } from './cmdb-list/cmdb-list.component';

const routes: Routes = [

  {
    path: 'event-list',
    component: EventListComponent
  },
  {
    path: 'cmdb-list',
    component: CmdbListComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
