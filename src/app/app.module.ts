import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {LiveEditorComponent} from './live-editor/live-editor.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleComponent} from './example/example.component';
import {JsonEditorModule} from './json-editor/jsoneditor.module';

const appRoutes: Routes = [
    {
        path: 'live-editor',
        component: LiveEditorComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LiveEditorComponent,
        ExampleComponent
    ],
    imports: [
        JsonEditorModule,
        BrowserModule,
        DynamicFormModule,
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
