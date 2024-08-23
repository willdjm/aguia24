export function Footer() {

return (

<footer className="flex justify-center items-center w-full py-16 px-2 bg-black text-white">
    <div className='items-center justify-center flex flex-col w-full'>
        <div className='md:flex md:flex-row flex flex-col w-full items-center justify-center gap-2'>
            <p className="text-center">©2024. Águia Assessoria Esportiva. Todos os direitos reservados.</p>
            <a href="#" target="_blank" className="underline text-center">Política de privacidade.</a>
        </div>
        <div className='flex items-baseline justify-center gap-5 m-4 w-full'>
                <a className='ml-2' href="https://sacorp.tec.br/" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-sacorp.svg" alt="logo Sacorp" width={100} height={100} loading="lazy"
                            className='lg:w-16 w-14' />
                    </picture>
                </a>
                <a href="https://www.gukenz.com.br/" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-gukenz.svg" alt="logo Gukenz" width={100} height={100}
                            className='lg:w-16 w-14' />
                    </picture>
                </a>
            </div>
    </div>
</footer>
);
}