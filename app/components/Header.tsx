'use client';

import { HamburgerSvg, LogoSvg } from "@/app/utility/svg-collection";
import { LinkObj } from "@/app/utility/types";
import Headroom from 'headroom.js';
import Link from "next/link";
import { useEffect, useRef } from 'react';

interface HeaderProps {
    links : Array<LinkObj>
}

const Header = ({
    links
} : HeaderProps ) => {

    const headerRef = useRef<HTMLElement | null>(null);

    useEffect( () => {

        const headroom = new Headroom( headerRef.current as HTMLElement, {
            offset : 100,
            tolerance : 5
        });
      
        headroom.init();

    }, [])

    return(
        <header 
            {
                ...{
                    className : 'text-white headroom', 
                    ref : headerRef
                }
            }
        >
            <div className='custom-wrapper py-10 flex justify-between items-center'>
                <LogoSvg 
                    className="w-[200px] h-auto"
                />
                { links &&
                    <>
                        <nav>
                            <ul className="md:inline-flex hidden flex justify-between items-center space-x-10 font-medium text-xl">
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
                        <button className='md:hidden inline-block cursor-pointer' type='button'>
                            <HamburgerSvg 
                                className='w-8'
                            />
                        </button>
                    </>
                }
            </div>
        </header>
    )

}

export default Header;