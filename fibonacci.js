const fibonacci = (upto) => {

  if (isNaN(upto)) {
    return("Not a Number!");
  }
  else {
    const initialValues = [0, 1];

    if (upto <= 0) {
      return([]);
    }
    else if (Number(upto) === 1)
    {
      return (initialValues[0]);
    }
    else if (Number(upto) === 2) {
      return(initialValues);
    } 
    else {
      return('Not implemented!');
    }
  }
}

module.exports = fibonacci;