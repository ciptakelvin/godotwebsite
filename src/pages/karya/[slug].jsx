import React from 'react';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';

function KaryaPage({ content }) {
    return (
        <div>
            <Markdown>
                {content}
            </Markdown>
        </div>
    );
}

// get parameters slug and return back as filepath
export async function getStaticPaths() {
    const file = fs.readdirSync(path.join('karya'));
    const paths = file.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    var markdown = fs.readFileSync(
        path.join('karya', slug + '.md'),
        'utf-8'
    )

    return {
        props: {
            content: markdown
        }
    }
}

export default KaryaPage;
