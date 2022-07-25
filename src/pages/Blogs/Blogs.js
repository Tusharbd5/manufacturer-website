import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div className='text-justify bg-base-200 w-96 lg:w-2/3 p-10 rounded-3xl shadow-xl mx-auto mb-10'>
                <h2 className='text-center text-xl font-semibold text-green-700 mb-3'>Question:  How will you improve the performance of a React Application?</h2>

                <p className='text-gray-500'><span className='font-bold'>Answer:</span> By default react use the single page application thats-why the performance sometime creates down. We can improve the performance by taking these steps below- <br />
                    {`=>`} When we build a react project file then there is a bundle file on build directory. When the size of this file is large then it creates initial loading time for the project. So we can use lots of chunk of bundle file. For that, it will run only that chunk of file is needed. So the performance will increase.
                    <br />
                    {`=>`} When the data of some years or a huge amount of data is loaded in one place then it creates a rendering error or rendering time loading for that project. So we can use gradual render for certain part for optimal result and we can fix the optimisation.
                    <br />
                    {`=>`} As react is only a front end library, so we need to scaffolding with another framework or backend server. That's why the performance gets down. So we can use rest api when we will use react application scaffoled with another framework.

                    {`=>`} When we use state then it creates re-rendering for the react application project. That's one of the reason for performace get down. So we have to reduce unnecessary rendering for optimal performance by using react-hooks or DOM etc.
                </p>

            </div>

            <div className='text-justify bg-base-200 w-96 lg:w-2/3 p-10 rounded-3xl shadow-xl mx-auto mb-10'>
                <h2 className='text-center text-xl font-semibold text-green-700 mb-3'>Question:  What are the different ways to manage a state in a React application?</h2>

                <p className='text-gray-500'><span className='font-bold'>Answer:</span> We can manage a state in our react application in some of these ways below <br />

                    {`>>`} First, we can manage a state in one or another component using <span className='font-semibold'>useState</span> hook. useState is used to set a state value of a state and get that value when the state is changed.
                    <br />

                    {`>>`} Second, we have to use <span className='font-semibold'>useEffect</span> for handelling side effects of the change of state.
                </p>

            </div>
            <div className='text-justify bg-base-200 w-96 lg:w-2/3 p-10 rounded-3xl shadow-xl mx-auto mb-10'>
                <h2 className='text-center text-xl font-semibold text-green-700 mb-3'>Question:  Why you do not set the state directly in React?</h2>

                <p className='text-gray-500'><span className='font-bold'>Answer:</span> If we have {`const [products, setProducts]= useState[]`}. Then we should not use {`products= [...]`} for the reasons below- <br />

                    First if set the state directly then its value will static. That means, we will not able to change the state. We have to use a fixed state value by using this direct state.
                    <br />
                    But if we need to change the state value then we should use <span className='font-semibold'>useState</span> hook.
                </p>

            </div>
            <div className='text-justify bg-base-200 w-96 lg:w-2/3 p-10 rounded-3xl shadow-xl mx-auto mb-10'>
                <h2 className='text-center text-xl font-semibold text-green-700 mb-3'>Question: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>

                <p className='text-gray-500'><span className='font-bold'>Answer:</span> The code to implement a search to find products by name from an array is - <br />

                    <br />

                    {
                        `
                    const arr = [{name: 'lenovo', price: 10, des: 'laptop'}, {name: 'livo ', price: 5, des: 'laptop'}, {name: 'hp probook', price: 100, des: 'laptop'}, {name: 'lenovo idea', price: 50, des: 'laptop'}];
                    `
                    }
                    <br />
                    {
                        `
                        const result = arr.filter(a=> a.name.includes('le')).map(pd=> pd.name);
                        `
                    }
                    <br />
                    {
                        `console.log(result);`
                    }
                </p>

            </div>

            <div className='text-justify bg-base-200 w-96 lg:w-2/3 p-10 rounded-3xl shadow-xl mx-auto mb-10'>
                <h2 className='text-center text-xl font-semibold text-green-700 mb-3'>Question: What is a unit test? Why should write unit tests?</h2>

                <p className='text-gray-500'><span className='font-bold'>Answer:</span> Unit test is a part of testing a software or project. It is a technic of software testing. When a developer finish a feature of a software then he/she checks the unit is working or not by writing some code named as unit test.

                    <br />
                    <br />
                    One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.
                </p>

            </div>
        </div>
    );
};

export default Blog;