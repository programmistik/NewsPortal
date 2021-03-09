import { NewsService } from './news.service';
import { CreatePostDTO } from './dto/create-post.dto';
export declare class NewsController {
    private newsService;
    constructor(newsService: NewsService);
    getPosts(res: any): Promise<any>;
    getPost(res: any, postID: any): Promise<any>;
    addPost(res: any, createPostDTO: CreatePostDTO): Promise<any>;
    editPost(res: any, postID: any, createPostDTO: CreatePostDTO): Promise<any>;
    deletePost(res: any, postID: any): Promise<any>;
}
