const API_END_POINT =
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

export const fetchData = (callback = () => {}) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_END_POINT, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    } else if (xhr.readyState === 4) {
      callback([]);
    }
  };
  xhr.send();
};
