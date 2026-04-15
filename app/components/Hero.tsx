import { LinkObj } from "@/app/utility/types";
import BackgroundImage from "@/public/Hero Background Waves.jpg";
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

    return (

        <section 
            {
                ...{
                    className : 'relative bg-brand-red text-white'
                }
            }
        >
            <Image
                fill
                priority
                {
                    ...{
                            src : BackgroundImage.src,
                            alt : '',
                            className : 'absolute h-full w-full mix-blend-darken bg-center bg-no-repeat object-cover opacity-20'
                    }
                }
            />
            <div className='mt-[150px] relative md:flex-row flex-col-reverse md:space-x-12 space-x-0 gap-y-8 custom-wrapper pb-[80px] flex items-center justify-between'>
                <div className='md:w-1/2 w-full space-y-6'>
                    <h1 className='text-4xl font-medium'>
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
                        className="md:w-1/2 max-w-lg w-full rounded-2xl"
                        src = { image.url }
                        alt = ''
                        width = { image.width }
                        height = { image.height }
                        priority
                    />
                }
            </div>
        </section>

    );
}

export default Hero;