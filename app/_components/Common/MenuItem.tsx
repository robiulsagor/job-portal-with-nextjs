import Link from "next/link"
import { menuItems } from "@/lib/data"

import { MouseEventHandler } from "react";
import { Button } from "@/components/ui/button";

const MenuItem = ({ method }: { method?: MouseEventHandler }) => {
    return (
        <ul className="flex flex-col gap-7 items-center justify-center pt-32 text-lg ">
            {
                menuItems.map((item, index) => (
                    <li key={index} className="hover:text-slate-400 transition duration-200">
                        <Link onClick={method} href={item.link}>{item.title} </Link>
                    </li>
                ))
            }

            <div className="flex flex-col gap-4 text-xl font-medium">
                <Button variant="ghost" className="text-lg">Login</Button>
                <Button className="bg-brand hover:bg-[#10b689] text-lg transition duration-150">Register</Button>
            </div>

        </ul>
    )
}

export default MenuItem