import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useCMS } from 'tinacms';

function EditButton() {
  const cms = useCMS();
  return (
   <button className="text-gray-600 ml-1" onClick={() => cms.toggle()}>
    <span className={(cms.enabled ? "hidden" : "flex")}><FontAwesomeIcon icon="edit" /></span>
    <span className={(cms.enabled ? "flex" : "hidden")}><FontAwesomeIcon icon="times" /></span>
    </button>
  );
}


export default function Footer() {
  return (
    <>
        <footer className="text-gray-700 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="https://creativecommons.org/licenses/by/4.0/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <FontAwesomeIcon icon={["fab", "creative-commons"]} />
                    </svg>
                </a>
                <a href="https://creativecommons.org/licenses/by/4.0/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={["fab", "creative-commons-by"]} />
                    </svg>
                </a>
                </span>
            </p>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <EditButton />
                </span>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://github.com/mdehollander/groeneliefjes-wonen" aria-label="Github" target="_blank" rel="noopener noreferrer" className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                </svg>
              </a>
            </span>
          </div>
        </footer>
    </>
  )
}
