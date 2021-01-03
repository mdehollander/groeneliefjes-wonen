
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import { BlockTemplate } from 'tinacms'

import {
  InlineText,
  InlineTextarea,
  InlineBlocks,
  BlockTextarea,
  BlocksControls,
} from "react-tinacms-inline"

export default function Kernwaarden() {
  return (
      <section id="kernwaarden" className="pb-1 text-gray-700 bg-covert">
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"><InlineText name="kernwaarden.title" /></h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"><InlineTextarea name="kernwaarden.headline" /></p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
              </div>
            </div>
            <InlineBlocks className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4" name="kernwaarden.features" blocks={SETUP_KERNWAARDEN}/>
        </div>
      </section>
  )
}

const setup_kernwaarden_template: BlockTemplate = {
  label: 'Core Values',
  defaultItem: {
    title: 'Make yourself a dang quesadilla',
    description: 'Bladibla',
    icon: 'leaf',
    link: "delen"
  },
  fields: [],
}

const SETUP_KERNWAARDEN = {
  setup_point: {
    Component: SetupKernwaarden,
    template: setup_kernwaarden_template,
  },
}



function SetupKernwaarden({ data, index }:any) {
  return (
    <>
    <BlocksControls index={index}>
      <div className="p-4 md:w-1/2 md:mb-0 mb-6 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <FontAwesomeIcon icon={data.icon as IconName} />
          </svg>
        </div>
        <div className="flex-grow pl-6">

          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              <BlockTextarea
                name="title"
                placeholder="Core Value"
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
          <AnchorLink className="mt-3 text-green-500 inline-flex items-center" href={data.link}>Lees verder
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
          </AnchorLink>
        </div>
      </div>
    </BlocksControls>
    </>
  );
}
