# zekelabs-angular-training

#Code of all the topics that we'll cover with time will be shared present in this github code. 

## Please refer to this README file for the theory part that we had discussed in different sessions.


************************************************************************************

Following are the Prerequisite required for Angular
1. HTML
2. CSS
3. Javascript

Angular JS
MVC
Modal View Controller

Typescript - typed Javascript

Angular 8.0

View Engine

9.0 Ivy rendering engine
faster loading 

************************************************************************************
angular

node.js

Angular 2 --> single package 3
Angular 3 --> skip
Angular 4

ng upgrade

Ecmascript 206(JS)

ES5 <2015
ES6 =2015 --> let, ()=>{}
const [].map()=>{}

************************************************************************************

String interpolation = {{ <expression> OR <method> }}
Property Binding = [<property>]="<value>"

JIT compilation
AOT - Ahead of time Compilation

https://www.positronx.io/useful-list-of-angular-event-types-for-event-binding/

************************************************************************************
Directives : (inbuilt Directives)

1.Component - is a directive with a template

2. Structural directives - append/remove something from the DOM
    for(let i=0; i>10; i++){}
    NgFor --> *ngFor=""
    
    if(<condition>){}
    NgIf --> *ngIf=""

    NgSwitch --> [ngSwitch]="" --> NgSwitchCase, NgSwitchDefault
    switch(variable){
        case 'val_1':
        break;
        default:
        break;
    }

3. Attribute directives - to change the behavior
    NgClass --> [ngClass]=""
    NgStyle --> [ngStyle]=""

************************************************************************************
####Custom Property binding  - []
Alias to custom property binding = @Input(<alias_name: string>)
####Custom Event Binding - ()
Alias to custom event binding = @Output(<alias_name: string>)

###View Encapsulation 
Emulated (Default) - Css props are encapsulated within the component no child can access it
None --> Removes the encapsulation and provides the CSS props globally
ShadowDOM --> Attach a Shadow_Root to a component which encapsulates CSS properties in a component and provide them to other child within the scope of component

###Template Variables - #<variable_name>

###ViewChild - @ViewChild('template_variable') <variable_name> : ElementRef;

###Content Projection - Project content/elements from parent to child enclosed within the child tag/selector
<ng-content></ng-content>
<ng-container></ng-container>

conditional projection using <ng-content> use "select" attribute
Use - <ng-content select="[<selector_of_element>]">
selector should be given like - <element selector_of_element></element>

Place to use is inside child from where content element is projected from parent
##ContentChild - @ContentChild('template_variable') <variable_name> : ElementRef;
<parent_template>
    <child>
    <element #template_variable></element>
    </child>
</parent_template>

************************************************************************************