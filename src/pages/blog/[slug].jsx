import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function BlogPage({ content }) {
    return (
        <div>
            <h1>Blog page</h1>
            {content}
        </div>
    );
}

// get parameters slug and return back as filepath
export async function getStaticPaths() {
    const file = fs.readdirSync(path.join('blog'));
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
    const markdown = fs.readFileSync(
        path.join('blog', slug + '.md'),
        'utf-8'
    )

    // we need process markdown to html

    return {
        props: {
            content: markdown
        }
    }
}

export default BlogPage;
