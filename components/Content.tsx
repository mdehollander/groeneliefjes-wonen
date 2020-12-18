import { InlineWysiwyg } from "react-tinacms-editor";
import ReactMarkdown from "react-markdown";

type Props = {
    data: {
        body: string
    },
}

export default function Content({
    data
} : Props) {
    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center">
                <div className="lead w-75 align-self-center" style={{'minHeight': '400px'}}>
                    <InlineWysiwyg
                        name="body"
                        format="markdown"
                        imageProps={{
                            parse: (filename) => `images/${filename}`,
                            directory: 'public/images/',
                        }}
                        sticky
                    >
                        <ReactMarkdown
                            source={data.body}
                            escapeHtml={false}
                        />
                    </InlineWysiwyg>
                </div>
            </div>


            <style global jsx>{`
                strong {
                    fontWeight: bold !important;
                }
            `}</style>


        </div>
    );
}
