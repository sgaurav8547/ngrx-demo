import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './store/effect';
import { MatListModule } from '@angular/material/list';
import { PersonCardComponent } from './person-card/person-card.component';
import { MatCardModule } from '@angular/material/card'

const routes: Routes = [
  { path: '', component: PeopleComponent }
]

@NgModule({
  declarations: [
    PeopleComponent,
    PersonCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('people',  reducers),
    EffectsModule.forFeature([PeopleEffects])
  ]
})
export class PeopleModule { }
