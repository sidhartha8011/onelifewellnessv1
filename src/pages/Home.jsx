import React from 'react'
import OlwBackground from '../components/OlwBackground'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    
    <OlwBackground/>
     <Header/>
    <div className='olw-home-page'>
        <div>
            <h1 className='olw-home-header'>One <span className='heading-bold'>Life Wellness,</span>  A <span className='heading-bold'>manual</span> for <span className='heading-bold'>life</span></h1>
        </div>

        <div className='olw-home-content-box'>
            <div>
                <h4>
                Lorem ipsum
                dolor sit amet consectetur.
                </h4>
                <h2>
                LOREM
                IPSUMDOLOR
                </h2>
                <p>
                Lorem ipsum dolor sit amet consectetur. Feugiat fermentum a enim feugiat. Pharetra pretium turpis luctus scelerisque sed. Sem laoreet odio ipsum vestibulum tortor magna purus pharetra. Pulvinar vitae fermentum risus id risus nisi quis nunc.
                </p>

            </div>
            <div>

            </div>

        </div>

    </div>
       
    </>
  )
}

export default Home