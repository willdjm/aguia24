export function MedalsAndTrophy() {

return (
<>
  <section className="md:relative w-full overflow-hidden bg-blue-700 ">
    <picture className="flex items-end justify-end">
      <img src="/bg-fundo-medalha.png" alt="" className="flex items-end justify-end" />
    </picture>
    <div className="md:absolute top-0 w-full h-full flex flex-col items-center justify-center md:max-w-6xl">
      <div className="flex flex-col items-center justify-center">
        <p className="text-orange-500 md:text-2xl text-3xl font-bold">Entrega de</p>
        <p className="text-orange-500 md:text-5xl text-3xl font-bold">Medalhas e Troféu</p>
      </div>
      <div className="w-full flex items-center justify-center md:gap-10 gap-2 md:mt-16 mt-5">
        <picture>
          <img src="/icon-medalha.png" alt="" />
        </picture>
        <picture>
          <img src="/icon-trofeu.png" alt="" />
        </picture>
      </div>
    </div>

  </section>

  <section className="flex flex-col items-center justify-center w-full bg-blue-700 md:pb-20 pt-10">
    <div className="md:flex md:flex-row flex flex-col items-center gap-10 md:gap-0 md:justify-between w-full md:border md:border-white max-w-6xl md:rounded-full md:py-20 md:px-10">
      <p className="text-orange-500 text-3xl font-bold max-w-48 text-center">Lembre-se de algo importante:</p>
      <p className="text-white font-bold max-w-36 text-center">Treine para a prova com apoio profissional .</p>
      <p className="text-white font-bold max-w-36 text-center">Hidrate-se antes e durante a prova.</p>
      <p className="text-white font-bold max-w-36 text-center">Descanse nas 24h antes da prova.</p>
      <p className="text-white font-bold max-w-36 text-center">Alongue os músculos antes da largada.</p>
    </div>

    <div className="flex items-center justify-center w-full md:max-w-6xl py-20 md:px-10 px-4 md:gap-10">
      <picture>
        <img src="/logo-aguia-branco.png" alt="" />
      </picture>
      <div className="flex flex-col md:items-start items-center">
        <p className="text-orange-500 md:text-3xl text-xl font-bold text-center">Treine com a</p>
        <p className="text-orange-500 md:text-5xl text-xl font-bold text-center">Águia Assessoria Esportiva</p>
      </div>

    </div>

    <div className="md:flex md:flex-row flex flex-col items-center justify-center w-full max-w-6xl px-10">
      <picture>
        <img src="/foto-aguia1.png" alt="" />
      </picture>
      <picture>
        <img src="/foto-aguia2.png" alt="" />
      </picture>
      <picture>
        <img src="/foto-aguia3.png" alt="" />
      </picture>
    </div>

    <div className="flex flex-col items-center justify-center w-full md:max-w-6xl md:px-10 px-4 py-10">

      <p className="text-white text-center">Somos especialistas em corrida de rua.</p>
      <p className="text-white text-center">Nossos treinadores irmão te preparar, entre em contato.</p>

      <a href="" className="mt-10">
        <button className="bg-white text-blue-700 py-4 px-6 rounded-full">
          Acesse nosso site
        </button>
      </a>

    </div>

  </section>
</>
);
}