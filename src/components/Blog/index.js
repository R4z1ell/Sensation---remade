import React from 'react';

import { SectionBlog, MainHeading, SubHeading, CardsWrapper } from './style';
import CardBlog from './CardBlog';

const Blog = () => {
  return (
    <SectionBlog>
      <MainHeading>Blog Post</MainHeading>
      <SubHeading>See Our Latest News</SubHeading>
      <CardsWrapper>
        <CardBlog
          bck="images/blog-1.jpg"
          picture="images/picture-1.jpg"
          caption="Prepare the best Grilled Chicken in just few steps"
          title="Mark Stolberg"
          date="15 Febrary 2018"
        />
        <CardBlog
          bck="images/blog-2.jpg"
          picture="images/picture-2.jpg"
          caption="Classic Nouvelle cuisine recipes with our french Chef"
          title="Alicia Smith"
          date="6 May 2018"
        />
        <CardBlog
          bck="images/blog-3.jpg"
          picture="images/picture-3.jpg"
          caption="How to create the best Italian Pizza with the help of our chefs"
          title="Antony Coleman"
          date="21 April 2018"
        />
      </CardsWrapper>
    </SectionBlog>
  );
};

export default Blog;
