import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { META_REDUCERS, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { storageMetaReducer } from './storage.metareducer';
import { LocalStorageService } from './service/local-storage.service';
import { ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY } from './app.token';
import { reducers, rootReducers } from './store/theme.reducers';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    PeopleModule
  ],
  providers:[
    {provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__'},
    {provide: ROOT_STORAGE_KEYS, useValue: ['layout', 'theme']},
    {
      provide: META_REDUCERS,
      deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
      useFactory: storageMetaReducer,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
