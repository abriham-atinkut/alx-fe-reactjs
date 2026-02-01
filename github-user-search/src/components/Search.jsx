import { useState, useEffect } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  async function fetchUser() {
    try {
      const data = await fetchUserData(search);
      setUser(data);
      console.log(data);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  }
  useEffect(() => {
    if (user) {
      setError(null);
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!event.trim()) return;
    fetchUser();
    setSearch("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {/* Display the resulte */}
      {!user ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Looks like we cant find the user</p>
      ) : user ? (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.public_repos}</h2>
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank">
            {user.html_url}
          </a>
          <br />
          <img src={user.avatar_url} alt="" />
        </div>
      ) : null}
    </>
  );
};

export default Search;
