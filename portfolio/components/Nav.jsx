"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"

const links=[
  {
    name:'Home',
    path:'/'
  },
  {
    name:'Services',
    path:'/services'
  },
  {
    name:'Resume',
    path:'/resume'
  },
  {
    name:'Projects',
    path:'/projects'
  },
  {
    name:'Contact',
    path:'/contacts'
  },
]
const Nav = () => {
  const pathname=usePathname();
  return (
    <nav className="flex gap-9">
      {links.map((link,id)=>{
      return <Link href={link.path} key={id} className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all` }>{link.name}</Link>
    })}</nav>
  )
}

export default Nav
