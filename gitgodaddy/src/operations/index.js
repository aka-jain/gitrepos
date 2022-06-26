import { apiEndpoints } from "./apiEndpoints"

export const fetchRepo = () => {
    return fetch(apiEndpoints.fetchRepos).
        then((data) => data.json()).
        catch(err => err)
}

export const fetchRepoDetials = (name) => {
    return fetch(apiEndpoints.getRepoDetails(name)).
        then((data) => data.json()).
        catch(err => err)
}

export const fetchLanguages = (endpoint) => {
    return fetch(endpoint).
        then((data) => data.json()).
        catch(err => err)
}