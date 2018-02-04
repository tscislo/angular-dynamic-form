import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import * as jsonEditor from 'jsoneditor';
import {JsonEditorMode, JsonEditorOptions} from './jsoneditor';

@Component({
    selector: 'cpp-json-editor',
    template: '<div #entry style="height: 100%"></div>'
})

export class JsonEditorComponent implements OnInit {
    private editor: any;

    @Input() options = new JsonEditorOptions();
    @Input() data = {};

    @Output() dataChange = new EventEmitter();
    @Output() onChanged = new EventEmitter();
    @Output() error = new EventEmitter();

    @ViewChild('entry')
    public entry;

    constructor() {
    }

    ngOnInit() {
        this.options.onChange = this.onChange;
        this.editor = new jsonEditor(this.entry.nativeElement, this.options, this.data);
    }

    public onChange = () => {
        this.onChanged.emit();
        try {
            this.data = this.editor.get();
            this.dataChange.emit(this.data);
        } catch (e) {
            console.error(e);
            this.error.emit(e.toLocaleString());
        }
    };

    public collapseAll() {
        this.editor.collapseAll();
    }

    public expandAll() {
        this.editor.expandAll();
    }

    public focus() {
        this.editor.focus();
    }

    public get(): JSON {
        return this.editor.get();
    }

    public getMode(): JsonEditorMode {
        return this.editor.getMode() as JsonEditorMode;
    }

    public getName(): string {
        return this.editor.getName();
    }

    public getText(): string {
        return this.editor.getText();
    }

    public set(json: JSON) {
        this.editor.set(json);
    }

    public setMode(mode: JsonEditorMode) {
        this.editor.setMode(mode);
    }

    public setName(name: string) {
        this.editor.setName(name);
    }

    public setSchema(schema: any) {
        this.editor.setSchema(schema);
    }

    public destroy() {
        this.editor.destroy();
    }
}

