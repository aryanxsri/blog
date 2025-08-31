import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar=()=>{
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to="/blogs">
        <div className="flex flex-col justify-center cursor-pointer text-2xl font-bold">
            Blog Posting 
        </div>
        </Link>
        
        
        
        <div>
            <Link to="/publish"> 
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600   mr-4">New Blog</button>
            </Link>
            <Avatar name="aryan"></Avatar>
        </div>

    </div>
}