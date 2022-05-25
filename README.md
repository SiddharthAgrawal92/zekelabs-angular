# zekelabs-angular-training

#Code of all the topics that we'll cover with time will be shared & present in this github code. 
## Please refer to this README file for the theory part that we have so far discussed in different sessions.

************************************************************************************

Following are the Prerequisite required for Angular training
1. HTML
2. CSS
3. Javascript
4. Typescript(Optional)

##Angular 1st version
1. It is widely known as Angular JS since it was based on Javascript
2. It was MVC (Modal View Controller) architecture

##Typescript 
1. It is a superset of javascript
2. We can also say it's Typed Javascript wherein at the time of definition of any method/properties we have to define its type too. 
e.g. in JS
let foo = "Hello World"; (NO ERROR);
foo = 100;
In TS
let foo : string = "Hello World";
foo = 100 (ERROR COMPILE TIME --> number can't be assigned to string type of variable)
3. This solves the known loosely typed issue of javascript.

##Angular 8.0
Rendering Engine
1. View Engine
2. New Ivy rendering engine (Default from Angular V9.0) is more performant and gives faster loading by reducing the bundle size

************************************************************************************
##Prerequisite for Angular installation 

1. Install Node.js Version 14.16.1 (Link - https://nodejs.org/ja/blog/release/v14.16.1/)
2. This will install NPM Version 6.14.12, if this version is not installed then install it from this command-
    $npm install -g npm@6.14.12
3. Install Angular CLI - npm install @angular/cli@8.3.29
4. If NPM is throwing any error and doesn't allow you to create the angular app then run uninstall the Node.js 
    from program files and delete "npm" & "npm-cache" folder from folder path(C:\Users\<Windows Machine's Username>\AppData\Roaming) and repeat from Step #1.
5. Now you can create new angular app using below command
    $ng new <app_name>
6. Use this if you want to create a workspace which contain multiple apps/libraries inside it (Read: https://angular.io/guide/file-structure#multiple-projects)
    $ng new my-workspace --create-application false
    $ng g application <app_name>
    $ng generate library <library_name>
Folder where app/libraries will get created from above command - projects/app_name/src

##Link to get to know more about Angular file structure
https://angular.io/guide/file-structure

##Angular Versions

Angular 2
Angular 3 --> This version doesn't exist and skipped because angular is being developed in a single mono repo. And in Angular 2 there was a package @angular/router already 3.X version due to some huge development on it like route-preload so to avoid confusion releasing Angular as V3.X, with it’s route on version 4 it got skipped and version 4 was launched making all packages versions aligned,

Angular 4, 5, 6, 7, 8, 9, 10, 11, 12, 13....

ng upgrade --> Command to upgrade angular version in an application(See update.angular.io for more details)

ECMA-262 Or ECMAScript language

ES1(1997) --> 1st Edition of ECMA-262 or ECMA Script language
ES2(1998) --> Editorial changes to align with ISO/IEC 16262 international standard
ES3(1999) --> Added regular expressions, better string handling, 
              try/catch exception handling
ES4(2003) --> Abandoned due to political differences concerning language complexity), 
ES5(2009) --> Adds "strict mode, 
              getters and setters, 
              library support for JSON, 
              Complete Reflection on object properties.
ES6(2015) --> let,const; 
              Arrow Function ()=>{}; 
              import * as moduleName from "..."; 
              export const Foo; 
              for...of loop
ES7(2016) --> exponentiation operator ** for numbers (Equivalent to Math.pow()); 
              await, async for easier way to promises and develop asynchronous code;
              Array.prototype.includes function
ES8(2017) --> For easy manipulation of Objects
              Object.values
              Object.entries
              Object.getOwnPropertyDescriptors 
              
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
####Services
Link - https://angular.io/guide/architecture-services
1. It can be a value, function, use case, feature that a application need.
2. One should deligate all business logic and extra work needs to be done to the services instead of components
Services use case examples - fetching data, manipulating the data before sending it to component, showing/handling some common tasks like toaster messages

Command to generate a service using ng cli -
$ng g s <service_name> --spec=false
$ng g s <folder_name/service_name> (creating service inside a particular folder, if given folder doesn't exist ng cli will create one for you)

3. To use a service inside a class, service instance needs to be injected in the constructor of that class(component)

##Hierarchial Injectors
https://angular.io/guide/hierarchical-dependency-injection

1. ModuleInjectors
We need to use @Injector({provideIn: <module_name>}) OR @NgModule({providers:[<service_name>]})

Tree Shaking - All the unused code is removed and only the part being used is considered for the bundle.

Note: Tree shaking is done if we provide a service in @Injector({provideIn: <module_name>}) which only make it available for the defined module.

2. Element Injectors
When we need to provide a service to a particular element component/pipes/directive
We need to use @Component({providers:[<service_name>]})

Note: Tree shaking is done if we provide a service in @Component({providers: [<service_name>]}) which only make it available for the defined module.



##Routing

1. Command to generate a module with routing
$ng g m <module_name> --routing

2. Command to generate a guard
$ng g g <guard_name>
