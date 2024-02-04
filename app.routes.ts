import { Routes } from '@angular/router';
import { AdminBlogComponent } from './adminBlog/admin-blog/admin-blog.component';
import { BlogComponent } from './blog/blog/blog.component';

export const routes: Routes = [
    {path:'blogs', component:BlogComponent },
    {path:'admin/blog', component:AdminBlogComponent},
];
