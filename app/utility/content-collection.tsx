import { ResultObj } from '@/app/utility/types';
import Hero from '@/app/components/Hero';

const ContentCollection = ({
    result,
    type
} : ResultObj ) => {

    if ( type == 'Hero' ) {
        
        return (

            <Hero 
                {
                    ...{
                        ...result
                    }
                }
            />

        );

    }

}

export default ContentCollection;