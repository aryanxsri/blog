import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog=({blog}:{blog:Blog})=>{
    return <div>
        <Appbar/>
        <div className="flex justify-center">
    <div className=" grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
        <div className=" col-span-8">
            <div className="text-5xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-5">
                Posted on 30th August 2020
            </div>
            <div className="pt-4 text-slate-800">
                {blog.content}
            </div>
        </div>
        <div className="col-span-4">
            <div className="text-slate-700">
            Author
            </div>
            <div className="flex">
                <div className="pr-5 py-2 flex flex-col justify-center">
                <Avatar name={blog.author?.name || "Anonymous"}/>
            </div>
            <div className="text-2xl font-bold">
            {blog.author?.name || "Anonymous"}
        </div>
        </div>
        </div>

    </div>
</div>
</div>
}