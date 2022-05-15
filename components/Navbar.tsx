import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {
        return (
        <>
                <nav>
                        <div className='w-5 h-5'> {/* Logo */}
                               <Image src={} layout="responsive"></Image>
                        </div>
                        <ul className='list-none'>
                                <Link href="/"><a></a></Link>
                        </ul>
                </nav>
        </>);
}
export default Navbar;