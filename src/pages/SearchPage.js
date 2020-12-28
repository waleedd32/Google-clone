import React from "react";
import { useStateValue } from "../datalayer/StateProvider";
import Response from "../response";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";

function SearchPage() {
  const [{ term = "michael jackson" }, dispatch] = useStateValue();
  // Live API CALL
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div class="searchPage__header">
        <h1>{term} </h1>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
