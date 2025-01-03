import React from 'react';
import './App.css';
import ProductCarousel from './ProductCarousel';
// src/index.js or src/App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    return (
        <div className="App">
            <h1 className="text-2xl font-bold text-center my-4">You May Also Like</h1>
            <div className="w-full flex justify-center">
                <div className="max-w-2xl w-full">
                    <ProductCarousel />
                </div>
            </div>

        </div>
    );
}

export default App;
