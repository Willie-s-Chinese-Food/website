import { LogoSvg } from "@/app/utility/svg-collection";
import { LinkObj } from "@/app/utility/types";
import Link from "next/link";

interface HeaderProps {
    links : Array<LinkObj>
}

const Header = ({
    links
} : HeaderProps ) => {

    console.log(links)
    return(
        <header className='bg-brand-red text-white'>
            <div className='custom-wrapper py-10 flex justify-between items-center'>
                <LogoSvg 
                    className="w-[200px] h-auto"
                />
                { links &&
                    <nav>
                        <ul className="flex justify-between items-center space-x-10 font-medium text-xl">
                            {
                                links.map( ( link, key ) => {
                                    return( 
                                        <li key={ key }>
                                            <Link
                                                href = { link?.url }
                                                target = { link?.openNewPage ? '_blank' : '_parent' }
                                                rel = 'noopener'
                                            >
                                                { link?.title }
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                }
            </div>
        </header>
    )

}

export default Header;