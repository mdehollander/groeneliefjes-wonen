
import { InlineForm } from 'react-tinacms-inline';
import { useCMS } from 'tinacms';

import Setup from '../utils/setup';
import SetupContent from '../utils/content';
import Content from '../components/Content';
import Layout from '../components/Layout'

export default function Home({ file }) {

    const {form, data} = Setup(file);
    const cms = useCMS();

    return (
        <InlineForm form={form}>
          <Layout title="Groeneliefjes | WoonDromen">
          </Layout>
        <Content data={data} />
        </InlineForm>
    )
}

export const getStaticProps: GetStaticProps = async function({
    preview,
    previewData,
  }) {

    // Gets the Props
    return SetupContent(
      'content/pages/home2.json',
      preview,
      previewData,
    );

};
