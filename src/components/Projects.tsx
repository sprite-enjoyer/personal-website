import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "../styles/projects.module.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

interface GetProjectsResult {
  data: Repository[];
  error?: string;
}

export interface ProjectsProps {
  data: any,
  setData: Dispatch<SetStateAction<any>>
}

async function getProjects(username: string): Promise<GetProjectsResult> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json() as Repository[];
    return { data: repos };
  } catch (error: any) {
    return { data: [], error: error.toString() }
  }
}

const Projects = () => {
  const [data, setData] = useState<Repository[]>([]);

  useEffect(() => {
    const res = getProjects('sprite-enjoyer')
      .then(result => {
        if (result.error) { console.error(result.error); return; }
        setData(result.data);
      })
      .catch(error => console.error(error));
  }, []);

  const modifiedData = data.map(({ name, description, html_url }) => ({ name, description, html_url }));

  return (
    <div className={styles["main"]} >
      <div className={styles["main__list"]}>
        {modifiedData.map(repo =>
          <div key={repo.name} className={styles["main__list__item"]} >
            <a className={styles["main__list__item__link"]} href={repo.html_url} target="_blank" >
              {repo.name}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};


export default Projects;

