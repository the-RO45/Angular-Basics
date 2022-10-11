import { TreeError } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGrid, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
// import {AngularTreeGridModule} from 'angular-tree-grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleTreeComponent } from './sample-tree/sample-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleTreeComponent
  ],
  imports: [
    BrowserModule,
    TreeGridModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
