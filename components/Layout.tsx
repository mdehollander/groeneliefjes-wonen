import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Hero from './Hero'
import Features_content from './Features-content'
import Inspiration from './Inspiration'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Hero />
    <Kernwaarden />
    <Features_content />
    <Inspiration />
    <Testimonial />
    <Contact />
    <Footer />


    {children}
  </div>
)

export default Layout
