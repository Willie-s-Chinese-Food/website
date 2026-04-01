import { ResultObj } from '@/app/utility/types';
import Hero from '@/app/components/Hero';

const ContentCollection = ({
    result,
    type
} : ResultObj ) => {

    switch ( type ) {
        case 'Hero' :
            return (
                <Hero 
                    {
                        ...{
                            ...result
                        }
                    }
                />
            )
        default : 
            return null;
    }
}

export default ContentCollection;