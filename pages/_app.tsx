import App from 'next/app'
import '../styles/global.css'

import React from 'react'
import { TinaProvider, TinaCMS } from 'tinacms';

import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from 'react-tinacms-github'

import { AppProps } from 'next/app'

// https://github.com/FortAwesome/react-fontawesome#nextjs
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas) // Add all icons to the library so you can use it in your page

export default class Site extends App {
  cms: TinaCMS

  constructor(props: AppProps) {
    super(props)
    
    const github = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID as string,
      baseRepoFullName: process.env.REPO_FULL_NAME as string, // e.g: tinacms/tinacms.org,
      baseBranch: process.env.BASE_BRANCH as string, // e.g. 'master' or 'main' on newer repos
    })

    /**
     * 1. Create the TinaCMS instance
     */
    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        /**
         * 2. Register the GithubClient
         */
        github,
      },
      /**
       * 3. Register the Media Store
       */
      media: new GithubMediaStore(github),
      /**
       * 4. Use the Sidebar and Toolbar
       */
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview,
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      /**
       * 5. Wrap the page Component with the Tina and Github providers
       */
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          {/**
           * 6. Add a button for entering Preview/Edit Mode
           */}
       {/*<EditLink cms={this.cms} />*/}
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    )
  }
}

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) window.location.href = window.location.pathname
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

export interface EditLinkProps {
  cms: TinaCMS
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  )
}
