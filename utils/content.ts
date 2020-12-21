import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'


export default async function SetupContent(jsonFile:string, preview:boolean, previewData:any) {
        if (preview) {
            return getGithubPreviewProps({
                ...previewData,
                fileRelativePath: jsonFile,
                parse: parseJson,
            })
        }
        return {
            props: {
                sourceProvider: null,
                error: null,
                preview: false,
                file: {
                    fileRelativePath: jsonFile,
                    data: (await import(`../${jsonFile}`)).default,
                },
            },
        }
}
