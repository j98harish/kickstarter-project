export const pagesList = (pageNumber = 1, maxLength = 10) => {
    const pages = [];
    let start = Math.max(pageNumber - 5, 1);
    let end = Math.min(pageNumber + 4, maxLength);
    if (pageNumber <= 5) {
      start = 1;
      end = Math.min(10, maxLength);
    }
    if (pageNumber >= maxLength - 4) {
      start = maxLength - 10;
      end = maxLength;
    }
  
    for (let index = start; index <= end; index++) {
      pages.push(index);
    }
  
    return pages;
  };
  