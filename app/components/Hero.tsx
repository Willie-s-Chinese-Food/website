import { LinkObj } from "@/app/utility/types";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
    title: string,
    description: string
    cta : LinkObj
    image : any
}

const Hero = ({
    title,
    description,
    cta,
    image
}: HeroProps ) => {

    console.log(image)

    return (

        <section className='bg-brand-red text-white'>
            <div className='md:flex-row flex-col-reverse custom-wrapper pb-[80px] flex items-center justify-between space-x-12'>
                <div className='md:w-1/2 w-auto space-y-6'>
                    <h1 className='text-5xl font-medium'>
                        { title }
                    </h1>
                    <p className='text-lg '>
                        { description }
                    </p>
                    {
                        cta &&
                            <Link
                                href = { cta?.url }
                                target = { cta?.openNewPage ? '_blank' : '_parent' }
                                rel = 'noopener'
                                className='inline-block bg-white text-black px-10 py-4 rounded-4xl font-medium'
                            >
                                { cta?.title }
                            </Link>
                    }
                </div>
                {
                    image &&
                    <Image 
                        className="md:w-1/2 w-full rounded-2xl"
                        src = { image.url }
                        alt = ""
                        width = { image.width }
                        height= { image.height }
                    />
                }
            </div>
        </section>

    );
}

export default Hero;