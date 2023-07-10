import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 0;
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';

  calBuffet(value: string) {
    const price = Number(value);
    this.value = (price * 3) / 4;
  }
  testClick() {
    console.log('test event binding');
  }
  testNumberBinding(value: number) {
    console.log('test NumberChange from app conponent', value);
  }

  doAppMinChange(value: number) {
    console.log('test minChange event :', value);
  }
  doAppMaxChange(value: number) {
    console.log('test maxChange event :', value);
  }
  // title = 'study-angular';
  // ninjaName = "naruto"

  // ninjaConsole(){
  //   console.log("ninja console : ", this.ninjaName)
  // }

  // changeNinjaname(name :string){
  //   this.ninjaName = name;
  // }
}
