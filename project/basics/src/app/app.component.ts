import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  //template:`<p>Hello World!</p>`,
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})
export class AppComponent{
  name= 'Huy deptrai'
  imgURL = 'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/09/28150733/image-69-hinh-anh-gai-xinh-trung-quoc-hot-girl-trung-quoc-dep-nhat-2022-166432725338362.jpg';
  images = [
    'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/09/28150733/image-69-hinh-anh-gai-xinh-trung-quoc-hot-girl-trung-quoc-dep-nhat-2022-166432725338362.jpg',
    'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/09/28150733/image-69-hinh-anh-gai-xinh-trung-quoc-hot-girl-trung-quoc-dep-nhat-2022-166432725338362.jpg',
    'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/09/28150733/image-69-hinh-anh-gai-xinh-trung-quoc-hot-girl-trung-quoc-dep-nhat-2022-166432725338362.jpg'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperioni', 'bacon'],
    size: 'large'
  }
  blueClass = false
  fontSize = 16

  getName(){
    return this.name
  }

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement ).value
  }

  logImg(event : string){
    console.log(event)
  }
}