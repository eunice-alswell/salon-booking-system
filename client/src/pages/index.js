import React from 'react'

const Login = React.lazy(() => import('./Login'))
const Signup = React.lazy(() => import('./Signup'))
const Home = React.lazy(() => import('./Home'))
const Book = React.lazy(() => import('./Book'))


const Pages = {
    Login,
    Signup,
    Home,
    Book    
};

export default Pages;
