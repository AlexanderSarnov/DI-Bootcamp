import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function DemoCarousel() {
    return (
        <Carousel>
            <div>
                <img src="../images/hong-kong.jpg" alt="Image 1" />
                <p className="legend">Hong-Kong</p>
            </div>
            <div>
                <img src="../images/macao.webp" alt="Image 1" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src="../images/japan.webp" alt="Image 1" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="../images/new-york.webp" alt="Image 1" />
                <p className="legend">New-York</p>
            </div>
        </Carousel>
    );
}
