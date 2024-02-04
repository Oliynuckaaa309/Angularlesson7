import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // constructor(public data:DiscountService){}
  // posts:any=[]
  //   ngOnInit(): void {
  //      this.getDiscounts()
  //  }
  //    getDiscounts():void{
  //    this.data.getall().subscribe(someItem=>{
  //    this.posts=someItem
  //      console.log(this.posts)
  //    })
  //    }
  //    addDiscount(){
  //      const newDisc={
  //        description:'gfbhgnbgghntntyhnty',
  //      }
  //      this.data.create(newDisc).subscribe((data)=>{
  //        console.log(data)
  //      })
  //    }
}
