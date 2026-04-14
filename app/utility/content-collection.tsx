import { ResultObj } from '@/app/utility/types';
import Hero from '@/app/components/Hero';
import Header from '../components/Header';

const ContentCollection = ({
    result,
    type
} : ResultObj ) => {

    switch ( type ) {
        case 'Header' : 
            return (
                <Header
                    {
                        ...{
                            ...result
                        }
                    }
                />
            )
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