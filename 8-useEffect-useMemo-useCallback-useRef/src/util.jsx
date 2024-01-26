export const intialItems = new Array(29_999_999).fill(0).map((_, i) => {
   return {
      id: i,
      isSelected: i === 29_999_998,
   };
});

// const selectedItem = items.find((item) => item.isSelected);: This line searches for the first item in the items array where the isSelected property is true and assigns it to the variable selectedItem.

// export const initialItems = new Array(29_999_999).fill(0).map((_, i) => { ... });: This line creates an
// array named initialItems with 29,999,999 elements. Each element is an object with two properties: id and
// isSelected. The id property is assigned a unique value from 0 to 29,999,998, and the isSelected property
// is set to true only for the last element in the array (i.e., when i is equal to 29,999,998).
