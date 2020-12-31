import React, { FC } from 'react';
import Head from 'next/head';

export const markup = (jsonld: string) => ({ __html: jsonld });

export interface OrganizationJsonLdProps {
  keyOverride?: string;
  organizationName: string;
  url: string;
  logo?: string;
}

const OrganizationJsonLd: FC<OrganizationJsonLdProps> = ({
  keyOverride,
  organizationName,
  url,
  logo,
}) => {
  const jslonld = `{
    "@context": "https://schema.org",
    "@type": "Project",
    "name": "${organizationName}",
    "url": "${url}",
    ${logo ? `"logo": "${logo}"` : ''}
  }`;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(jslonld)}
        key={`jsonld-organization${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
};

export default OrganizationJsonLd;
