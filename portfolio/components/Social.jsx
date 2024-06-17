import { icons } from "lucide-react"
import Link from "next/link"
import path from "path"

import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'


const socials=[
    {icons:<FaGithub/>,path:'https://github.com/varunnitian'},
    {icons:<FaLinkedin/>,path:'https://www.linkedin.com/in/varun-jain-9280a122a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {icons:<FaTwitter/>,path:'https://x.com/Dorsey_2003?t=3JYo_cqYm1taJp1aohLSmQ&s=08 '}
]

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icons}</Link>
      })}
    </div>
  )
}

export default Social
