import React from "react";
import { useStateValue } from "../datalayer/StateProvider";
import Response from "../response";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
function SearchPage() {
  const [{ term = "michael jackson" }, dispatch] = useStateValue();
  // Live API CALL
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div class="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
