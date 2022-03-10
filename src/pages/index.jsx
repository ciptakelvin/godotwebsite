import React from 'react';
import Headers from '../components/Headers';

function Index() {
    return (
        <div>
            <Headers headers_items={[
                {
                    title: 'Fundarising',
                    link: '#fundarising',
                },
                {
                    title: 'Galery',
                    link: '/galery',
                },
                {
                    title: 'Karya',
                    link: '/karya',
                },
                {
                    title: 'Blog',
                    link: '/blog'
                }
            ]} />
        </div>
    );
}


export default Index;
