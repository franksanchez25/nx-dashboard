'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './ActiveLink.module.css'

interface props {
    path:string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}


export const SidebarMenuItems = ({path, icon, title, subTitle}: props) => {

    const pathName = usePathname();

    console.log(pathName);

  return (
     <Link 
            href={path} className= { `${style.link} ${ (pathName === path) && style['active-link']}` }>
                    <div>
                        {icon}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-5 text-white">{title}</span>
                        <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
                    </div>
        </Link>
  )
}
