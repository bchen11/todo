import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todo = {
    id: 1,
    description: 'Learn to Dance'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
