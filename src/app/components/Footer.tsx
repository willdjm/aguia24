export function Footer() {

return (

<footer className="flex justify-center items-center w-full py-16 px-2 bg-black text-white">
    <div className='items-center justify-center flex flex-col w-full'>
        <div className='md:flex md:flex-row flex flex-col w-full items-center justify-center gap-2'>
            <p className="text-center">©2024. Águia Assessoria Esportiva. Todos os direitos reservados.</p>
            <a href="#" target="_blank" className="underline text-center">Política de privacidade.</a>

        </div>
    </div>
</footer>
);
}