"use client"
import { useAuth } from "@/context/AuthContext";
import { ArrowLeftStartOnRectangleIcon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import SideBarNavs from "./SideBarNavs";
import ButtonIcon from "@/ui/ButtonIcon";

function SideBar({onClose}){
   const { logout } = useAuth();

  //  const logoutHandler = async() => {
  //   await logout;
  //  };
 
 
   return (
     <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
        {/* Drawer header */}
        <Link
        href="/"
        className="flex items-center gap-x-4 justify-center text-secondary-700 border-b border-b-secondary-200
        pb-2 mb-6">
        <HomeIcon className="w-6 h-6" />
        <span>نکست بلاگ</span>
        </Link>

        <ButtonIcon
        onClick={onClose}
        className="block lg:hidden border-none"
        variant="outline">
          <XMarkIcon className="w-4 "/>
        </ButtonIcon>

        {/* Drawer content */}
        <div className="overflow-y-auto flex-auto">
          <SideBarNavs />
            <div
            // onClick={}
            className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700"
            >
                <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5"/>
                <span>خروج</span>
            </div>
        </div>
     </div>
   );
 }
 
 export default SideBar