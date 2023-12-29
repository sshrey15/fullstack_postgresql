"use client"
import { useRouter } from "next/navigation";

export default function DeletePostButton({id}){
    const router = useRouter()
    const handleDelete = async (event) => {
        event.preventDefault();
        
        try{
            await fetch(`/api/post/${id}`, {
                method: 'DELETE', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({id}) })
                
            router.refresh()
        } catch (error){
            console.error(error)
        }
    }
    
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}