import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [showGoodsBy, setShowGoodsBy] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll().then(goods => setShowGoodsBy(goods));
  };

  const handleFirst5Goods = () => {
    get5First().then(goods => setShowGoodsBy(goods));
  };

  const handleRedGoods = () => {
    getRedGoods().then(goods => setShowGoodsBy(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={showGoodsBy} />
    </div>
  );
};
