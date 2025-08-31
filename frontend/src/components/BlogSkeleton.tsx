export const BlogSkeleton=()=>{

    return <div>
        <div className="flex p-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex justify-center flex-col">
            <div className="h-4 w-4 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            </div>
            <div className="font-extralight pl-2"><div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>
            <div className="flex justify-center flex-col pl-2">
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>
             <div className="font-thin pl-2 text-slate-500">
             <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div></div>
            
        </div>
        <div className="text-xl font-bold pt-2">
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        </div>
        <div className="bg-slate-500 h-0.5 w-full pb-0.5"></div>
    
    
    <span className="sr-only">Loading...</span>
</div>

}