import { HomeActionTypes } from "./home.types";

const INITIAL_STATE = {
  userGistData: null,
  allGistData: null,
  filteredData: null,
  fileTypeData: null,
  forkUserListData:null,

  modalIsActive: false,

  currentUser: null,
  isFetching: false,
  errorMessage: null,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_USER_GIST_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case HomeActionTypes.FETCH_USER_GIST_SUCCESS:
      let total = 0;
      const fileTypes = action.payload.reduce((files, item) => {
        Object.values(item.files).forEach((file) => {
          files[file.language] = files[file.language] || 0;
          files[file.language]++;
          total = total + 1;
        });
        files["All"] = total;
        return files;
      }, {});
      const fileTypesMap = new Map(Object.entries(fileTypes));
      let arr = [];
      fileTypesMap.forEach((k, v) => {
        arr.push({ name: v, count: k });
      });
      return {
        ...state,
        isFetching: false,
        filteredData: action.payload,
        userGistData: action.payload,
        fileTypeData: arr,
      };
    case HomeActionTypes.FETCH_USER_GIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case HomeActionTypes.FETCH_ALL_GIST_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case HomeActionTypes.FETCH_ALL_GIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allGistData: action.payload,
      };
    case HomeActionTypes.FETCH_ALL_GIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case HomeActionTypes.FORK_USER_LIST_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case HomeActionTypes.FORK_USER_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        forkUserListData: action.payload,
      };
    case HomeActionTypes.FORK_USER_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case HomeActionTypes.SEARCH_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case HomeActionTypes.MODAL_IS_ACTIVE:
      return {
        ...state,
        modalIsActive: !state.modalIsActive,
        forkUserListData: []
      };
    case HomeActionTypes.FILTER_BY_LANGUAGES:
      let filteredList = [];
      const fileTypesToFilter = state.userGistData.forEach((item) => {
        Object.values(item.files).filter((file) => {
          if (file.language === action.payload) {
            filteredList.push(item);
          } else if (action.payload === "All") {
            filteredList.push(item);
          } else if(file.language === null) {
            filteredList.push(item);
          }
        });
      });
      return {
        ...state,
        filteredData: filteredList,
      };
    default:
      return state;
  }
};

export default homeReducer;
