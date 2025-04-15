'use client'

import { faqs } from "@/lib/data"
import Heading from "../../Common/Heading"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <div className="py-10">
            <div className="wrapper">
                <Heading
                    text1="Frequently Asked Questions"
                    text2="Get answer to your propable questions"
                    center={true}
                />

                <Accordion type="single" collapsible>
                    {
                        faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${faq.id}`} className="py-4">
                                <AccordionTrigger className="cursor-pointer text-xl hover:no-underline "
                                >
                                    <div className="flex gap-3 items-center">
                                        <span> {faq.id} </span>
                                        {faq.question}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-black/60 pl-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }

                </Accordion>


            </div>
        </div>
    )
}

export default Faq