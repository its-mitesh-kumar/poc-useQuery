import Hello from './Hello'
import {useState,useEffect} from 'react'

export default function Gello(){
    const [page,setPage]=useState(1)
    const [title,settitle]=useState('title')
    const [body,setbody]=useState('body')
    
    useEffect(()=>{
        const timerId=setInterval(()=>{
            setPage((p)=>p+1)
            settitle((title)=>title+(page+1))
            setbody((body)=>body+(page+1))

        },3000)
        return ()=>clearInterval(timerId)
    },[page])
    return <Hello page={page} title={title} body={body}/>
}