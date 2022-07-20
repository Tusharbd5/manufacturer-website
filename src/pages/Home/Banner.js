import React from 'react';
import banner1 from '../../assets/Banner/banner-1.jpg';
import banner2 from '../../assets/Banner/banner-2.jpg';
import banner3 from '../../assets/Banner/Banner-3.png';
import 'tw-elements';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">

                <div className="carousel-item relative float-left w-full active">
                    <img
                        src={banner1}
                        className="block md:h-96 w-full"
                        alt="..."
                    />
                    <div style={{ backgroundColor: "#10263b60" }} className="carousel-caption absolute text-center text-white p-5 rounded-lg">
                        <h5 className="md:text-4xl text-2xl font-bold">Great News For Electro Enthusiasts!</h5>
                        <p className="py-6 text-justify">Electronic parts are available on Electro-Tools bd. Here is the total solutions of finding all tools related to electronics. We have created a warehouse where you may find all tools that we are manufacturing at a surprising budget.</p>
                        <button className="btn btn-primary btn-sm">Get Started</button>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={banner2}
                        className="block md:h-96 w-full"
                        alt="..."
                    />
                    <div style={{ backgroundColor: "#10263b60" }} className="carousel-caption absolute text-center rounded-lg p-5">
                        <h5 className="md:text-4xl text-2xl font-bold">Great News For Electro Enthusiasts!</h5>
                        <p className="py-6 text-justify">Electronic parts are available on Electro-Tools bd. Here is the total solutions of finding all tools related to electronics. We have created a warehouse where you may find all tools that we are manufacturing at a surprising budget.</p>
                        <button className="btn btn-primary btn-sm">Get Started</button>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={banner3}
                        className="block md:h-96 w-full"
                        alt="..."
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;