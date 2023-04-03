import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { IAppStateInstance } from './app-module-instance';
import { themeSelector } from './store/theme.selector';
import { IAppTheme } from './store/AppTheme';
import {APP_THEMES, rootActions} from './store/theme.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sync-state-blog';
  appThemes = APP_THEMES;


  public activeTheme$: Observable<IAppTheme> = this.store.pipe(select(themeSelector));

  constructor(private store: Store<IAppStateInstance>) {}
  public themeSelected(theme: IAppTheme) {
    this.store.dispatch(rootActions({layout: theme}));
  }
}