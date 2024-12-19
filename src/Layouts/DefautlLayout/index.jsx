import React from 'react';
import Header from './header';
import Footer from './footer';
const DefaultLayout = ({children}) => {

    return (
        <>
            <div className="">
            <Header />
            <div className='min-h-[600px]'>
                {children}
            </div>
            
            <Footer />
         
        </div>
        </>
    )
}

export default DefaultLayout;