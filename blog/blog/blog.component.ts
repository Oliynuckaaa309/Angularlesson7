import { Component } from '@angular/core';
import { DiscountService } from '../../blog.service';
import { IBlog } from '../../blog.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
constructor(public data:DiscountService){}
public blogs:IBlog[]=[];
ngOnInit(): void {
  this.getBlogs();
  
}
getBlogs(){
  this.data.getAll().subscribe(item=>{
    this.blogs=item;

  })
}}
