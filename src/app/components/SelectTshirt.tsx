"use client"

export function SelectTshirt() {

      return (
            <section id="SelectTshirt"
                  className="bg-[url('/bg-select-tshirt.png')] md:bg-cover bg-contain bg-bottom bg-no-repeat flex justify-center items-center py-20 h-full px-4">
                  <div className='flex items-center justify-center md:max-w-6xl w-full '>
                        <div className="flex flex-col items-center justify-center w-full md:gap-10 gap-5">
                              <div>
                                    <p className="text-orange-500 text-3xl font-bold text-center">Selecione sua</p>
                                    <p className="text-orange-500 text-5xl font-extrabold text-center">Camiseta</p>
                              </div>
                              <div className="md:flex md:flex-row flex flex-col items-center justify-center w-full gap-10">
                                    <picture>
                                          <img src="/img-tshirt-m.png" alt="" />
                                    </picture>
                                    <picture>
                                          <img src="/img-tshirt-f.png" alt="" />
                                    </picture>
                              </div>
                              <p className="flex items-center font-medium justify-center text-center mb-20">
                                    Obs.: a largura da camiseta deve ser medida pelas axilas. Imagens ilustrativas.
                              </p>
                        </div>
                  </div>
            </section>
      );
}