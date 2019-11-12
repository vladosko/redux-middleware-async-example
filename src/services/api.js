import { filterTypes } from "../constants/constants";

function apiFactory() {

  const getSubreddits = filterType => {
    if (filterTypes[filterType]) {
      return fetch(`https://www.reddit.com/${filterType}.json`)
        .then(res => res.json())
        .then(res => res.data.children.map(child => child.data));
    }
  };

  return {
    getSubreddits
  };
}

const apiService = apiFactory();
Object.freeze(apiService);

export default apiService;
