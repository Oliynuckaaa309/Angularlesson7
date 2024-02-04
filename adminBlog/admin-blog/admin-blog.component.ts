import { Component,  } from '@angular/core';
import { DiscountService } from '../../blog.service';
import { IBlog, IBlog1, IBlog2 } from '../../blog.interface';
import { CommonModule } from '@angular/common';
import { FormsModule,  } from '@angular/forms';


@Component({
  selector: 'app-admin-blog',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './admin-blog.component.html',
  styleUrl: './admin-blog.component.css'
})
export class AdminBlogComponent {
  public author:string='';
  public title:string='';
  public text:string='';
  public editId:number=0;
  public editStatus:boolean=false;
constructor(private data:DiscountService){}
public blogs:IBlog[]=[];
resetForms(){
  this.author='';
  this.title='';
  this.text='';
}
ngOnInit(): void {
  this.getBlogs();
  
}
getBlogs(){
  this.data.getAll().subscribe(item=>{
    
    this.blogs=item;
    
    console.log(this.blogs)
  })
}
createNew(){
   const newBlog={
    author: this.author,
    title:this.title,
    description:this.text,
    imagePath:'assets/img.avif'
   }
 if(this.author!='' && this.title!='' && this.text!=''){
this.data.create(newBlog).subscribe(() => this.getBlogs());
 }

 this.resetForms();

}
deleteBlogs(id:number){
 
  this.data.delete(id).subscribe(() => this.getBlogs());
  
}
editBlogs(item:IBlog2, id:number){
  this.author=item.author;
  this.title=item.title;
  this.text=item.description;
  this.editStatus=true;
  this.editId=id;
  
}
saveChanges(){
  const updateBlog={
    author: this.author,
    title:this.title,
    description:this.text,
    imagePath:'assets/img.avif'
   }
   this.data.edit(updateBlog, this.editId).subscribe(()=>this.getBlogs());
   this.resetForms()
   
}
}
