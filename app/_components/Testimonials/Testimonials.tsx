'use client'
import Autoplay from "embla-carousel-autoplay"
import Heading from "../Heading"
import TestimonialCard from "./TestimonialCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const Testimonials = () => {
    return (
        <div className="bg-brand/10">
            <div className="wrapper">
                <Heading
                    text1="Testimonials from Our Clients"
                    text2="What our clients say about us"
                    center={true}
                />

                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 px-4">
                                <TestimonialCard />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>

                {/* <div className="flex flex-wrap justify-between items-center gap-4 mt-8">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div> */}
            </div>
        </div>
    )
}

export default Testimonials