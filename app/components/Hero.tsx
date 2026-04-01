interface HeroProps {
    title: string,
    description: string
}

const Hero = ({
    title,
    description
}: HeroProps ) => {
    return (

        <section className='bg-brand-red'>
            <div className='custom-wrapper py-[132px]'>
                <h1 className='text-4xl text-white'>
                    { title }
                </h1>
                <p className='text-white'>
                    { description }
                </p>
            </div>
        </section>

    );
}

export default Hero;