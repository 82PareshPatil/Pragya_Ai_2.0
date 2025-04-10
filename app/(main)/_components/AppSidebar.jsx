// import { Button } from "@/components/ui/button"
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarHeader,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
//   } from "@/components/ui/sidebar"
// import { SideBarOptions } from "@/Services/Constants"
// import { Link, Plus } from "lucide-react"
// import Image from "next/image"
  
//   export function AppSidebar() {
//     return (
//       <Sidebar>
//         <SidebarHeader className='flex items-center m-5'>
         
//          <Image src={'/logo1.png'} alt="Logo" width={200} height={100} className="w-[150px]"/>
//          <Button className='w-full mt-5'> <Plus /> Create New Interview</Button>
//         </SidebarHeader>
   
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarContent>
//               <SidebarMenu>
//                 {SideBarOptions.map((item, index) => (
//                   <SidebarMenuItem key={index}>
//                     <SidebarMenuButton asChild>
//                       <Link href={option.path}>
//                       <option.icon/>
//                       <span>{option.name}</span>
//                       </Link>
//                     </SidebarMenuButton>

//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarContent>
//             </SidebarGroup>
//           <SidebarGroup />
//         </SidebarContent>
//         <SidebarFooter />
//       </Sidebar>
//     )
//   }
  
"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SideBarOptions } from "@/Services/Constants"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link" // ✅ Make sure you're importing Link from 'next/link'
import { usePathname } from "next/navigation"

export function AppSidebar() {
  const path=usePathname();
 
  return (
    <Sidebar>
      <SidebarHeader className='flex items-center m-5'>
        <Image src={'/logo1.png'} alt="Logo" width={200} height={100} className="w-[150px]" />
        <Button className='w-full mt-5'><Plus /> Create New Interview</Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SideBarOptions.map((item, index) => (
              <SidebarMenuItem key={index} className='p-1'>
                <SidebarMenuButton asChild   className={`p-5 rounded-lg ${path === item.path ? 'bg-primary/10' : ''}`}>
                  <Link href={item.path}> 
                    <item.icon className={` ${path==item.path&&'text-primary'}`}/>
                    <span className={`text-[16px] font-medium ${path==item.path&&'text-primary'}`}>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
