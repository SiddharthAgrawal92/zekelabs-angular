import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }
  //GET
  //POST
  //PUT
  //DELETE
  //PATCH
  public getData() {
    // return this.http.get('../../assets/mockData.json');
    return this.http.get('http://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Content-Type': 'application/json',
        'my-header': 'hi-from-my-app',
        'authorization': 'Bearer jqkjh-m14-1841n4-141-4-1-41-4n-1n481-n-1n4n70n707n07n14'
      }
    });
    // return this.http.get('http://localhost:8080/posts');
  }

  public createPost(body: any) {
    return this.http.post('http://localhost:8080/posts', body);
  }

  //Based on the role we can define the menus
  //Menu to be authorized for a particular user

  //1st API call - authentication - login will give you the token

  //2nd API call - authorization - user detail(role) authorization - make a call to authorization API endpoint along with token 
  //to which all menus he's authorized to view
}
