import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
// Recuperiamo la value di category
import { useParams } from 'react-router-dom';

import ScrollingBar from './ScrollingBar/ScrollingBar.component.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.component.jsx';
import Spinner from '../../components/Spinner/Spinner.component.jsx';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector.js';
import { CategoryContainer, CategoryTitle, CategoryImage } from './Category.styles.jsx';

const categoryImages = {
  sneakers: 'https://i.ibb.co/T8cKv5S/Shoes-cateogery.webp',
  jackets: 'https://i.ibb.co/nMZ5Sv5/Category-jackets.webp',
  hats: 'https://i.ibb.co/GMy0Ldh/Category-hats.webp',
  womens: 'https://i.ibb.co/ZKdrLnF/Category-woman.webp',
  mens: 'https://i.ibb.co/h859mVp/Category-man.webp'
}

// Utilizza useEffect così da renderizzare ogni volta che la category
// o categoriesMap altrimenti renderizza il tutto ogni volta che il
// componente viene renderizzato
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
    console.log('categoriesMap:', categoriesMap);
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

  return (
    <Fragment>
      <ScrollingBar />
      <CategoryImage $categoryImage={categoryImages[category]}>
        <CategoryTitle className='category-title'>{category.toUpperCase()}</CategoryTitle>
      </CategoryImage>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <CategoryContainer>
            {products &&
              products.map((product) => <ProductCard key={product.id} product={product} /> )
            }
          </CategoryContainer>
        )
      }
    </Fragment>
  )
}

export default Category;