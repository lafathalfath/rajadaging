import React, { useState } from 'react';

const FoodList = () => {
  const initialFoodList = [
    {
      id: 1,
      name: 'Nasi Goreng',
      type: 'Main Course',
      image: 'URL_GAMBAR_NASI_GORENG',
      sizes: [
        { size: 'Small', price: 20000 },
        { size: 'Medium', price: 25000 },
        { size: 'Large', price: 30000 },
      ],
    },
    {
      id: 2,
      name: 'Ayam Bakar',
      type: 'Main Course',
      image: 'URL_GAMBAR_AYAM_BAKAR',
      sizes: [
        { size: 'Regular', price: 35000 },
        { size: 'Large', price: 45000 },
      ],
    },
    // ... (item makanan lainnya)
  ];

  const [foodList, setFoodList] = useState(initialFoodList);
  const [sortType, setSortType] = useState('nameAZ');
  const [filterType, setFilterType] = useState('All');
  const [searchKeyword, setSearchKeyword] = useState('');

  const formatCurrency = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  const sortItems = (type) => {
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
      case 'priceHighToLow':
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case 'priceLowToHigh':
        sortedList.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFoodList(sortedList);
  };

  const filterItems = (type) => {
    setFilterType(type);
    if (type === 'All') {
      setFoodList(initialFoodList);
    } else {
      const filteredList = initialFoodList.filter((food) => food.type === type);
      setFoodList(filteredList);
    }
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    const filteredList = initialFoodList.filter((food) =>
      food.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFoodList(filteredList);
  };

  return (
    <div>
      <h2>Daftar Makanan</h2>
      <label>
        Urutkan berdasarkan:
        <select value={sortType} onChange={(e) => sortItems(e.target.value)}>
          <option value="nameAZ">Nama A-Z</option>
          <option value="nameZA">Nama Z-A</option>
          <option value="priceHighToLow">Harga Tertinggi ke Terendah</option>
          <option value="priceLowToHigh">Harga Terendah ke Tertinggi</option>
        </select>
      </label>
      <br />
      <label>
        Filter berdasarkan jenis:
        <select
          value={filterType}
          onChange={(e) => filterItems(e.target.value)}
        >
          <option value="All">Semua</option>
          <option value="Main Course">Main Course</option>
          <option value="Soup">Soup</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <br />
      <input
        type="text"
        placeholder="Cari makanan..."
        value={searchKeyword}
        onChange={handleSearch}
      />
      <ul>
        {foodList.map((food) => (
          <li key={food.id}>
            <img
              src={food.image}
              alt={food.name}
              style={{ width: '100px', height: '100px' }}
            />
            <p>
              {food.name} - {food.type}
            </p>
            <ul>
              {food.sizes.map((sizeItem) => (
                <li key={sizeItem.size}>
                  {sizeItem.size} - {formatCurrency(sizeItem.price)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
