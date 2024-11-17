import React from 'react';
import BasicRating from './components/BasicRating';
import CustomStarCount from './components/CustomStarCount';
import HalfStarRating from './components/HalfStarRating';
import DefaultValueRating from './components/DefaultValueRating';
import ReadOnlyRating from './components/ReadOnlyRating';
import DynamicRating from './components/DynamicRating';
import CustomStylingRating from './components/CustomStylingRating';
import ProductRating from './components/ProductRating';

const App = () => (
  <div>
    <h1>React Rating Stars Examples</h1>
    <BasicRating />
    <CustomStarCount />
    <HalfStarRating />
    <DefaultValueRating />
    <ReadOnlyRating />
    <DynamicRating />
    <CustomStylingRating />
    <ProductRating />
  </div>
);

export default App;
