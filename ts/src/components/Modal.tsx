import { title } from "process";
import React from "react";
interface ModalProps{
    children: React.ReactNode
    title: string
    onClose: ()=> void
}
export function Modal({children, title, onClose}:ModalProps){
    return(
        <div  className = "fixed dg-blcak/50 top-o right-0 left-0 bottom-0" onClick={onClose}>
           <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text centre mb-2">{title}</h1>
                {children}
           </div>
        </div>
    )
}