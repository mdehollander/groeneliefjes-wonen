
import { GetStaticProps } from 'next'
import { InlineForm } from 'react-tinacms-inline'

import { DefaultSeo } from 'next-seo'

//Backend
import { usePlugin } from "tinacms"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"

import SetupContent from '../utils/content';

import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from "../components/Hero"
import About from "../components/About"
import Features_content from '../components/Features-content'
import Inspiration from '../components/Inspiration'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home (props: any) {
    const [pageData, form] = useGithubJsonForm(props.file)
    usePlugin(form)
    useGithubToolbarPlugins()

    return (
        <>
            <Head>
              <title>Groeneliefjes</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <InlineForm form={form}>
                <DefaultSeo titleTemplate={pageData.title + ' | %s'} />
                <Hero {...pageData} />
                {/*<Kernwaarden />*/}
                <Features_content />
                <About />
                <Inspiration />
                {/*<Testimonial />*/}
                <Contact />
                <Footer />
            </InlineForm>

        </>
    )
}

export const getStaticProps: GetStaticProps = async function({
    preview,
    previewData,
  }) {

    // Gets the Props
    return SetupContent(
      'content/pages/home.json',
      preview,
      previewData,
    );

};
