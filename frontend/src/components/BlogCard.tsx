import { Link } from "react-router-dom"

interface BlogCardProps{
    authorName:string,
    title:String,
    content: string,
    publishedDate:string,
    id:number
}



export const BlogCard=({
    id,
    authorName, 
    title,
    content,
    publishedDate}:BlogCardProps
)=>{

    return <Link to={`/blog/${id}`}>
    <div>
        <div className="flex p-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex justify-center flex-col">
            <Avatar name={authorName}></Avatar>
            </div>
            <div className="font-extralight pl-2">{authorName}</div>
            <div className="flex justify-center flex-col pl-2">
                <Circle/>
            </div>
             <div className="font-thin pl-2 text-slate-500">
             {publishedDate}</div>
            
        </div>
        <div className="text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} min read`}
        </div>
        <div className="bg-slate-500 h-0.5 w-full pb-0.5">

        </div>
    </div>
    </Link>
}

export function Avatar({name}:{name:string}){
    return <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
    <span className="font-small text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500">
    </div>
}