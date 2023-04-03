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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { LocalStorageService } from '../service/local-storage.service';
import { storageMetaReducer } from '../storage.metareducer';
import { PEOPLE_LOCAL_STORAGE_KEY, PEOPLE_STORAGE_KEYS, PEOPLE_CONFIG_TOKEN } from './people.token';

const routes: Routes = [
  { path: '', component: PeopleComponent }
]

export function getPeopleConfig(saveKeys: string[], localStorageKey: string, storageService: LocalStorageService) {
  return { metaReducers: [storageMetaReducer(saveKeys, localStorageKey, storageService)] };
}

@NgModule({
  declarations: [
    PeopleComponent,
    PersonCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('people', reducers, PEOPLE_CONFIG_TOKEN),
    EffectsModule.forFeature([PeopleEffects])
  ],

  providers: [
    LocalStorageService,
    { provide: PEOPLE_LOCAL_STORAGE_KEY, useValue: '__people_storage__' },
    { provide: PEOPLE_STORAGE_KEYS, useValue: ['error', 'isLoading', 'people', 'selectedPerson'] },
    {
      provide: PEOPLE_CONFIG_TOKEN,
      deps: [PEOPLE_STORAGE_KEYS, PEOPLE_LOCAL_STORAGE_KEY, LocalStorageService],
      useFactory: getPeopleConfig
    },
  ]
})
export class PeopleModule { }
