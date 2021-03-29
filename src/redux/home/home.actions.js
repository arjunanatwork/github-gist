import {HomeActionTypes} from "./home.types";
import githubapi from "./../../api/githubapi";

  export const searchUser = (user) => ({
    type: HomeActionTypes.SEARCH_USER,
    payload: user,
  }); 
  
  // User Gist Actions

  export const fetchUserGistStart = () => ({
    type: HomeActionTypes.FETCH_USER_GIST_START
  });
  
  export const fetchUserGistSuccess = (data) => ({
    type: HomeActionTypes.FETCH_USER_GIST_SUCCESS,
    payload: data,
  });
  
  export const fetchUserGistFailure = (errorMessage) => ({
    type: HomeActionTypes.FETCH_USER_GIST_FAILURE,
    payload: errorMessage,
  });

  // All Gist Actions

  export const fetchAllGistStart = () => ({
    type: HomeActionTypes.FETCH_ALL_GIST_START
  });
  
  export const fetchAllGistSuccess = (data) => ({
    type: HomeActionTypes.FETCH_ALL_GIST_SUCCESS,
    payload: data,
  });
  
  export const fetchAllGistFailure = (errorMessage) => ({
    type: HomeActionTypes.FETCH_ALL_GIST_FAILURE,
    payload: errorMessage,
  });

  // Filter by Languages

  export const filterByLanguages = (language) => ({
    type: HomeActionTypes.FILTER_BY_LANGUAGES,
    payload: language
  })

  // Modal
  export const modalIsActive = () => ({
    type: HomeActionTypes.MODAL_IS_ACTIVE,
  })
  
  // Fork User List
  export const fetchForkUserListStart = () => ({
    type: HomeActionTypes.FORK_USER_LIST_START
  });
  
  export const fetchForkUserListSuccess = (data) => ({
    type: HomeActionTypes.FORK_USER_LIST_SUCCESS,
    payload: data,
  });
  
  export const fetchForkUserListFailure = (errorMessage) => ({
    type: HomeActionTypes.FORK_USER_LIST_FAILURE,
    payload: errorMessage,
  });

export const fetchUserGistStartAsync = (pageNo, user) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserGistStart());
      const gistResponse = await githubapi.get(`/users/${user}/gists?page=${pageNo}&per_page=10`);
      const userResponse = await githubapi.get(`/users/${user}`);
      const { data:gistData } = gistResponse;
      const { data:userData } = userResponse;
      dispatch(fetchUserGistSuccess(gistData));
      dispatch(searchUser(userData));
    } catch (e) {
      dispatch(fetchUserGistFailure(e.message));
    }
  };
};

export const fetchForkUserListStartAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchForkUserListStart());
      dispatch(modalIsActive())
      const response = await githubapi.get(`/gists/${id}/forks`);
      const { data } = response;
      dispatch(fetchForkUserListSuccess(data.slice(0, 3)));
    } catch (e) {
      dispatch(fetchForkUserListFailure(e.message));
    }
  };
};