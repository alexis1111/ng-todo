import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { environment } from 'src/environments/environment';
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
