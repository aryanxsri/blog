import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

export const Publish=()=>{

    const [title, setTitle]=useState("")
    const [description,setDescription]=useState("")
    const navigate=useNavigate()

    return <div>
        <Appbar user={user}/>

     <div className="flex justify-center">
     <div className=" max-w-screen-lg w-full py-10">
        
<input onChange={(e)=>{
    setTitle(e.target.value)
}} type="text" className="block mb-2 py-5 p-2.5 w-full text-md text-slate-900 bg-slate-50 rounded-lg font-semibold mb-10" placeholder="Title"></input>

<TextEditor onChange={(e)=>{
    setDescription(e.target.value)
}} />
<button onClick={async()=>{
    const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
        title,
        content:description
    },{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    })
    navigate(`/blog/${response.data.id}`)
   }} type="submit" className="mt-10 inline-flex items-center  px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
       Publish post
   </button>
</div>
    </div>
    
</div>
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    
return <form>
       <div className="px-4 py-2 bg-slate-50">
           <textarea onChange={onChange} rows="8" className="block w-full px-1 text-sm text-slate-800 " placeholder="Write an article..." required ></textarea>
       </div>
   
   
</form>


}