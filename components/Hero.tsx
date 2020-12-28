import {InlineText, InlineTextarea, InlineImage } from "react-tinacms-inline"

import Image from 'next/image'

export default function Hero() {

  return (
    <>
    <section className="text-gray-900 bg-green-500 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              <InlineText name="title" />
          </h1>
          <p className="mb-8 leading-relaxed">
              <InlineTextarea name="subtitle" />
          </p>
          <div className="flex justify-center">
              Droom jij ook van zo’n plek? <a href="#kernwaarden" className="px-1 pb-1 font-semibold uppercase transition-colors duration-500 border-b-4 border-gray-800 text-md hover:border-green-700 hover:text-white">Lees dan verder!</a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <InlineImage
              name="hero"
              parse={media => `/img/${media.filename}`}
              uploadDir={() => '/public/img/'}
              focusRing={false}
            >
              {props => (
                  <Image className="object-cover object-center rounded-full" src={props.src as string} width="500" height="500" />
              )}
            </InlineImage>
        </div>
      </div>
    </section>
    </>
  )
}
