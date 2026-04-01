interface HeroProps {
    title: string,
    description: string
}

const Hero = ({
    title,
    description
}: HeroProps ) => {
    return (

        <div>
            <h1 className='text-4xl'>
                { title }
            </h1>
            <p>
                { description }
            </p>
        </div>

    );
}

export default Hero;