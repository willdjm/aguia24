import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
return (
<div
    className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-orange-500 to-transparent h-48 p-4 flex justify-center items-center z-50">
    <div className='md:flex md:flex-row flex flex-col items-center justify-between md:max-w-6xl w-full gap-3 md:gap-0'>

        <a href=''
            className="bg-white text-orange-500 px-3 py-2 shadow-2xl flex items-center justify-center w-full max-w-sm gap-4 rounded-full">
            <picture>
                <img src="/logo-aguia-navbar.png" alt="" className='w-20' />
            </picture>
            <p className="text-blue-700 md:text-xl font-bold text-left md:max-w-xs">
                Quero treinar com a Águia Assessoria Esportiva
            </p>
        </a>

        <Link href='#contact' className="bg-orange-500 text-white px-3 py-2 shadow-2xl border border-white flex items-center justify-center w-full max-w-sm gap-4 rounded-full">
        <picture>
                <img src="/logo-desafio-24.png" alt="" className='' />
            </picture>
            <p className="text-white md:text-xl font-bold text-left md:max-w-72">
            Quero me inscrever no desafio águia 2024
                        </p>
        </Link>

    </div>
</div>

);
};