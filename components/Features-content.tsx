import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

import Image from 'next/image'

import {
  InlineText,
  InlineTextarea,
  InlineBlocks,
  BlockTextarea,
  BlocksControls,
} from "react-tinacms-inline"

export default function Features_content() {
  return (
    <>
    <section id="kernwaarden" className="pb-1 text-gray-700 bg-covert">
      <div className="container px-6 py-8 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"><InlineText name="kernwaarden.title" /></h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"><InlineTextarea name="kernwaarden.headline" /></p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>
       </div>
        <div id="gastvrijheid" className="bg-gray-100">
            <div className="max-w-6xl px-6 py-8 mx-auto md:px-12">
                <h2 className="text-2xl mb-4 text-center font-bold text-gray-900">Radicale Gastvrijheid</h2>
                <div className="items-center -mx-6 md:flex md:-mx-12">
                    <div className="w-full px-10 mt-16 md:w-1/2 md:mt-0">
                        <div className="overflow-hidden bg-white rounded-lg shadow-xl">

                            <div className="flex w-full relative">
                                <Image loading="lazy" src="/img/Fritz Eichenberg Lords supper.jpg" alt="lords supper" width="600" height="400" />
                                <div className="text-xs italic text-gray-600 absolute pt-3 md:pt-0 bottom-0 right-0 -my-5 mr-3">"The Last Supper" van Fritz Eichenberg</div>
                             </div>

                            <div className="p-12">
                                <blockquote className="text-lg italic text-gray-800 text-justify">
                                    <div className="absolute -mt-2 -ml-2 pin-t pin-l">
                                        <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.264 19.552C15.264 23.2 17.664 25.12 20.352 25.12C23.328 25.12 26.112 22.624 26.112 19.456C26.112 16.864 24.288 15.136 22.08 15.136C21.888 15.136 21.408 15.136 21.312 15.136C22.368 12.064 25.824 8.8 29.376 7.072L26.4 4C20.448 6.976 15.264 13.504 15.264 19.552ZM0 19.552C0 23.2 2.304 25.12 5.088 25.12C8.064 25.12 10.848 22.624 10.848 19.456C10.848 16.864 8.928 15.136 6.72 15.136C6.528 15.136 6.048 15.136 5.952 15.136C7.008 12.064 10.56 8.8 14.016 7.072L11.136 4C5.184 6.976 0 13.504 0 19.552Z"
                                                className="text-gray-300 fill-current"></path>
                                        </svg>
                                    </div>
                                    <div className="relative">
                                        <p>
                                        We dromen van een plek waar we met elkaar gastvrij kunnen zijn voor mensen die ergens anders niet zo veel gastvrijheid ontvangen. Samen kunnen we het leven delen, en ook de lusten en lasten van de gastvrijheid.
                                        </p>
                                    </div>
                                </blockquote>

                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 md:w-1/2 md:px-12">

                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="people-carry"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Mensen die ergens anders niet zoveel gastvrijheid ontvangen.</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="hands-helping"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Random geïnteresseerde mensen. Een paar dagen meeleven, meebidden, meewerken. </div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="user-friends"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Vrienden & familie</div>
                            </div>
                        </div>
                        <h3 className="mt-10 text-2xl font-bold text-gray-900">Hoeveel delen we samen?</h3>

                        <div className="flex mt-2 ml-4 items-center justify-between w-full mb-1 text-sm">
                            <span>Alles</span>
                            <div className="py-1 relative w-full">
                                    <div className="h-2 mx-2 bg-green-400 rounded-full">
                                    <div className="tooltip absolute h-4 mx-2 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-400 top-0 cursor-pointer"  style={{left: "0%"}}>
                                        <div className="relative shadow-md tooltip-text">
                                            <div className="bg-white rounded py-1 px-4 my-2">
                                              <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">Alles</div>
                                                <p className="text-grey-darker text-base">
                                                  Zoals een klooster of een gezin onderling deelt: eigen slaapkamer, samen eten, alle gemeenschappelijke woonruimten gedeelt, geen persoonlijk bezit.
                                                </p>
                                              </div>
                                            </div>
                                            <svg className="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255">
                                                <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="tooltip absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-400 -ml-2 top-0 cursor-pointer"  style={{left: "10.4839%"}}>
                                        <div className="relative shadow-md tooltip-text">
                                            <div className="bg-white rounded py-1 px-4 my-2">
                                              <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">Voorbeeld Noelhuis</div>
                                                <p className="text-grey-darker text-base">
                                                    Elke dag samen eten. Eigen (slaap)kamer. Alle gemeenschappelijk woonruimten gedeeld. Wel eigen bezit.
                                                </p>
                                              </div>
                                            </div>
                                            <svg className="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255">
                                                <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="tooltip absolute h-4 flex items-center justify-center w-4 rounded-full bg-blue-600 shadow border border-blue-600 -ml-2 top-0 cursor-pointer"  style={{left: "35.4839%"}}>
                                            <div className="relative shadow-md tooltip-text">
                                                <div className="bg-white rounded py-1 px-4 my-2">
                                                  <div className="px-6 py-4">
                                                    <div className="font-bold text-xl mb-2">Ons ideaal</div>
                                                    <p className="text-grey-darker text-base">
                                                        Vaak samen eten. Eigen slaapkamer + andere ruimte. Grote gemeenschappelijke ruimte. Eigen bezit. Elkaar en anderen steunen.
                                                    </p>
                                                  </div>
                                                </div>
                                            <svg className="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255">
                                                <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="tooltip absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-400 -ml-2 top-0 cursor-pointer"  style={{left: "75%"}}>
                                        <div className="relative shadow-md tooltip-text">
                                            <div className="bg-white rounded py-1 px-4 my-2">
                                              <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">Voorbeeld Centraal Wonen</div>
                                                <p className="text-grey-darker text-base">
                                                    Eigen woonunit, 1x per jaar samen eten, wat gemeenschappelijke ruimtes (niet noodzakelijk, extra), geen gemeenschappelijk bezit.
                                                </p>
                                              </div>
                                            </div>                                        <svg className="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255">
                                                <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="tooltip absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-400 -ml-2 top-0 cursor-pointer"  style={{left: "97%"}}>
                                        <div className="relative shadow-md tooltip-text">
                                            <div className="bg-white rounded py-1 px-4 my-2">
                                              <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">Niks</div>
                                                <p className="text-grey-darker text-base">
                                                    Zoals een zelfstandig huishouden met de buren deelt
                                                </p>
                                              </div>
                                            </div>                                        <svg className="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255">
                                                <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <span>Niets</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        {/* features content */}
        <div id="natuur" className="bg-gray-100">
            <div className="max-w-6xl px-6 py-8 mx-auto md:px-12">
                <h2 className="text-2xl mb-4 text-center font-bold text-gray-900">Leven met de natuur</h2>
                <div className="items-center -mx-6 md:flex md:-mx-12">
                    <div className="w-full px-6 md:w-1/2 md:px-12">
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="paw"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Buitenleef mogelijkheden</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="leaf"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Duurzaam wonen + duurzaam leven</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="carrot"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Tuinieren, land onderhouden.</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <blockquote className="text-lg italic text-gray-800 text-justify">
                                <div className="absolute -mt-2 -ml-2 pin-t pin-l">
                                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.264 19.552C15.264 23.2 17.664 25.12 20.352 25.12C23.328 25.12 26.112 22.624 26.112 19.456C26.112 16.864 24.288 15.136 22.08 15.136C21.888 15.136 21.408 15.136 21.312 15.136C22.368 12.064 25.824 8.8 29.376 7.072L26.4 4C20.448 6.976 15.264 13.504 15.264 19.552ZM0 19.552C0 23.2 2.304 25.12 5.088 25.12C8.064 25.12 10.848 22.624 10.848 19.456C10.848 16.864 8.928 15.136 6.72 15.136C6.528 15.136 6.048 15.136 5.952 15.136C7.008 12.064 10.56 8.8 14.016 7.072L11.136 4C5.184 6.976 0 13.504 0 19.552Z"
                                            className="text-gray-300 fill-current"></path>
                                    </svg>
                                </div>
                                <div className="relative">
                                    <p>
                                    Omgeving: we houden van bos in de buurt, om te wandelen en fietsen. Huis: zo duurzaam mogelijk binnen de haalbare (tijd + geld) eisen. Rond het huis: liefst een tuin waar we ook buiten kunnen leven en een gedeelte van ons eten kunnen verbouwen. Levensstijl: zo duurzaam mogelijk op alle vlakken, elkaar daarin inspireren.
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                    <div className="w-full px-10 mt-16 md:w-1/2 md:mt-0">
                        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                            <Image loading="lazy" src="/img/Tuin.JPG" alt="tuin" width="600" height="400" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* feature 3 */}
        <div id="leven-delen" className="bg-gray-100">
            <div className="max-w-6xl px-6 py-8 mx-auto md:px-12">
                <h2 className="text-2xl mb-4 text-center font-bold text-gray-900">Samen: het leven delen</h2>
                <div className="items-center -mx-6 md:flex md:-mx-12">
                    <div className="w-full px-10 mt-16 md:w-1/2 md:mt-0">
                        <div className="overflow-hidden bg-white rounded-lg shadow-xl">

                                <Image loading="lazy" src="/img/samen leven.jpg" alt="samen" width="600" height="400" />

                        </div>
                    </div>
                    <div className="w-full px-6 md:w-1/2 md:px-12">
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="people-carry"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Betrokken op elkaar</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="hands-helping"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Samen eten</div>

                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="user-friends"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Samen verantwoordelijkheid nemen</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="user-friends"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Ruimte delen</div>

                            </div>
                        </div>
                        <div className="flex mt-10">
                            <blockquote className="text-lg italic text-gray-800 text-justify">
                                <div className="absolute -mt-2 -ml-2 pin-t pin-l">
                                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.264 19.552C15.264 23.2 17.664 25.12 20.352 25.12C23.328 25.12 26.112 22.624 26.112 19.456C26.112 16.864 24.288 15.136 22.08 15.136C21.888 15.136 21.408 15.136 21.312 15.136C22.368 12.064 25.824 8.8 29.376 7.072L26.4 4C20.448 6.976 15.264 13.504 15.264 19.552ZM0 19.552C0 23.2 2.304 25.12 5.088 25.12C8.064 25.12 10.848 22.624 10.848 19.456C10.848 16.864 8.928 15.136 6.72 15.136C6.528 15.136 6.048 15.136 5.952 15.136C7.008 12.064 10.56 8.8 14.016 7.072L11.136 4C5.184 6.976 0 13.504 0 19.552Z"
                                            className="text-gray-300 fill-current"></path>
                                    </svg>
                                </div>
                                <div className="relative">
                                    <p>
                                     Door op verschillende momenten in de week elkaar standaard (maar niet te altijd even uitgebreid) te ontmoeten kunnen we de mooie en moeilijke momenten van het leven met elkaar delen. Praktisch zorgt ruimte delen ervoor dat elke woonunit minder nodig heeft. We denken dan aan logeerkamers, ontmoetingsruimtes, keuken, wasmachines etc.
                                    </p>
                                </div>
                            </blockquote>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        {/* features content */}
        <div id="natuur" className="bg-gray-100">
            <div className="max-w-6xl px-6 py-8 mx-auto md:px-12">
                <h2 className="text-2xl mb-4 text-center font-bold text-gray-900">Bidden</h2>
                <div className="items-center -mx-6 md:flex md:-mx-12">
                    <div className="w-full px-6 md:w-1/2 md:px-12">
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="praying-hands"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Gebedsritme, +- 1x/dag</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="church"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Gebeden geïnspireerd op Taizé</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <FontAwesomeIcon  icon="cross"></FontAwesomeIcon>
                                </svg>
                            </div>
                            <div className="mt-2 ml-4">
                                <div className="text-lg font-semibold">Oecumenisch</div>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <blockquote className="text-lg italic text-gray-800 text-justify">
                                <div className="absolute -mt-2 -ml-2 pin-t pin-l">
                                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.264 19.552C15.264 23.2 17.664 25.12 20.352 25.12C23.328 25.12 26.112 22.624 26.112 19.456C26.112 16.864 24.288 15.136 22.08 15.136C21.888 15.136 21.408 15.136 21.312 15.136C22.368 12.064 25.824 8.8 29.376 7.072L26.4 4C20.448 6.976 15.264 13.504 15.264 19.552ZM0 19.552C0 23.2 2.304 25.12 5.088 25.12C8.064 25.12 10.848 22.624 10.848 19.456C10.848 16.864 8.928 15.136 6.72 15.136C6.528 15.136 6.048 15.136 5.952 15.136C7.008 12.064 10.56 8.8 14.016 7.072L11.136 4C5.184 6.976 0 13.504 0 19.552Z"
                                            className="text-gray-300 fill-current"></path>
                                    </svg>
                                </div>
                                <div className="relative">
                                    <p>
                                   We geloven dat we het niet alleen kunnen, en erkennen dat met elkaar door ruimte te maken voor ontmoeting met Hij die ons inspireert. Jezus’ voorbeeld willen we volgen. We gaan allemaal onze eigen weg. Door momenten te delen waar we samen zingen, stil zijn en samen lezen willen we ook een balansmoment creëren.
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                    <div className="w-full px-10 mt-16 md:w-1/2 md:mt-0">
                        <div className="overflow-hidden rounded-lg shadow-xl">
                            <Image loading="lazy" src="/img/Bidden.jpeg" alt="tuin" width="600" height="400" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
  </section>
    </>
  )
}
