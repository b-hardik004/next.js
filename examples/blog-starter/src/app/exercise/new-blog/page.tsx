import { NextPage } from "next";
import Classes from './new-blog.module.scss'

const NewBlogPage: NextPage = () => {
    return <div className={Classes['new-blog-block']}>
        <img src="/assets/images/user-icon.png" alt="New Blog Post" />
        <p>Wel Come to the new Blog Post</p>
    </div>
}

export default NewBlogPage;