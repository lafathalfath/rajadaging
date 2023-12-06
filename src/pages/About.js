import './About.css';
import closebtn from '../assets/img/icons/close icon.png';
import logo from '../assets/img/logo/logo raja daging.png';
import location from '../assets/img/icons/location icon.png';
import instagram from '../assets/img/icons/instagram icon.png';
import whatsapp from '../assets/img/icons/whatsapp icon.png';
import tokopedia from '../assets/img/icons/tokopedia icon.png';
import shopee from '../assets/img/icons/shopee icon.png';
import maps from '../assets/img/icons/gmaps icon.png';

const About=({closePopUp})=>{
    return(
        <div className='About'>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}> 
                <button onClick={closePopUp} style={{
                    background: 'none',
                    padding: 0,
                    margin: 0,
                    border: 'none',
                    cursor: 'pointer',
                }}><img src={closebtn} alt='' style={{
                    width: '30px'
                }}/></button>
            </div>

            <div className='about-inner'> 
                <img src={logo} alt=''/>

                <p>
                Kami adalah supplier daging <span>tangan pertama</span>, produksi <span>setiap hari</span>nya. Berbagai produk <span>daging sapi</span>, <span>ayam</span>, <span>seafood</span>, <span>frozen food</span>, dan lainnya tersedia di toko kami. Siap memenuhi kebutuhan masyarakan dengan <span>sepenuh hati</span>.<br/>
                -----------------------<br/>
                Kami <span>melayani pemesanan</span> untuk:<br/>
                Resto, Rumah Sakit, Rumah Makan, Hotel, Catering<br/>
                -----------------------<br/>
                Atau gabung menjadi <span>reseller</span> kami
                </p><br/>

                <div className='location'>
                    <img src={location} alt=''/>
                    Jl. Jeruk 11 No. 252, Kranji, Bekasi Barat (Premunas 1)
                </div><br/>

                <div className='social-media'>
                    <a href='https://www.instagram.com/rajadaging.id/?hl=en' target='_blank' rel="noreferrer"><img src={instagram} alt=''/></a>
                    <a href='https://wa.me/6287880056715' target='_blank' rel="noreferrer"><img src={whatsapp} alt=''/></a>
                    <a href='https://www.tokopedia.com/tokorajadaging' target='_blank' rel="noreferrer"><img src={tokopedia} alt=''/></a>
                    <a href='https://shopee.co.id/toko.rajadaging' target='_blank' rel="noreferrer"><img src={shopee} alt=''/></a>
                    <a href='https://goo.gl/maps/W4ScWcKWyrfD5F476' target='_blank' rel="noreferrer"><img src={maps} alt=''/></a>
                </div>
            </div>
        </div>
    )
}

export default About;