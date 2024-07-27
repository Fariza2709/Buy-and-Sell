import React from "react";

const Category = ({ imgSrc, altText, descText }) => (
  <div className="categoryItem bg-black rounded-lg mb-4 w-4/5">
    <img className="servicesPicture w-1/6 mx-auto pt-2.5" src={imgSrc} alt={altText} />
    <p className="categoryDescription text-white text-center pb-2.5">{descText}</p>
  </div>
);

export default Category;
