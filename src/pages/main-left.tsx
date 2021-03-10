import React, { useState } from "react";
import "../styles/theme.css";
import "../styles/main-left.css";

const getRepos = async () => {
  const headers = {
    Accept: "application/vnd.github.nightshade-preview+json",
    Authorization: `Token ${process.env.REACT_APP_GITHUB_PAT}`,
  };
  const url = "https://api.github.com/users/jungsikyeo/repos";
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  return await response.json();
};

export const MainLeft = () => {
  const [repos, setRepos] = useState([]);
  getRepos().then(async (data) => await setRepos(data));

  return (
    <div className="main-left h-full absolute whitespace-normal">
      <ul>
        {repos.map((repo) => (
          <li key={repo["id"]}>{repo["name"]}</li>
        ))}
      </ul>
    </div>
  );
};
