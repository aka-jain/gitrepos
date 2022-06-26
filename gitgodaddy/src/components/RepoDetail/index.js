import { Fragment, useEffect, useState } from "react"
import { fetchLanguages, fetchRepoDetials } from "../../operations"
import { Link, useParams } from "react-router-dom";

export const RepoDetail = () => {
    const [repoDetail, setRepoDetail] = useState(null)
    const [showLoader, setLoaderVisibility] = useState(false)
    const [languages, setLang] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const param = useParams();

    useEffect(() => {
      setLoaderVisibility(true); // show loader`
      fetchRepoDetials(param.name).then((data) => { // get repo details
        setRepoDetail(data); // set detail
        setLoaderVisibility(false); // hide loader
        fetchLanguages(data.languages_url).then((lang) => {
          setLang(lang)
        })
      }).catch((error) => {
        setLoaderVisibility(false); // hide loader
        setErrorMessage(error); // set error message
      })
    }, [])

    const renderFork = (forksCount) => {
      return (
        <div>
          <h5>Forks</h5>
          {forksCount}
        </div>
      )
    }

    const renderOpenIssues = (openIssueCount) => {
      return (
        <div>
          <h5>Open Issues</h5>
          {openIssueCount}
        </div>
      )
    }

    const renderWatcherCount = (watchers_count) => {
      return (
        <div>
          <h5>Watchers</h5>
          {watchers_count}
        </div>
      )
    }
 
    if(errorMessage){
      return <>Error</>
    }
    
    return (
      <div className="card">
        {
          showLoader ? 
            <div className="mt-2">Loading...</div> :
            <Fragment>
              {
                repoDetail ?
                  <Fragment>
                    <h1>
                      <a href={repoDetail.html_url} target="_blank" rel="noreferrer">
                        {repoDetail.name}
                      </a>
                    </h1>
                    <p>
                      {repoDetail.description}
                    </p>
                    <h5>Languages</h5>
                    {
                      Object.keys(languages).map((lang) => {
                        return (
                          <span className="mr-2">{lang}</span>
                        )
                      })
                    }
                    <div className="flex space-around mt-2">
                      {renderFork(repoDetail.forks)}
                      {renderOpenIssues(repoDetail.open_issues_count)}
                      {renderWatcherCount(repoDetail.watchers_count)}
                    </div>
                    <h5 className="mt-2 fs-12">
                      <Link to="/">Back to list</Link>
                    </h5>
                  </Fragment>
                : null
              }
            </Fragment>
        }
      </div>
    );
    
}