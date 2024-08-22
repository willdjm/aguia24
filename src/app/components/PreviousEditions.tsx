import { SetStateAction, useState } from 'react';

const images2022 = [
  '/foto-aguia1.png',
  '/foto-aguia2.png',
  '/foto-aguia3.png',
];

const images2023 = [
  '/foto-aguia3.png',
  '/foto-aguia1.png',
  '/foto-aguia2.png',
];

export const PreviousEditions = () => {
  const [year, setYear] = useState('2022');
  const [currentImages, setCurrentImages] = useState(images2022);

  const handleYearChange = (newYear: SetStateAction<string>) => {
    setYear(newYear);
    setCurrentImages(newYear === '2022' ? images2022 : images2023);
  };

  return (
    <section className="bg-[url('/bg-edicoes-anteriores.png')] bg-no-repeat bg-contain md:bg-right-top flex justify-center items-center py-32 px-4">
      <div className="flex flex-col items-center justify-center gap-10 md:max-w-6xl w-full">
<div className='flex flex-col items-center justify-center py-10'>
<h2 className=" text-orange-500 font-bold md:text-2xl text-3xl text-center">Confira imagens de algumas </h2>
<h2 className=" text-orange-500 font-bold md:text-5xl text-3xl text-center">edições anteriores</h2>
</div>
        <div className="relative flex justify-center mb-6 gap-5">
          <button
            onClick={() => handleYearChange('2022')}
            className={`relative h-40 w-40 rounded-full transition-transform transform ${year === '2022' ? 'bg-blue-700 text-white font-bold text-4xl scale-110' : 'bg-orange-500 text-white font-bold text-4xl scale-95'}`}
          >
            2022
            {year === '2022' && (
              <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-blue-500" />
            )}
          </button>
          <button
            onClick={() => handleYearChange('2023')}
            className={`relative h-40 w-40 rounded-full transition-transform transform ${year === '2023' ? 'bg-blue-700 text-white font-bold text-4xl scale-110' : 'bg-orange-500 text-white font-bold text-4xl scale-95'}`}
          >
            2023
            {year === '2023' && (
              <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-blue-500" />
            )}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4">
          {currentImages.slice(0, 3).map((src, index) => (
            <div key={index} className="relative">
              <picture>
                <img src={src} alt={`Photo ${index + 1}`} className="w-full h-auto object-cover shadow-md" />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
