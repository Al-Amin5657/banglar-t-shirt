import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirt = useLoaderData();
    return (
        <div>
            <h3>This is home: {tShirt.length}</h3>
        </div>
    );
};

export default Home;