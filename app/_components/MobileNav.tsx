'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MyMobileNav = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Menu size={28} className="cursor-pointer" />
                </SheetTrigger>

                <SheetContent side="right" className="w-[80%] max-w-xs p-6">
                    <nav className="space-y-4">
                        <Link href="/" onClick={handleClose} className="block text-lg font-medium">
                            Home
                        </Link>
                        <Link href="/sagor" onClick={handleClose} className="block text-lg font-medium">
                            About
                        </Link>
                        <Link href="/contact" onClick={handleClose} className="block text-lg font-medium">
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MyMobileNav;
