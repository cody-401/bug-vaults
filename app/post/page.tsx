import { redirect } from "next/navigation";
import {auth  } from "@/auth";
import Post from "./post";


export default async function ServerPage (){
  const session = await auth()
  if(!session){
    redirect("/signin")
  }
  return(
    <main>
    <Post/>
    </main>
  )
}