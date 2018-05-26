import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address: Address;
  hello:any;
  posts: Post;
  isEdit:boolean = false;
  references:any[];
  constructor(private dataService:DataService) {
    console.log('contructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'HRM App';
    this.age = 30;
    this.email = 'test@test.com'
    this.references = ['tn', 'nt', 'ms'];
    this.hello = "Hello";
    this.address = {
      street: 'dhanmondi',
      city: 'dhaka',
      state: 'boston'
    }

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
    //console.log('10' + '10' - '2');
  }

  onClick(){
    this.references.unshift('hi');
  }

  add(ref) {
    console.log(ref);
    this.references.push(ref);
    return false;  /* need to know why it is used */
  }

  delete(ref){
    for(let i = 0;i< this.references.length; i++) {
      if(this.references[i] == ref) {
        this.references.splice(i, 1);
      }
    }
  }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}

interface Address{
  street:string;
  city:string;
  state:string;
}