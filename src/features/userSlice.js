import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { baseURL } from "../utility/baseURL";
import axios from "axios"

let userData =JSON.parse(localStorage.getItem("login"))
const _id= userData._id 

export const signUpUserAsync = createAsyncThunk(
    "user/signup",
    async ({ name, username, email, password }) => {
        try {
            const res = await axios.post(`${baseURL}/users/register`, {
            user: {
              name,
              username,
              email,
              password,
              bio: "Hi there! I'm using Loop",
              profileURL:
              "https://res.cloudinary.com/xdev200/image/upload/v1625360304/userprofile_xrldwm.png",
              followingList: [],
              followersList: [],
            },
          });
          if (res.data.success) {
            console.log(res.data)
            localStorage.setItem(
              "login",
              JSON.stringify({ token: res.data.user.token, isUserLoggedIn: true,_id:res.data.user._id })
            );
            axios.defaults.headers.common["Authorization"] = res.data.user.token;
            
          }
          return res.data;
        } catch (error) {
          console.log("ERROR MESSAGE: ", error.message);
          return Promise.reject(error.message);
        }
      }
)

export const signInUserAsync = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const res = await axios.post(`${baseURL}/users/login`, { email, password });
      if (res.data.success) {
        localStorage.setItem(
          "login",
          JSON.stringify({ token: res.data.user.token, isUserLoggedIn: true,_id:res.data.user._id })
        );
        axios.defaults.headers.common["Authorization"] = res.data.user.token;
      }
      console.log(res.data)
      return res.data;
    } catch (error) {
      console.log("ERROR MESSAGE: ", error.message);
      return Promise.reject(error.message);
    }
  }
);

export const updateUserImageAsync = createAsyncThunk(
  "user/updateProfileImage",
  async ({ profileURL }) => {
    try {
      const res = await axios.post(`${baseURL}/users/updateImage`, { profileURL, _id });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateUserBioAsync = createAsyncThunk(
  "user/updateProfileBio",
  async ({ bio}) => {
    try {
      const res = await axios.post(`${baseURL}/users/updateBio`, { bio, _id});
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const userSlice = createSlice({
    name:"user",
    initialState: {
        data: {
          _id: null,
          name: null,
          email: null,
          username: null,
          bio: null,
          profileURL: null,
          followingList: [],
          followersList: [],
          token: null,
        },
        isUserLoggedIn: false,
        userLoading: true,
        isError: false,
        errorMessage: "",
        initialLoading: true,
    },
    reducers:{
        setInitialLoadingFalse(state) {
            state.initialLoading = false;
          },
    },
    extraReducers:{
        [signUpUserAsync.pending]: (state, action) => {
            state.userLoading = true;
          },
      
          [signUpUserAsync.fulfilled]: (state, action) => {
            state.userLoading = false;
            if (action.payload.success) {
              state.isUserLoggedIn = true;
              state.data = action.payload.user;
              state.isError = false;
              state.errorMessage = "";
            }
          },
          [signUpUserAsync.rejected]: (state, action) => {
            state.userLoading = false;
            state.isError = true;
            state.errorMessage = action.error.message;
          },

       
        
    }
})

export default userSlice.reducer;

export const getLoginStatus = createSelector(
    (state) => state.user.isUserLoggedIn,
    (value) => value
  );
  
  export const getUserId = createSelector(
    (state) => state.user.data._id,
    (value) => value
  );
  
  export const getUserToken = createSelector(
    (state) => state.user.data.token,
    (value) => value
  );
  
  export const getUserData = createSelector(
    (state) => state.user.data,
    (value) => value
  );
  
  export const getInitialLoading = createSelector(
    (state) => state.user.initialLoading,
    (value) => value
  );
  
  export const getError = createSelector(
    (state) => ({
      isError: state.user.isError,
      errorMessage: state.user.errorMessage,
    }),
    (value) => value
  );