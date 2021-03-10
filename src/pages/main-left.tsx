import React, { useEffect, useState } from "react";
import "../styles/theme.css";
import "../styles/main-left.css";

export const MainLeft = (props:any) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const headers = {
      Accept: "application/vnd.github.nightshade-preview+json",
      Authorization: `Token ${process.env.REACT_APP_GITHUB_PAT}`,
    };
    const url = "https://api.github.com/users/jungsikyeo/repos";
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="main-left h-full absolute whitespace-normal">
      {props.menu?.menuGithub && (
        <ul>
          {repos.map((repo) => (
            <li key={repo["id"]}>{repo["name"]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
