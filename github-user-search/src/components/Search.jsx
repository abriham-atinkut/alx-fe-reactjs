import { useState, useEffect } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [minRepos, setMinRepos] = useState("");
  const [location, setLocation] = useState("");
  async function fetchUser() {
    try {
      console.log(search, location, minRepos);
      const data = await fetchUserData(search, location, minRepos);
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
    setMinRepos("");
    setLocation("");
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
        <input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
  
      {!user ? (
        <p>Loading...</p>
      ) : user.length === 0 ? (
        <p> we cant find the user</p>
      ) : error ? (
        <p>Looks like we cant find the user</p>
      ) : user ? (
        <div>
          {user.map((user) => (
            <div key={user.id}>
              <h2>{user.login}</h2>
              <p>Location: {user.location}</p>
              <p>Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank">
                View Profile
              </a>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Search;
