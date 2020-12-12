import React, { useState } from "react";
import "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("You just hit the search button -->", input);
    // here we can do something with the input... then come back and fix

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />{" "}
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
