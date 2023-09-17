import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nam: string = "ahmad";
  mobi : string = "09188191801";
lastnam : string ="sadeghi";


  aders: { name: string, mobil: string, lastname: string, } [] = [
    {
      name: "ali",
      mobil: "test",
      lastname: "099999999999999",

    },
    {
      name: "amir2",
      mobil: "test2",
      lastname: "091111111111",

    },
    {
      name: "ddddddddddddd",
      mobil: "test2",
      lastname: "091111111111",

    },
    {
      name: "jjjjjjjjjjjjjjjjjjjjjj",
      mobil: "test2",
      lastname: "091111111111",

    },
    {
      name: "ali",
      mobil: "test2",
      lastname: "091111111111",

    }
  ]
goods: { name : string, family:string,}[]=[
  {name: "ahmad", family:"sadeghi",},
  {name: "ali", family: "soori",}


    ]
}
