import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import developer from '../../assets/developer.jpg';
import github from '../../assets/github.png';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='lg:w-2/3 mx-auto shadow-lg p-5 rounded-2xl mt-10 mb-10'>
            <h1 className='text-secondary text-3xl mt-3'>About The Developer</h1>
            <div className='developer-detail flex justify-center flex-col items-center'>
                <img src={developer} alt="" />
                <div>
                    <h3 style={{ color: "orange" }} className='text-2xl font-light mt-5'>Tanjim Hasan</h3>
                    <h3 style={{ color: "orange" }} className='font-light'>Email: tushardebhata24@gmail.com</h3>

                    <p ><span style={{ color: "orange" }} className='fw-bold'>Goal: </span> I am the react developer who is the developer of this site. I have used also react router, javascript xml, firebase authentication etc. I have a little amount of knowledge about backend but very much interested to develop the backend code. Therefore my target is to reach the final destination of web development that is full stack development. I am preparing myself for that situation. I have done some of the small projects. You can check those projects from below- </p>

                    <h2 className='lg:text-xl bg-base-200 p-2 mt-3 text-left'><span className='font-semibold text-orange-500'>Educational Background:</span> B.Sc in Computer Science and Engineering
                        <br />
                        <span className='font-semibold text-orange-500'>Institute: </span>Bangladesh University of Business and Technology</h2>

                    <div className='text-start'>
                        <h2 className='text-xl mt-5 mx-auto'>Some of my Live Projects are Here-</h2>
                        <h2 className='flex items-center'><ArrowRightIcon className='h-5 w-5 mr-3'></ArrowRightIcon> Warehouse Mangement- <a className='text-blue-500' target='blank' href="https://warehouse-management-b76ea.web.app/">Click Here</a></h2>

                        <h2 className='flex items-center'><ArrowRightIcon className='h-5 w-5 mr-3'></ArrowRightIcon> Self Teaching Provider- <a className='text-blue-500' target='blank' href="https://self-teaching-provider.web.app/">Click Here</a></h2>

                        <h2 className='flex items-center'><ArrowRightIcon className='h-5 w-5 mr-3'></ArrowRightIcon> Laptop Collection- <a className='text-blue-500' target='blank' href="https://laptop-collection.netlify.app/">Click Here</a></h2>

                        <h2 className='flex items-center'><ArrowRightIcon className='h-5 w-5 mr-3'></ArrowRightIcon> Phone Bazar- <a className='text-blue-500' target='blank' href="https://phone-bazar-bd.netlify.app/">Click Here</a></h2>
                    </div>

                    <a href="https://github.com/Tusharbd5?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <button
                            className='git-btn flex items-center justify-center mx-auto mt-5'><img style={{ width: '30px', height: "30px" }} src={github} alt="" />My Github Repo</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;