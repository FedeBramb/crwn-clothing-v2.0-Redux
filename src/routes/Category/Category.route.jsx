import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
// Recuperiamo la value di category
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard.component.jsx';
import Spinner from '../../components/Spinner/Spinner.component.jsx';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector.js';
import { CategoryContainer, CategoryTitle } from './Category.styles.jsx';

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
      <CategoryTitle className='category-title'>{category.toUpperCase()}</CategoryTitle>
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