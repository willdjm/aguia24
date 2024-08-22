"use client"

export function DiaHorario() {

return (
<section id="WherDeDoISell"
      className="bg-[url('/bg-dia-horario.png')] md:bg-cover bg-contain bg-no-repeat flex justify-center items-center py-20 h-full px-4">
      <div className='flex items-center justify-center md:max-w-6xl w-full '>

            <div className="flex flex-col items-center justify-center w-full md:gap-64 gap-20">

                  <picture>
                        <img src="/img-corrida.png" alt="" />
                  </picture>

                  <div className="flex items-center justify-center w-full bg-blue-700/90 max-w-6xl rounded-full py-10">
                        <div className="md:flex md:flex-row flex flex-col items-center justify-center w-full gap-20 md:gap-0">
                              <div className="w-full flex flex-col items-center justify-center gap-5">
                                    <p className="text-orange-500 text-3xl font-bold">Dia</p>
                                    <p className="text-white text-3xl">3 de</p>
                                    <p className="text-white text-3xl">dezembro</p>
                              </div>
                              <div className="w-full flex flex-col items-center justify-center gap-5">
                                    <p className="text-orange-500 text-3xl font-bold">Local</p>
                                    <p className="text-white text-3xl">Parque</p>
                                    <p className="text-white text-3xl">Nononon Nononono</p>
                              </div>
                              <div className="w-full flex flex-col items-center justify-center gap-5">
                                    <p className="text-orange-500 text-3xl font-bold">Horário</p>
                                    <p className="text-white text-3xl">Das 14h</p>
                                    <p className="text-white text-3xl">às 17h</p>
                              </div>
  
                        </div>
                  </div>

                  <div className="md:flex md:flex-row flex flex-col items-start justify-center w-full max-w-6xl md:mt-40 gap-20 md:gap-0">

                        <div className="w-full flex flex-col items-center justify-center gap-10">
                              <p className="text-orange-500 text-3xl font-bold">Apoio</p>
                              <picture>
                                    <img src="/logo-sa-corp.png" alt="" />
                              </picture>
                              <picture>
                                    <img src="/logo-gukenz.png" alt="" />
                              </picture>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-10">
                              <p className="text-orange-500 text-3xl font-bold">Patrocínio</p>
                              <picture>
                                    <img src="/logo-cinza.png" alt="" />
                              </picture>
                              {/* <picture>
                                    <img src="/logo-gukenz.png" alt="" />
                              </picture> */}
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-10">
                              <p className="text-orange-500 text-3xl font-bold">Realização</p>
                              <picture>
                                    <img src="/logo-aguia.png" alt="" />
                              </picture>
                              {/* <picture>
                                    <img src="/logo-gukenz.png" alt="" />
                              </picture> */}
                        </div>

                  </div>
            </div>

      </div>
</section>
);
}