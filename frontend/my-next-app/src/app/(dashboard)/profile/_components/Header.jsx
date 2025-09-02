"use client"
import { useAuth } from "@/context/AuthContext"
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import SideBar from "./SideBar";
import Drawer from "@/ui/Drawer";


function Header() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const {user , isLoading} = useAuth();
  return (
    <header
    className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
        <div className="flex items-center justify-between py-5 px-4 lg:px-8">
                   <ButtonIcon
                   className="block lg:hidden border-none"
                   variant="outline"
                   onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                   >
                     {isOpenDrawer ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                   </ButtonIcon>
                
                    <span className="text-sm lg:text-lg font-bold text-secondary-700">
                        سلام؛ {user?.name}
                    </span>

                    <Link href="/profile">
                       <Avatar src={user?.avatarUrl}/>
                   </Link>

                   <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
                     <SideBar onClose={()=> setIsOpenDrawer(false)}/>
                    </Drawer>  

        </div>
    </header>
  );
}
export default Header