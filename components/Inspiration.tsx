import Image from 'next/image'

import { BlockTemplate } from 'tinacms'

import {
  InlineText,
  InlineTextarea,
  InlineBlocks,
  InlineImage,
  BlockTextarea,
  BlocksControls,
} from "react-tinacms-inline"

export default function Inspiration() {
  return (
    <>
        <section id="inspiratie" className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"><InlineText name="inspiration.title" /></h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"><InlineTextarea name="inspiration.headline" /></p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
              </div>
            </div>
            <InlineBlocks className="flex flex-wrap -m-4" name="inspiration.places" blocks={SETUP_INSPIRATION}/>
          </div>
        </section>
    </>
  )
}

const setup_inspiration_template: BlockTemplate = {
  label: 'Places',
  defaultItem: {
    title: 'Inspiring place',
    description: 'description',
    image: 'leaf',
    link: "delen"
  },
  fields: [],
}

const SETUP_INSPIRATION = {
  setup_place: {
    Component: SetupInspiration,
    template: setup_inspiration_template,
  },
}



function SetupInspiration({ data, index }:any) {
  return (
    <>
    <BlocksControls index={index}>
        {/*<div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
              <InlineImage
                name="image"
                parse={media => `/img/${media.filename}`}
                uploadDir={() => '/public/img/'}
                focusRing={false}
              >
                {props => (
                    <Image loading="lazy" className="h-40 rounded w-full object-cover object-center mb-6" src={props.src as string} alt="place" width="600" height="400" />
                )}
              </InlineImage>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                <BlockTextarea
                  name="title"
                  placeholder="Place"
                  focusRing={false}
                />
            </h2>
            <p className="leading-relaxed text-base">
                <BlockTextarea
                  name="description"
                  placeholder="Description"
                  focusRing={false}
                />
            </p>
          </div>
        </div>
        */}
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <a className="h-full flex items-center border-gray-200 border p-4 rounded-lg" href={data.link} target="_blank">
            <img alt="place" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={data.image} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">
                  <BlockTextarea
                    name="title"
                    placeholder="Place"
                    focusRing={false}
                  />
              </h2>
              <p className="text-gray-600">
                  <BlockTextarea
                    name="description"
                    placeholder="Description"
                    focusRing={false}
                  />
              </p>
            </div>
        </a>
        </div>
    </BlocksControls>
    </>
  );
}
