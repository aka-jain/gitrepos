import { useEffect, useState } from "react";
import { fetchRepo } from "../../operations";
import { Link } from "react-router-dom";

function GitRepoList() {
  const [repoList, setRepoList] = useState(null)
  const [showLoader, setLoaderVisibility] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setLoaderVisibility(true); // show loader
    fetchRepo().then((data) => { // get repo list
      setRepoList(data); // set list
      setLoaderVisibility(false); // hide loader
    }).catch((error) => {
      setLoaderVisibility(false); // hide loader
      setErrorMessage(error); // set error message
    })
  }, [])

  if (errorMessage) {
    return <>Error</>
  }

  return (
    <div className="container">
      <h2>Goddady</h2>
      <div className="text-gray">Official Github repositories of Godaddy</div>
      {
        showLoader ?
          <div className="mt-2">Loading...</div> :
          <ul>
            {
              repoList?.map((repo, index) => {
                return (
                  <li key={'repo-' + repo.id}>
                    <Link to={`/${repo.name}`}>{repo.name}</Link>
                  </li>
                )
              })
            }
          </ul>
      }
    </div>
  );
}

export default GitRepoList;
