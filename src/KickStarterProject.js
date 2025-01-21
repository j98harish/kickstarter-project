import React, { useEffect, useState } from "react";
import { fetchData } from "./services";
import { pagesList } from "./utility";

const KickStarterProject = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    if (data?.length < 1) {
      fetchData((data) => {
        setData(data);
      });
    }
  }, [data]);

  const numberOfPages = parseInt(data?.length / 5) + 1;

  const handlePageChange = (value) => {
    value !== pageNumber && setPageNumber(value);
  };

  const indexOfLastItem = pageNumber * 5;
  const indexOfFirstItem = indexOfLastItem - 5;
  const tableContent = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginationPages = pagesList(pageNumber, numberOfPages);
  return (
    <div className="container">
      <h1>Kickstarter Projects</h1>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.map((project, index) => (
            <tr key={index}>
              <td>{project?.["s.no"]}</td>
              <td>{project?.["percentage.funded"]}</td>
              <td>{project?.["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={handlePageChange?.bind(null, pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        {paginationPages?.map((item) => (
          <span
            key={item}
            className={`paginationPage ${
              item === pageNumber ? "seclected" : ""
            }`}
            onClick={handlePageChange?.bind(null, item)}
          >
            {item}
          </span>
        ))}
        <button
          onClick={handlePageChange?.bind(null, pageNumber + 1)}
          disabled={pageNumber === numberOfPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default KickStarterProject;
