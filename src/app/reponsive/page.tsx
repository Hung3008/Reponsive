import React from 'react';
import Head from 'next/head';
import Header from '../reponsive/header';
import Nav from '../reponsive/nav';
import Footer from '../reponsive/footer';

import '@/styles/reponsive.css';


export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Responsive Next.js App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Header />
            <Nav />

            <main className='main'>

                <div className="product">

                    <h2>Product 1</h2>
                    <p>Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="price">$19.99</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product">

                    <h2>Product 2</h2>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="price">$29.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">

                    <h2>Product 3</h2>
                    <p>Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="price">$39.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">

                    <h2>Product 4</h2>
                    <p>Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="price">$49.99</p>
                    <button>Add to Cart</button>
                </div>


            </main>

            <Footer />
        </div>
    );
}
