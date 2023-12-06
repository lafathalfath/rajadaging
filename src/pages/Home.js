import React, { useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Home.css';
import Banner1 from '../assets/img/banner/jumbotronBanner1.png';
import Banner2 from '../assets/img/banner/jumbotronBanner2.png';
import { Link } from 'react-router-dom';

import dagingGilingDadaAyam from '../assets/img/Foto Produk/26. daging giling dada ayam premium 500gr.jpg';
import kentangGorengBelfoods from '../assets/img/Foto Produk/33. kentang goreng french fries belfoods 500gr.jpg';
import dagingStekSirloinReguler from '../assets/img/Foto Produk/34. daging steak sirloin reguler 1kg.jpg';
import dagingSliceLowFat from '../assets/img/Foto Produk/4. daging slice low fat sukiyaki yakiniku teriyaki 1 kg.jpg';
import dagingRendangPotong from '../assets/img/Foto Produk/10. daging rendang potong 1 kg.jpg';
import beefSlice from '../assets/img/Foto Produk/15. beef slice   daging slice   all you can eat 500 gr.jpg';
import dagingSliceMeltiqueWagyu from '../assets/img/Foto Produk/22. daging slice melique wagyu   beef sapi slice meltique 500 gr.jpg';
import saikoroBeefWagyuCube from '../assets/img/Foto Produk/20. saikoro beef wagyu cube 1 kg.jpg';
import codeaSteambot from '../assets/img/Foto Produk/30. codea steambot 300 gr.jpg';
import mincedBeef from '../assets/img/Foto Produk/5. minced beef   daging giling halus premium 1 kg.jpg';
import kikilSapi from '../assets/img/Foto Produk/24. kikil sapi   tunjang sapi   tunjang pandang 1kg.jpg';
import dagingSemur from '../assets/img/Foto Produk/14. daging semur reguler 1kg.jpg';

const Home=()=>{

    const sliderRef1 = useRef(null);
    // const sliderRef2 = useRef(null);

    const settingsSlider1={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            // {
            //     breakpoint: 768,
            //     settings: {
            //     slidesToShow: 2,
            //     },
            // },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                },
            },
        ],
    }
    const settingsSlider2={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: 1,
        focusOnSelect: true,
        
        responsive: [
            // {
            //     breakpoint: 768,
            //     settings: {
            //     slidesToShow: 2,
            //     },
            // },
            {
                breakpoint: 1120,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                },
            },
            {
                breakpoint: 860,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ],
    }

    const goToNextSlide1=()=>{
        sliderRef1.current.slickNext();
    }

    const goToPrevSlide1=()=>{
        sliderRef1.current.slickPrev();
    }
    
    // const goToNextSlide2=()=>{
    //     sliderRef2.current.slickNext();
    // }

    // const goToPrevSlide2=()=>{
    //     sliderRef2.current.slickPrev();
    // }

    return(
        <section className="home-page">
            <section className='jumbotron'> 
                {/*  */}
                <Slider ref={sliderRef1} {...settingsSlider1} style={{with: '100%'}}>
                    <div className='jumbotron-item'>  
                        <img src={Banner1} alt='Slide 1'/> 
                    </div>
                    <div className='jumbotron-item jumbotron-slide-2'>  
                        <img src={Banner2} alt='Slide 2'/> 
                        <div className='slide-overlay'>
                            <h1>RAJADAGING</h1>
                            <p>
                            Kami adalah supplier daging fresh & frozen. Kami menyediakan berbagai macam pilihan daging segar dan berkualitas untuk memenuhi kebutuhan Rumah Tangga, Restoran, Hotel, Pabrik, Rumah Sakit dan lain-lain. Selain daging, kami juga menjual berbagai macam jenis frozen food seperti Ayam, Seafood, dan Produk lainnya.
                            </p>
                            {/* <Link to='/product'>Pesan Sekarang</Link> */}
                            <a href='https://wa.me/6287880056715' target='_blank' rel='noreferrer'>Pesan Sekarang</a>
                        </div>
                    </div>
                </Slider>

                <button className='slide-position-btn prev' onClick={goToPrevSlide1}>&#8249;</button>
                <button className='slide-position-btn next' onClick={goToNextSlide1}>&#8250;</button>
            </section>

            <section className='popular'>
                <h1 style={{textAlign: 'center', padding: '20px', color: '#93262C', fontSize: '20px'}}>Produk Terlaris</h1>
                <div className='popular-gallery'>
                    {/*  ref={sliderRef2} */}
                    <Slider {...settingsSlider2} style={{width: '100%'}}>
                        <div className='popular-item'>
                            <img src={dagingGilingDadaAyam} alt=''/>
                            <div className='card-title'>Daging Giling Dada Ayam Premium</div>
                        </div>
                        <div className='popular-item'>
                            <img src={kentangGorengBelfoods} alt=''/>
                            <div className='card-title'>Kentang Goreng / French Fries Belfoods</div>
                        </div>
                        <div className='popular-item'>
                            <img src={dagingStekSirloinReguler} alt=''/>
                            <div className='card-title'>Daging Steak Sirloin Reguler</div>
                        </div>
                        <div className='popular-item'>
                            <img src={dagingSliceLowFat} alt=''/>
                            <div className='card-title'>Daging Slice Low Fat / Sukiyaki / Yakiniku / Teriyaki</div>
                        </div>

                        <div className='popular-item'>
                            <img src={dagingRendangPotong} alt=''/>
                            <div className='card-title'>Daging Rendang Potong</div>
                        </div>
                        <div className='popular-item'>
                            <img src={beefSlice} alt=''/>
                            <div className='card-title'>Beef Slice / Daging Slice / All You Can Eat</div>
                        </div>
                        <div className='popular-item'>
                            <img src={dagingSliceMeltiqueWagyu} alt=''/>
                            <div className='card-title'>Daging Slice Meltique Wagyu / Beef Sapi Slice Meltique</div>
                        </div>
                        <div className='popular-item'>
                            <img src={saikoroBeefWagyuCube} alt=''/>
                            <div className='card-title'>Saikoro Beef Wagyu Cube</div>
                        </div>
                        
                        <div className='popular-item'>
                            <img src={codeaSteambot} alt=''/>
                            <div className='card-title'>Codea Steambot</div>
                        </div>
                        <div className='popular-item'>
                            <img src={mincedBeef} alt=''/>
                            <div className='card-title'>Minced Beef / Daging Gilig Halus Premium</div>
                        </div>
                        <div className='popular-item'>
                            <img src={kikilSapi} alt=''/>
                            <div className='card-title'>Kikil Sapi / Tunjang Sapi / Tunjang Padang</div>
                        </div>
                        <div className='popular-item'>
                            <img src={dagingSemur} alt=''/>
                            <div className='card-title'>Daging Semur</div>
                        </div>
                    </Slider>

                    <div className='to-product-btn'> 
                        <Link to='/product'>Lihat Semua Produk</Link>
                    </div>

                </div> 
            </section>
        </section>
    )
}

export default Home;