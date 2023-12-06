import { useState } from 'react';
import './Product.css';

import p01 from '../assets/img/Foto Produk/1. shortplate us yoshinoya 1kg.jpg';
import p02 from '../assets/img/Foto Produk/2. daging rendang utuh 1kg.jpg';
import p03 from '../assets/img/Foto Produk/3. daging iga sapi super   short ribs 1 kg.jpg';
import p04 from '../assets/img/Foto Produk/4. daging slice low fat sukiyaki yakiniku teriyaki 1 kg.jpg';
import p05 from '../assets/img/Foto Produk/5. minced beef   daging giling halus premium 1 kg.jpg';
import p06 from '../assets/img/Foto Produk/6. paru sapi mantul 1 kg.jpg';
import p07 from '../assets/img/Foto Produk/7. daging has dalam tenderloin potong dadu 1kg.jpg';
import p08 from '../assets/img/Foto Produk/8. daging slide shortplace us   shabu shabu   shortplate us yoshinoya 500gr.jpg';
import p09 from '../assets/img/Foto Produk/9. boneless dada   fillet dada ayam 1 kg.jpg';
import p10 from '../assets/img/Foto Produk/10. daging rendang potong 1 kg.jpg';
import p11 from '../assets/img/Foto Produk/11. daging iga sapi super   short ribs 500 gr.jpg';
import p12 from '../assets/img/Foto Produk/12. iga jando   iga muda   tulangan muda 1 kg.jpg';
import p13 from '../assets/img/Foto Produk/13. daging slice low fat sukiyaki yakiniku teriyaki 500 gr.jpg';
import p14 from '../assets/img/Foto Produk/14. daging semur reguler 1kg.jpg';
import p15 from '../assets/img/Foto Produk/15. beef slice   daging slice   all you can eat 500 gr.jpg';
import p16 from '../assets/img/Foto Produk/16. minced beef   daging giling halus premium 500 gr.jpg';
import p17 from '../assets/img/Foto Produk/17. ikan dory fillet 1kg.jpg';
import p18 from '../assets/img/Foto Produk/18. iga spare ribs   daging sapi tulang iga   iga bakar   iga penyet 1kg.jpg';
import p19 from '../assets/img/Foto Produk/19. daging rawon sapi   daging sapi sup   tetelan sapi 1kg.jpg';
import p20 from '../assets/img/Foto Produk/20. saikoro beef wagyu cube 1 kg.jpg';
import p21 from '../assets/img/Foto Produk/21. slice paru sapi 1 kg.jpg';
import p22 from '../assets/img/Foto Produk/22. daging slice melique wagyu   beef sapi slice meltique 500 gr.jpg';
import p23 from '../assets/img/Foto Produk/23. daging slice shortplate us   shabu shabu   shortplate us yoshinoya 250gr.jpg';
import p24 from '../assets/img/Foto Produk/24. kikil sapi   tunjang sapi   tunjang pandang 1kg.jpg';
import p25 from '../assets/img/Foto Produk/25. sllice dada ayam   ayam fillet dada   bld 1 kg.jpg';
import p26 from '../assets/img/Foto Produk/26. daging giling dada ayam premium 500gr.jpg';
import p27 from '../assets/img/Foto Produk/27. daging slice shortplace aus   yoshinoya   ricebowl   all you can eat 500 gr.jpg';
// import p28 from '../assets/img/Foto Produk/28. iga jando iga muda tulangan muda.jpg';
import p29 from '../assets/img/Foto Produk/29. hati sapi 1kg.jpg';
import p30 from '../assets/img/Foto Produk/30. codea steambot 300 gr.jpg';
import p31 from '../assets/img/Foto Produk/31. daging slice low fat sukiyaki yakiniku 250 gr.jpg';
import p32 from '../assets/img/Foto Produk/32. tulangan sop sapi 1kg.jpg';
import p33 from '../assets/img/Foto Produk/33. kentang goreng french fries belfoods 500gr.jpg';
import p34 from '../assets/img/Foto Produk/34. daging steak sirloin reguler 1kg.jpg';
import p35 from '../assets/img/Foto Produk/35. daging steak rib eye   rib eye steak import 200gr.jpg';
import p36 from '../assets/img/Foto Produk/36. sosis ayam belfoods 375 gr.jpg';
import p37 from '../assets/img/Foto Produk/37. kentang goreng belfoods shoestring 200 gr.jpg';
import p38 from '../assets/img/Foto Produk/38. nuggets belfoods 170gr.jpg';
import p39 from '../assets/img/Foto Produk/39. daging has dalam   tenderloin whole 1kg.jpg';
import p40 from '../assets/img/Foto Produk/40. tenderloin steak   daging has dalam 200gr.jpg';
import p41 from '../assets/img/Foto Produk/41. ayam broiler karkas ayam potong per ekor 1kg.jpg';
import p42 from '../assets/img/Foto Produk/42. boneless paha   fillet paha ayam 1kg.jpg';
import p43 from '../assets/img/Foto Produk/43. daging has dalam   tenderloin (center cut) 1kg.jpg'
import p44 from '../assets/img/Foto Produk/44. daging steak sirloin (has luar) aussie grade a 500 gr.jpg';
// import p45 from '../assets/img/Foto Produk/27. kentang goreng belfoods shoestring 200 gr.jpg';

const Product=()=>{

    const formatCurrency = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(price);
    };

    const initialFoodList = [
        {
            id: 1,
            image: p01,
            name: 'Daging Slice / Shabu-Shabu / Short Plate US Yoshinoya',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 128999}
            ]
        },
        {
            id: 2,
            image: p02,
            name: 'Daging Rendang Utuh',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 115000}
            ]
        },
        {
            id: 3,
            image: p03,
            name: 'Daging Iga Sapi Super / Short Ribs',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 110999}
            ] 
        },
        {
            id: 4,
            image: p04,
            name: 'Daging Slice Low Fat / Sukiyaki / Yakiniku / Teriyaki',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 106499}
            ] 
        },
        {
            id: 5,
            image: p05,
            name: 'Minced Beef / Daging GIling Halus Premium',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 94999}
            ] 
        },
        {
            id: 6,
            image: p06,
            name: 'Paru Sapi Mantul',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 73999}
            ] 
        },
        {
            id: 7,
            image: p07,
            name: 'Daging Has Dalam / Tenderloin Potong Dadu',
            type: 'Daging',
            // netto: '1 kg / 500 gr',
            // price: '133.999 / Rp. 67.499'
            sizes: [
                {netto: '1 kg', price: 133999},
                {netto: '500 gr', price: 67499}
            ]
        },
        {
            id: 8,
            image: p08,
            name: 'Daging Slice Shortplate US / Shabu - Shabu / Shortplate US',
            type: 'Daging',
            sizes: [
                {netto: '500 gr', price: 64999}
            ] 
        },
        {
            id: 9,
            image: p09,
            name: 'Boneless Dada / Fillet Dada Ayam',
            type: 'Ayam',
            sizes: [
                {netto: '1 kg', price: 60000}
            ] 
        },
        {
            id: 10,
            image: p10,
            name: 'Daging Rendang Potong',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 112499},
                {netto: '500 gr', price: 56999}
            ]
        },
        {
            id: 11,
            image: p11,
            name: 'Daging Iga Sapi / Short Ribs',
            type: 'Daging',
            sizes:[
                {netto: '500 gr', price: 56499}
            ] 
        },
        {
            id: 12,
            image: p12,
            name: 'Iga Jando / Iga Muda / Tulang Muda',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 53999},
                {netto: '500 gr', price: 27999},
            ] 
        },
        {
            id: 13,
            image: p13,
            name: 'Sukiyaki / Teriyaki / Yakiniku',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 106499},
                {netto: '500 gr', price: 52499},
                {netto: '250 gr', price: 26999}
            ] 
        },
        {
            id: 14,
            image: p14,
            name: 'Daging Semur',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 103499},
                {netto: '500 gr', price: 52499},
            ] 
        },
        {
            id: 15,
            image: p15,
            name: 'Beef Slice / Daging Slice / All You Can Eat',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 94999},
                {netto: '500 gr', price: 48499}
            ] 
        },
        {
            id: 16,
            image: p16,
            name: 'Daging Giling Halus Premium',
            type: 'Daging',
            sizes: [
                {netto: '500 gr', price: 47999}
            ] 
        },
        {
            id: 17,
            image: p17,
            name: 'Ikan Dory Fillet',
            type: 'Ikan',
            sizes: [
                {netto: '1 kg', price: 45000}
            ] 
        },
        {
            id: 18,
            image: p18,
            name: 'Iga Spare Ribs /Daging Sapi Tulang Iga / iga Bakar / Iga penyet',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 82999},
                {netto: '500 gr', price: 42999}
            ] 
        },
        {
            id: 19,
            image: p19,
            name: 'Daging Rawon Sapi / Daging Sapi Sup / Tetelan Sapi',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 83499},
                {netto: '500 gr', price: 42499}
            ] 
        },
        {
            id: 20,
            image: p20,
            name: 'Saikoro Beef Wagyu Cube',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 145000},
                {netto: '500 gr', price: 75000},
                {netto: '250 gr', price: 40999},
            ] 
        },
        {
            id: 21,
            image: p21,
            name: 'Paru Sapi Slice',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 76499},
                {netto: '500 gr', price: 39499}
            ]
        },
        // // {
        // //     id: 22,
        // //     image: p22,
        // //     name: 'Iga Reguler',
        // //     type: 'Daging',
        // //     netto: '1 kg / 500 gr',
        // //     price: 'N/A'
        // // },
        {
            id: 22,
            image: p22,
            name: 'Daging Slice Melique Wagyu / Beef Sapi Slice Meltique',
            type: 'Daging',
            sizes: [
                {netto: '500 gr', price: 69999},
                {netto: '250 gr', price: 35499},
            ] 
        },
        {
            id: 23,
            image: p23,
            name: 'Daging Slice Shortolate US / Shabu2 / Shortplace US Yoshinoya',
            type: 'Daging',
            sizes: [
                {netto: '250 gr', price: 32750}
            ]   
        },
        {
            id: 24,
            image: p24,
            name: 'Kikil Kaki Sapi/Tunjang Sapi/Tunjang Pandang',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 60999},
                {netto: '500 gr', price: 31499}
            ]
        },
        {
            id: 25,
            image: p25,
            name: 'Slice Dada Ayam / Ayam Fillet Dada / BLD',
            type: 'Ayam',
            sizes: [
                {netto: '1 kg', price: 61000},
                {netto: '500 gr', price: 31499}
            ]
        },
        {
            id: 26,
            image: p26,
            name: 'Daging Giling Dada Ayam Premium',
            type: 'Daging',
            sizes: [
                {netto: '500 gr', price: 31499}
            ] 
        },
        {
            id: 27,
            image: p27,
            name: 'Shortplate Aus / Yoshinoya / Ricebowl & All You Can Eat',
            type: 'Daging',
            sizes: [
                {netto: '500 gr', price: 59499},
                {netto: '250 gr', price: 30499}
            ]
        },
        {
            id: 28,
            image: p29,
            name: 'Hati Sapi',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 52499},
                {netto: '500 gr', price: 27499}
            ] 
        },
        {
            id: 29,
            image: p30,
            name: 'Code Steambot',
            type: 'Frozen Food',
            sizes: [
                {netto: '300 gr', price: 27499}
            ] 
        },
        {
            id: 30,
            image: p31,
            name: 'Daging Slice Low Fat / Sukiyaki / Yakiniku',
            type: 'Daging',
            sizes: [
                {netto: '250 gr', price: 26999}
            ] 
        },
        {
            id: 31,
            image: p32,
            name: 'Tulang Sop Sapi',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 48499},
                {netto: '500 gr', price: 25499}
            ] 
        },
        {
            id: 32,
            image: p33,
            name: 'Kentang Goreng / French Fries Belfoods',
            type: 'Frozen Food',
            sizes: [
                {netto: '500 gr', price: 25000}
            ] 
        },
        {
            id: 33,
            image: p34,
            name: 'Daging Steak Sirloin Reguler',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 119999},
                {netto: '500 gr', price: 60499},
                {netto: '200 gr', price: 24999}
            ]
        },
        {
            id: 34,
            image: p35,
            name: 'Daging Steak Rib Eye Steak Import',
            type: 'Daging',
            sizes: [
                {netto: '180 - 200 gr', price: 22999}
            ]   
        },
        {
            id: 35,
            image: p36,
            name: 'Sosis Ayam Belfoods',
            type: 'Frozen Food',
            sizes: [
                {netto: '375 gr', price: 17000}
            ] 
        },
        {
            id: 36,
            image: p37,
            name: 'Kentang Goreng Belfoods Shoestring',
            type: 'Frozen Food',
            sizes: [
                {netto: '200 gr', price: 12500}
            ] 
        },
        {
            id: 37,
            image: p38,
            name: 'Nugget Belfoods',
            type: 'Frozen Food',
            sizes: [
                {netto: '170 gr', price: 11500}
            ] 
        },
        {
            id: 38,
            image: p43,
            name: 'Daging Has Dalam / Tenderloin (Center Cut)',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 151999},
                {netto: '500 gr', price: 76999}
            ] 
        },
        {
            id: 39,
            image: p39,
            name: 'Daging Has Dalam / Tenderloin (Whole)',
            type: 'Daging',
            sizes: [
                {netto: '1 kg', price: 144000},
                {netto: '500 gr', price: 72499}
            ] 
        },
        {
            id: 40,
            image: p42,
            name: 'Boneless Paha / Fillet Paha Ayam',
            type: 'Ayam',
            sizes: [
                {netto: '1 kg', price: 52000}
            ] 
        },
        {
            id: 41,
            image: p41,
            name: 'Ayam Broiler/ Karkas / Ayam Potong per Ekor',
            type: 'Ayam',
            sizes: [
                {netto: '0,8 - 1 kg', price: 39455}
            ] 
        },
        {
            id: 42,
            image: p40,
            name: 'Tenderloin Steak / Daging Has Dalam',
            type: 'Daging',
            sizes: [
                {netto: '180 - 200 gr', price: 30999}
            ] 
        },
        {
            id: 43,
            image: p44,
            name: 'Daging Steak / Sirloin (Has Luar) Aussie Grade A',
            type: 'Daging',
            sizes: [
                {netto: '500 gr', price: 72499},
                {netto: '200 gr', price: 29999}
            ] 
        },
    ]
    
    const [foodList, setFoodList] = useState(initialFoodList);
    const [sortType, setSortType] = useState('name');
    const [filterType, setFilterType] = useState('All');
    const [searchKeyword, setSearchKeyword] = useState('');

    const sortItems = (type)=>{
        setSortType(type); 
        let sortedList = [...foodList];

        switch (type) {
            case 'nameAZ':
                sortedList.sort((a, b) =>
                    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                );
                break;

            case 'nameZA':
                sortedList.sort((a, b) =>
                    b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                );
                break;

            // case 'priceHighToLow':
            //     sortedList.sort((a,b) => b.price - a.price);
            //     break;

            // case 'priceLowToHigh':
            //     sortedList.sort((a,b) => a.price - b.price);
            //     break;

            case 'priceLowToHigh':
                sortedList.forEach((food)=>{
                    food.sizes.sort((a,b) => a.price - b.price)
                });
                sortedList.sort((a,b) => a.sizes[0].price - b.sizes[0].price)
                break;
            
            case 'priceHighToLow':
                sortedList.forEach((food)=>{
                    food.sizes.sort((a,b) => b.price - a.price)
                });
                sortedList.sort((a,b) => b.sizes[0].price - a.sizes[0].price)
                break;

            default:
                break;
        }

        setFoodList(sortedList);
    }

    const filterItems = (type)=>{
        setFilterType(type);
        if (type==='All'){
            setFoodList(initialFoodList);
        } else{
            const filteredList = initialFoodList.filter((food) => food.type === type);
            setFoodList(filteredList);
        }
    }

    const handleSearch = (e)=>{
        setSearchKeyword(e.target.value);
        const filteredList = initialFoodList.filter((food) => food.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFoodList(filteredList);
    }

    return(
        <section className='product-page'>
            <h3>Home{`>`}Produk</h3>
            <h2>Produk</h2>

            <div className='search-sort-filter'>
                <input type='text' placeholder='Cari produk ...' value={searchKeyword} onChange={handleSearch} className='search-input-box'/>

                <label className='sort'>
                    Urut Berdasarkan:&ensp;
                    <select value={sortType} onChange={(e) => sortItems(e.target.value)} placeholder='Urutkan'>
                        <option value='nameAZ' defaultValue={true}>A - Z</option>
                        <option value='nameZA'>Z - A</option>
                        <option value='priceLowToHigh'>Harga Terendah - Harga Tertinggi</option>
                        <option value='priceHighToLow'>Harga Tertinggi - Harga Terendah</option>
                    </select>
                </label>

                <label className='filter'>
                    Filter:&ensp;
                    <select value={filterType} onChange={(e) => filterItems(e.target.value)}>
                        <option value='All'>Semua</option>
                        <option value='Daging'>Daging</option>
                        <option value='Ikan'>Ikan</option>
                        <option value='Ayam'>Ayam</option>
                        <option value='Frozen Food'>Frozen Food</option>
                        {/* sisanya tinggal tambahin */}
                    </select>
                </label>
            </div><br/>

            <ul className='food-list'>
                {foodList.map((food) => (
                    <li key={food.id} className='food-product-item'>
                        <img src={food.image} alt={food.name}/>
                        <div className='inner'>
                            <div className='product-name'> 
                                {food.name}
                            </div>
                            <div className='prices-list'>
                                {food.sizes.map((sizeItem)=>(
                                    <div className='netto' key={sizeItem.netto}>
                                        {/* <div>
                                            {sizeItem.netto}
                                        </div>

                                        <div>
                                            {formatCurrency(sizeItem.price)}
                                        </div>  */}

                                        {sizeItem.netto} - {formatCurrency(sizeItem.price)}
                                    </div> 
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Product;