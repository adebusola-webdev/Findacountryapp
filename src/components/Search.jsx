import React from "react";
import Navbar from "./Navbar";

import { useState, useEffect, useCallback } from "react";
import { Searchfunc } from "./List/Searchfunc";

export const Search = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessageError] = useState(null);
  const baseUrl = "https://restcountries.com/v3.1/name/";

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const getData = useCallback(async (name) => {
    setLoading(true);
    setError(null);
    setMessageError(null);
    try {
      const response = await fetch(`${baseUrl}${name}`);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else if (response.status === 404) {
        const data = await response.json();
        setMessageError(data.message);
        console.log(response.json);
        setData([]);
        setInput("");
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      if (error instanceof SyntaxError) {
        console.log("There was a SyntaxError", error);
      } else {
        console.log("There was an error", error);
      }
    }
  }, []);
  let content = "";
  if (error) {
    content = (
      <div>
        <h1> ERROR WITH SERVER OR NETWORK</h1>
      </div>
    );
  }
  if (message) {
    content = (
      <div>
        <h1>This COUNTRY DOES NOT EXIST</h1>
      </div>
    );
  } else {
    if (loading) {
      content = (
        <div>
          <h1>loading</h1>
        </div>
      );
    } else {
      content = <Searchfunc country={data} />;
    }
  }

  const SearchData = () => {
    setLoading(true);
    getData(input);
  };
  return (
    <>
      <div className="">
        <Navbar />
     <div className="container">
     <input
            className="form-control border-danger"
            type="search"
            value={input}
            onChange={inputHandler}
            placeholder="find a country"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-danger mt-3 px-4"
            onClick={SearchData}
            type="submit"
          >
            Search
          </button>
       
     </div>
          
        <div>{content}</div>
      </div>
    </>
  );
};
