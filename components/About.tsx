import Image from 'next/image'

export default function About() {
    return (
      <>
        <section id="overons" className="text-gray-600 body-font">
          <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Over ons</h1>
            </div>

            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Image loading="lazy" src="/img/wilma.jpg" alt="wilma" className="flex-shrink-0 rounded-lg w-200 h-200 object-cover object-center sm:mb-0 mb-4" width="2000" height="2000" />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">Wilma</h2>
                    <p className="mb-4">
Mijn naam is Wilma. Ik ben een idealist, een dromer. Ik houd van dingen organiseren waar ik enthousiast voor ben. Dat doe ik in mijn werk bij Present en bijvoorbeeld bij het KloosterBoerderijFestival. Verder houd ik van goeie gesprekken over het leven, wandelen (of die 2 gecombineerd) festivalsfeer, planten om me heen, stilte zoeken, koken, lezen, bergen&zee en reizen. Verder ben ik eigenwijs, creatief, kritisch en innovatief. Ik vind het leuk om samen af te wassen, leuker om samen suikervrije taart te eten of spelletjes te doen, leuk om samen te dromen over een betere wereld en ook leuk om samen actie te voeren daarvoor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Image loading="lazy" src="/img/mattias.jpg" alt="wilma" className="flex-shrink-0 rounded-lg w-200 h-200 object-cover object-center sm:mb-0 mb-4" width="2000" height="2000" />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">Mattias</h2>
                    <p className="mb-4">Mattias werkt als bio-informaticus bij het NIOO in Wageningen en is al bijna tien jaar lang een dag in de week actief als vrijwiligger op de biologische zorgboerderij Makandra in Ede. Hij wordt enthousiast van alles wat met open-source software te maken heeft, zowel binnen zijn werkveld als daarbuiten. Hij is graag buiten te vinden op de (race)fiets of om te wandelen in de natuur. Ook kun je hem thuis geregeld in de hangmat vinden waar hij graag luistert naar afrobeat, jazz of wereldmuziek.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>
        </section>
        </>
      )
    }
