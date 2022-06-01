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
3. Install Angular CLI - 
    $npm install -g @angular/cli@8.3.29
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

************************************************************************************
##Observables & Promises

1. A function which takes an observer and returns a function

		single		multiple
pull	function	iterator
push	promise		observables

2. Observables are "lazy" Push collections of multiple values.
3. In this way they are similar to Promises: both are data producers which provide (push) data to 
    consumers at  their own discretion.
4. This is in contrast to the pull model, in which a data consumer (ie the code calling a function) 
    dictates when it receives data from the producer (ie the function). The producer is unaware
    of when data will be requested(pulled) by the consumer.
5. However, Observables differ from Promises in critical ways.
    as noted in the above table, Promises eventually return only a single value whereas 
    Observables can return 0 to infinity values.
6. The value returned by a Promise is always the same no matter which callback receives it. 
7. However an Observable, just like a function, returns different values each time it is called. 
    Two function calls will return two separate side effects and two Observable calls trigger 
    two separate side effects.
8. Another key distinction is that Promises are always asynchronous: code execution will continue
     until the Promise resolves, at which point the callback(s) provided to them will be executed. 
9. Observables can be either synchronous or asynchronous, depending on what’s going on inside of them.
10. Promises can be thought of as ‘hot’ — they try to resolve as soon as they are created, 
    whether or not you call then()on them or not.
14. Observables on the other hand are ‘cold’ — they don’t evaluate anything until you call them. 
	Until that happens, Observables just sit there, hence why they are called lazy. 
15. But but but... not all Observables are cold.
	They can be forced into being hot, such as if they are created from a Promise like Subjects

##How to create an observable 
1. Importing
    import {Observable} from 'rxjs';
2. Creating    
    const observable = new Observable(function subscribe(observer){
        observer.next(1);
        observer.complete();        
    });
    const observer = {
        next: (value)=> console.log(value),
        complete: ()=> console.log('done'),
        error: (err)=> console.error(err),
    }
3. Subscribing
    observable.subscribe(observer);

##How to create a Promise
const promise = new Promise((resolve, reject)=>{
    resolve(); //this method is used for resolving the promise(such as data on API response)
    reject(); //this method is used for rejecting the promise(such as error on API response)
})

#Note: By default promises are asynchronous in nature in order to make them synchronous
     we are required to use async/await
1. Use 'async' keyword in the method where promise is defined
2. Then use 'await' keyword in front of promise to stop the code execution at this point by
    making it synchronous.

************************************************************************************

##Template Driven forms

Link - https://angular.io/guide/forms

************************************************************************************

##Reactive Forms

Link - https://angular.io/guide/reactive-forms

1. Reactive forms provides a model driven approach of different input values that change 
    over time
2. Reactive use an explicit and immutable approach to managing the state of a form at a 
    given point in time. Each change to this form state return a new state, which maintains the 
    integrity of model between the changes.
3. Reactive forms are built around observable streams where form input values are provided
    stream of input values, and these can these be accessed synchronously.

##Differences between Template Driven and Reactive form
1. Reactive form provide direct access to the form model as compare to template driven forms
    reactive forms are more scalable, reusable & testable.

    On other side template driven requires the directives to create and manipulate the
    form object model. They are only useful when we want to add a simple form to the app
    such as signup, login etc. if we want to add these type of form straightforward directly 
    to an app, but they are not scalable like reactive forms.

2. If forms are central part of you app, scalability matters.
    Here all the features of form manipulation and creation in scalable and dynamic manner
    can only be provided by Reactive forms.

3. Reactive form require less time to setup and they does nto require deep understanding 
    of change detection.
    On the other side template driven forms are hard to test because of their asyncronous 
    data flow behavior they require more complex test cases setup.


###How to use Reactive forms - 
1. Register: a form module in your application, needs to be imported in module of the app
    this provide the form module directive that you need for reactive form.
2. Generate: a form control instance in you component.
3. Register: the form control in your template.

##Changing form control from model/component
For this reactive form has some methods to set the value of form control.
    setValue();


###Using FormBuilder service generate the form controls

1. Import the FormBuilder class in component
2. Inject the service in constructor 
3. Generate the controls of form using it

constructor(private fb:  FormBuilder){}

myForm = this.fb.group({
    name: [<default_value>],
    address: this.fb.group({
        street: [''],
        city: ['']
    })
})

##Validators in Reactive Form control

1. Import a validator function in you form component
2. Add the validator in the field of the form
3. If any validator accepts any logic put a logic to it

************************************************************************************

###PIPES
1. These are decorator that marks as a class has some metadata which is responsible
    for converting the value we supply.
2. Pipe symbol('|') is used inside the template for calling them
3. Two properties needed to be passed as a metadata inside the @Pipe decorator are 
    a. 'name' - typically uses lowerCamelCase to define it, because they cannot contain hyphens
    b. pure? - default it is set to true. Here true means that this the pipe's transform() will only get
                 called whenever there is any change in the input value.
4. Pipe class name should be UpperCamelCase(general way of giving name to classes).
5. Pipe Class must implement a interface called PipeTransform.
6. Pipe needs to be declared inside a module.

************************************************************************************

###HTTP
1. Communication from front end to backend is done over Http protocol module
2. Two ways current browsers to download/upload and send the request to backend services
    a. HttpRequest that uses XMLHttp interface
    b. fetch API provides fetch()
3. Angular provides HTTP module API to use this protocol for communication
4. Class HttpClient service is used to do the same which is available in @angular/common/http
5. HttpClient provides method to use the call
6. This require service injection to be done in constructor
7. There are different methods inside this service which can be used for specific purposes.
8. These requests are responsible for sending signature requests and get the different type
    of response.

###Mistakes to avoid
1. Don't call the URL directly from component directly
2. In components URls are not validated and they may throw error when a version upgrade happen
3. Right way to call the URLs is to get it from a global contact file. Which will make all the 
    contacts available throughout the application.

##Other benefits of HttpClient over XMLHttp
1. It gives ease in using testing modules
2. It provides request and response objects in typed manner
3. It has support to observable class objects
4. It provides error handling modules

Note - To use the HttpClient service it's important to import HttpClientModule in your module


### HTTP Interceptors
1. These are used to intercept the HTTP req/res
2. Class of Interceptor should be created as an @Injectable Service
3. This should implement an HttpInterceptor interface.
4. HttpInterceptor will provide a method interceptor()

************************************************************************************

### Deployment
1. For development we should build our app using command "ng serve"
    $ ng serve --> this will serve the app in PORT 4200 (localhost:4200)
    $ ng serve --port=4201 --> new app that will server in PORT 4201 (localhost:4201)
    $ ng serve --host=IP_Address --> App will be served to IP address of your machine
                                    localhost will get replaced with you IP_Address in this case

Commands to create a application 
    $ ng new <app_name>  --> create an application
    $ ng new <workspace_name> --create-application false
    Reference - https://angular.io/guide/file-structure
                https://angular.io/cli/new

2. For Production we should build our application using command "ng build"
    $ ng build --prod --> build your production ready application to an output folder 
                            configured inside angular.json

### Angular 8 features
1. Differential loading 
    At build time two different chunks are created as ES5 & ES2015.
    ES2015 version require less space and is more performant to load on modern browsers
    ES5 is required for older browser which only support legacy javascript code

    Without DL 100kb --> 70-80kb (with differential loading)
2. Ivy rendering engine
    Earlier View Engine was used
    Angular compiler is rewritten and there is no changes in the angular app structure

    Benefits:
    a. Incremental DOM gives better build times
    b. Better build sizes more compatible with tree shaking
    c. Lazy loading of components are also supported instead of modules(using component factory resolver)

3. Dynamic importing of modules for lazy loading

4. @angular-bazel to build the angular app
    default is @angular-devkit/build-angular
5. Backward compatibility for older router modules
6. Updated Typescript version 3.4.X

************************************************************************************
************************************************************************************

### EXTRAS (Needs to covered on demand post 10 days of program)
Sub-Topics

Session I
1. Introduction & Use of external UI Libraries
2. Angular Material setup
3. introduction to Accessibility
4. Use of Aria Tags

Session II
1. Internationalization(i18n)
2. Extracting locale fields
3. Writing Test cases

4. Optional - Common file to log the errors in in Reactive Form component
