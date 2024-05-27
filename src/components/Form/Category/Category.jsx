import React, { useState } from "react";
import PropTypes from "prop-types";
import { CategoryDiv, Wrap, SelectBody, Element } from "./Category.styled";
import icons from "../../../assets/icons.svg";

// Custom selector
export default function CategorySelect({
  elementCategory,
  setElementCategory,
  categoryArray,
}) {
  const [selectCategory, setSelectCategory] = useState(false);

  const onSelect = () => {
    setSelectCategory(!selectCategory);
  };

  const getElementCategory = (event) => {
    setSelectCategory(!selectCategory);
    setElementCategory(event.target.innerText);
  };

  return (
    <CategoryDiv>
      <Wrap onClick={onSelect}>
        <span>{elementCategory}</span>
        <svg width="11px" height="4px">
          <use href={`${icons}#arrow-down`}></use>
        </svg>
      </Wrap>
      {selectCategory && (
        <SelectBody>
          {categoryArray.map((element) => (
            <Element key={element} onClick={getElementCategory}>
              {element}
            </Element>
          ))}
        </SelectBody>
      )}
    </CategoryDiv>
  );
}

CategorySelect.propTypes = {
  elementCategory: PropTypes.string.isRequired,
  setElementCategory: PropTypes.func.isRequired,
  categoryArray: PropTypes.array.isRequired,
};
