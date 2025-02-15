import { useState } from "react";

import classes from "./Search.module.css";
import SearchIcon from "../../icons/navbar-icons/search-icon";

interface SearchProps {
  onFormSubmit: (value: string | null) => void;
}

export default function Search({ onFormSubmit }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onFormSubmit(searchValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form_container}>
        <input
          type="text"
          placeholder="Search location"
          className={classes.form_input}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button className={classes.form_button} onClick={submitHandler}>
          <SearchIcon width="16px" height="16px" color="white" />
        </button>
      </div>
    </form>
  );
}
