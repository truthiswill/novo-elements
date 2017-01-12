// NG2
import { Component } from '@angular/core';
// APP
let DynamicFormDemoTpl = require('./templates/DynamicForm.html');
let VerticalDynamicFormDemoTpl = require('./templates/VerticalDynamicForm.html');
let TextBasedControlsDemoTpl = require('./templates/TextBasedControls.html');
let CheckBoxControlsDemoTpl = require('./templates/CheckBoxControls.html');
let FileInputControlsDemoTpl = require('./templates/FileInputControls.html');
let CalendarControlsDemoTpl = require('./templates/CalendarInputControls.html');
let FieldsetsFormDemoTpl = require('./templates/DynamicFormFieldSets.html');
let PickerControlsDemoTpl = require('./templates/PickerControls.html');
let UpdatingFormDemoTpl = require('./templates/UpdatingFormDemo.html');
let FieldInteractionTpl = require('./templates/FieldInteraction.html');
import { MockMeta, MockMetaHeaders } from './MockMeta';
// Vendor
import {
    FormUtils, TextBoxControl, CheckboxControl, CheckListControl, FileControl,
    QuickNoteControl, TilesControl, DateControl, TimeControl, DateTimeControl,
    PickerControl
} from './../../../../index';

const template = `
<div class="container">
    <h1>Forms <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/blob/master/src/elements/form">(source)</a></small></h1>
    <p>Forms use inputs and labels to submit user content. But you already knew that. What you may not know is that our forms come in two styles 'Static' and 'Dynamic'</p>

    <h2>Static Form</h2>
    <p>Static forms <code>&lt;novo-form /&gt;</code>.

    <h5>Textbox Based Controls</h5>
    <div class="example form-demo">${TextBasedControlsDemoTpl}</div>
    <code-snippet [code]="TextBasedControlsDemoTpl"></code-snippet>

    <h5>Checkbox Controls</h5>
    <div class="example form-demo">${CheckBoxControlsDemoTpl}</div>
    <code-snippet [code]="CheckBoxControlsDemoTpl"></code-snippet>

    <h5>File Input Controls</h5>
    <div class="example form-demo">${FileInputControlsDemoTpl}</div>
    <code-snippet [code]="FileInputControlsDemoTpl"></code-snippet>

    <h5>Calendar Controls</h5>
    <div class="example form-demo">${CalendarControlsDemoTpl}</div>
    <code-snippet [code]="CalendarControlsDemoTpl"></code-snippet>

    <h5>Picker Controls</h5>
    <div class="example form-demo">${PickerControlsDemoTpl}</div>
    <code-snippet [code]="PickerControlsDemoTpl"></code-snippet>

    <h2>Dynamic Form</h2>
    <p>Dynamic forms are composed of one element, <code>&lt;novo-dynamic-form [controls]="controls"/&gt;</code> and allow you to pass in the controls and form and it will create the form for you.</p>

    <h5>Basic</h5>
    <div class="example form-demo dynamic">${DynamicFormDemoTpl}</div>
    <code-snippet [code]="DynamicFormDemoTpl"></code-snippet>

    <h5>Vertical</h5>
    <div class="example form-demo dynamic">${VerticalDynamicFormDemoTpl}</div>
    <code-snippet [code]="VerticalDynamicFormDemoTpl"></code-snippet>

    <h5>Fieldsets</h5>
    <div class="example form-demo fieldsets">${FieldsetsFormDemoTpl}</div>
    <code-snippet [code]="FieldsetsFormDemoTpl"></code-snippet>

    <h5>Updating Fields/Status</h5>
    <div class="example form-demo updating">${UpdatingFormDemoTpl}</div>
    <code-snippet [code]="UpdatingFormDemoTpl"></code-snippet>
    
    <h5>Field Interactions</h5>
    <div class="example form-demo field-interactions">${FieldInteractionTpl}</div>
    <code-snippet [code]="FieldInteractionTpl"></code-snippet>
</div>
`;

@Component({
    selector: 'form-demo',
    template: template
})
export class FormDemoComponent {
    private DynamicFormDemoTpl: string = DynamicFormDemoTpl;
    private VerticalDynamicFormDemoTpl: string = VerticalDynamicFormDemoTpl;
    private TextBasedControlsDemoTpl: string = TextBasedControlsDemoTpl;
    private CheckBoxControlsDemoTpl: string = CheckBoxControlsDemoTpl;
    private FileInputControlsDemoTpl: string = FileInputControlsDemoTpl;
    private CalendarControlsDemoTpl: string = CalendarControlsDemoTpl;
    private FieldsetsFormDemoTpl: string = FieldsetsFormDemoTpl;
    private PickerControlsDemoTpl: string = PickerControlsDemoTpl;
    private UpdatingFormDemoTpl: string = UpdatingFormDemoTpl;
    private FieldInteractionTpl: string = FieldInteractionTpl;
    private quickNoteConfig: any;
    private textControl: any;
    private emailControl: any;
    private numberControl: any;
    private currencyControl: any;
    private floatControl: any;
    private percentageControl: any;
    private quickNoteControl: any;
    private textForm: any;
    private checkControl: any;
    private checkListControl: any;
    private tilesControl: any;
    private checkForm: any;
    private fileControl: any;
    private multiFileControl: any;
    private fileForm: any;
    private dateControl: any;
    private timeControl: any;
    private dateTimeControl: any;
    private dynamic: any;
    private dynamicForm: any;
    private dynamicVertical: any;
    private dynamicVerticalForm: any;
    private calendarForm: any;
    private salesTaxControl: any;
    private itemValueControl: any;
    private totalValueControl: any;
    private fieldInteractionForm: any;
    private hasCommentsControl: any;
    private commentsControl: any;
    private fieldsets: Array<any>;
    private fieldsetsForm: any;
    private singlePickerControl: any;
    private multiPickerControl: any;
    private pickerForm: any;
    private updatingForm: any;
    private updatingFormControls: [any];
    private required: boolean = false;
    private disabled: boolean = true;

    constructor(private formUtils: FormUtils) {
        // Quick note config
        this.quickNoteConfig = {
            triggers: {
                tags: '@',
                references: '#',
                boos: '^'
            },
            options: {
                tags: ['First', 'Second'],
                references: ['Third', 'Forth'],
                boos: ['Test']
            },
            renderer: {
                tags: (symbol, item) => {
                    return `<a class="tag">${symbol}${item.label}</a>`;
                },
                references: (symbol, item) => {
                    return `<a class="tag">${symbol}${item.label}</a>`;
                },
                boos: (symbol, item) => {
                    return `<strong>${symbol}${item.label}</strong>`;
                }
            }
        };
        // Text-based Controls
        this.textControl = new TextBoxControl({ key: 'text', label: 'Text Box' });
        this.emailControl = new TextBoxControl({ type: 'email', key: 'email', label: 'Email' });
        this.numberControl = new TextBoxControl({ type: 'number', key: 'number', label: 'Number' });
        this.currencyControl = new TextBoxControl({ type: 'currency', key: 'currency', label: 'Currency', currencyFormat: '$ USD' });
        this.floatControl = new TextBoxControl({ type: 'float', key: 'float', label: 'Float' });
        this.percentageControl = new TextBoxControl({ type: 'percentage', key: 'percentage', label: 'Percent' });
        this.quickNoteControl = new QuickNoteControl({ key: 'note', label: 'Note', config: this.quickNoteConfig, required: true });
        this.textForm = formUtils.toFormGroup([this.textControl, this.emailControl, this.numberControl, this.currencyControl, this.floatControl, this.percentageControl, this.quickNoteControl]);

        // Check box controls
        this.checkControl = new CheckboxControl({ key: 'check', label: 'Checkbox' });
        this.checkListControl = new CheckListControl({ key: 'checklist', label: 'Check List', options: ['One', 'Two', 'Three'] });
        this.tilesControl = new TilesControl({ key: 'tiles', label: 'Tiles', options: [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }] });
        this.checkForm = formUtils.toFormGroup([this.checkControl, this.checkListControl, this.tilesControl]);

        // Picker controls
        this.singlePickerControl = new PickerControl({ key: 'singlePicker', label: 'Single', config: { options: ['One', 'Two', 'Three'] } });
        this.multiPickerControl = new PickerControl({ key: 'multiPicker', label: 'Multiple', multiple: true, config: { options: ['One', 'Two', 'Three'], type: 'candidate' } });
        this.pickerForm = formUtils.toFormGroup([this.singlePickerControl, this.multiPickerControl]);

        // File input controls
        this.fileControl = new FileControl({ key: 'file', name: 'myfile', label: 'File' });
        this.multiFileControl = new FileControl({ key: 'files', name: 'myfiles', label: 'Multiple Files', multiple: true });
        this.fileForm = formUtils.toFormGroup([this.fileControl, this.multiFileControl]);

        // Calendar input controls
        this.dateControl = new DateControl({ key: 'date', label: 'Date' });
        this.timeControl = new TimeControl({ key: 'time', label: 'Time' });
        this.dateTimeControl = new DateTimeControl({ key: 'dateTime', label: 'Date Time' });
        this.calendarForm = formUtils.toFormGroup([this.dateControl, this.timeControl, this.dateTimeControl]);


        let calculateTaxes = (form) => {
            let itemValue = Math.round(((form.controls['tax'].value / 100) * form.controls['itemValue'].value) * 100) / 100;
            form.controls['totalValue'].setValue(itemValue);
        };
        let toggleCommentsInput = (form, control) => {
            if (control.value) {
                form.controls['comments'].show();
                form.controls['comments'].enable();
                form.controls['comments'].setRequired(true);
                form.controls['comments'].markAsInvalid('This field is now required!');
                let comments = document.getElementById('comments');
                if (comments) {
                    comments.focus();
                }
            } else {
                form.controls['comments'].hide();
                form.controls['comments'].reset();
                form.controls['comments'].disable();
                form.controls['comments'].setRequired(false);
            }
        };

        // Fields with interactions
        // Tax Demo
        this.salesTaxControl = new TextBoxControl({ type: 'number', key: 'tax', value: 9, label: 'Tax', interactions: [calculateTaxes] });
        this.itemValueControl = new TextBoxControl({ type: 'number', key: 'itemValue', value: 348.22, label: 'Item Value', interactions: [calculateTaxes] });
        this.totalValueControl = new TextBoxControl({ type: 'number', readOnly: true, key: 'totalValue', label: 'Total Value' });
        // Show/Hide Demo
        this.hasCommentsControl = new CheckboxControl({ key: 'isCommentEnabled', value: false, label: 'I have a comment', interactions: [toggleCommentsInput] });
        this.commentsControl = new TextBoxControl({ type: 'text', key: 'comments', disabled: true, /*hidden: true,*/ label: 'Comments' });
        this.fieldInteractionForm = formUtils.toFormGroup([this.salesTaxControl, this.itemValueControl, this.totalValueControl, this.hasCommentsControl, this.commentsControl]);

        // Dynamic
        this.dynamic = formUtils.toFieldSets(MockMeta, '$ USD', {}, 'TOKEN');
        formUtils.setInitialValuesFieldsets(this.dynamic, { firstName: 'Initial F Name', number: 12 });
        this.dynamicForm = formUtils.toFormGroupFromFieldset(this.dynamic);

        this.dynamicVertical = formUtils.toControls(MockMeta, '$ USD', {}, 'TOKEN');
        formUtils.setInitialValues(this.dynamicVertical, { number: 0 });
        this.dynamicVerticalForm = formUtils.toFormGroup(this.dynamicVertical);

        // Dynamic + Fieldsets
        this.fieldsets = formUtils.toFieldSets(MockMetaHeaders, '$ USD', {}, 'TOKEN');
        formUtils.setInitialValuesFieldsets(this.fieldsets, { firstName: 'Initial F Name', number: 12 });
        this.fieldsetsForm = formUtils.toFormGroupFromFieldset(this.fieldsets);

        // Updating form
        this.updatingFormControls = [this.textControl, this.percentageControl, this.checkControl, this.singlePickerControl, this.fileControl];
        this.updatingForm = formUtils.toFormGroup(this.updatingFormControls);
    }

    toggleEnabled() {
        this.disabled = !this.disabled;
        Object.keys(this.updatingForm.controls).forEach(key => {
            if (this.disabled) {
                this.updatingForm.controls[key].enable();
            } else {
                this.updatingForm.controls[key].disable();
            }
        });
    }

    toggleRequired() {
        this.required = !this.required;
        Object.keys(this.updatingForm.controls).forEach(key => {
            this.updatingForm.controls[key].setRequired(this.required);
        });
    }

    markAsInvalid() {
        Object.keys(this.updatingForm.controls).forEach(key => {
            this.updatingForm.controls[key].markAsInvalid('Custom Error!');
        });
    }

    save(form) {
        if (!form.isValid) {
            form.showOnlyRequired(true);
        } else {
            alert('SAVING');
        }
    }

    clear() {
        this.dynamic.forEach(control => {
            control.forceClear.emit();
        });
    }

    onChange(value) {
        console.log('I changed!', value); // tslint:disable-line
    }
}
