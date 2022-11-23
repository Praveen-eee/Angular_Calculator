import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  disp ='0'
  currvalue=''

  writetoinput(value:string){
    this.currvalue= this.currvalue + value
    this.disp= this.currvalue
  }
  equals(){
    this.disp=eval(this.currvalue)
    this.currvalue=this.disp
  }
  clear(){
    this.currvalue=''
    this.disp='0'
  }
  back(){
    this.currvalue= this.currvalue.slice(0,-1)
    this.disp=this.currvalue
    if(this.currvalue==''){
      this.disp='0'
    }
  }
  calcvalue(solve:any){
    if(solve.charAt(0)=='0'){
      solve= solve.slice(1,)
    }
    this.disp= eval(solve)
  }
}
