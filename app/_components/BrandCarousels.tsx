"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const BrandCarousels = () => {
    return (
        <div className="bg-black py-4 text-white">
            <div className="wrapper">
                <Carousel className="w-full "
                    plugins={[
                        Autoplay({
                            delay: 1500,
                        }),
                    ]}>
                    <CarouselContent>
                        <CarouselItem className="basis-1/2 md:basis-1/4 flex items-center justify-center">
                            <Image src="/brand1.png" alt="brand1" width={100} height={100} className="w-24 h-24 object-contain" />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2 md:basis-1/4 flex items-center justify-center">
                            <Image src="/brand2.png" alt="brand2" width={100} height={100} className="w-24 h-24 object-contain" />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2 md:basis-1/4 flex items-center justify-center">
                            <Image src="/brand3.png" alt="brand3" width={100} height={100} className="w-24 h-24 object-contain" />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2 md:basis-1/4 flex items-center justify-center">
                            <Image src="/brand4.png" alt="brand4" width={100} height={100} className="w-24 h-24 object-contain" />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2 md:basis-1/4 flex items-center justify-center">
                            <Image src="/brand5.png" alt="brand4" width={100} height={100} className="w-24 h-24 object-contain" />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default BrandCarousels