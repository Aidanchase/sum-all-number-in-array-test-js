function sumItems(array) {
  let counter = 0;
  // Sum all the numbers in the array
  array.forEach((item) => {
    if (Array.isArray(item)){
     counter += sumItems(item)
    } else {
    counter += item;
    }
    })
    return counter;
  }


module.exports = sumItems;