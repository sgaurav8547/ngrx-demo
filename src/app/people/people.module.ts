import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './store/effect';

const routes: Routes = [
  { path: '', component: PeopleComponent }
]

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('people',  reducers),
    EffectsModule.forFeature([PeopleEffects])
  ]
})
export class PeopleModule { }
