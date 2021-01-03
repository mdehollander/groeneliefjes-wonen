import Image from 'next/image'

import { BlockTemplate } from 'tinacms'

import {
  InlineText,
  InlineTextarea,
  InlineBlocks,
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
            <div className="flex flex-wrap -m-4">
              <InlineBlocks className="flex flex-wrap -m-4" name="inspiration.places" blocks={SETUP_INSPIRATION}/>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dorothy Gemeenschap</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image className="h-40 rounded w-full object-cover object-center mb-6" loading="lazy" src="/img/noelhuis.png" alt="noelhuis" width="600" height="400" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Jeannette Noëlhuis</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">De Wonne</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

const setup_inspiration_template: BlockTemplate = {
  label: 'Core Values',
  defaultItem: {
    title: 'Inspiring place',
    description: 'description',
    image: 'leaf',
    link: "delen"
  },
  fields: [],
}

const SETUP_INSPIRATION = {
  setup_point: {
    Component: SetupInspiration,
    template: setup_inspiration_template,
  },
}



function SetupInspiration({ data, index }:any) {
  return (
    <>
    <BlocksControls index={index}>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
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
    </BlocksControls>
    </>
  );
}
