import classes from "./Search.module.css";
import SearchIcon from "../../icons/navbar-icons/search-icon";

export default function Search() {
  return (
    <form>
      <div className={classes.form_container}>
        <input
          type="text"
          placeholder="Search location"
          className={classes.form_input}
        />
        <button className={classes.form_button}>
          <SearchIcon width="16px" height="16px" color="white" />
        </button>
      </div>
    </form>
  );
}
