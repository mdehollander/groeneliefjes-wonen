
import { InlineForm } from 'react-tinacms-inline'

//Backend
import { usePlugin } from "tinacms"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"

import Setup from '../utils/setup';
import SetupContent from '../utils/content';

import Content from '../components/Content';
import Layout from '../components/Layout'

import Hero from "../components/hero/Hero"

export default function Home({ file }) {

    const [pageData, form] = useGithubJsonForm(file)
    usePlugin(form)
    useGithubToolbarPlugins()

    return (
        <InlineForm form={form}>
          <Hero {...pageData} />
          <Layout title="Groeneliefjes | WoonDromen">
          </Layout>
        </InlineForm>
    )
}

export const getStaticProps: GetStaticProps = async function({
    preview,
    previewData,
  }) {

    // Gets the Props
    return SetupContent(
      'content/pages/homepage.json',
      preview,
      previewData,
    );

};
