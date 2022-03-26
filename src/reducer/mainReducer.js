import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    defaultVideos: [],
    fetchingStatus: 'default',
    searchTerm: 'New York',
    singleSelectedVideo: {},
    history: [],
    timeViewVideos: []
}


const videosSlice = createSlice({
    name: 'videos/fetching',
    initialState,
    reducers: {
        fetchingVideos(state){state.fetchingStatus = 'loading'},
        fetchedVideos(state, action){
            state.defaultVideos = action.payload
            state.fetchingStatus = 'default'
        },
        fetchingError(state) {
            state.fetchingStatus = 'error'
        },
        selectedVideo(state, action){
            state.singleSelectedVideo = action.payload
            state.history.push(action.payload)
        },
        searchVideos(state, action) {
            state.searchTerm = action.payload
        },
        timeViewVideo(state, action){
            const index = state.timeViewVideos.findIndex(item => item.id.videoId === action.payload.id.videoId)
            if(index < 0){
                state.timeViewVideos.push(action.payload)
            }
        }
    }
})


export const {timeViewVideo, searchVideos,  fetchedVideos,  fetchingVideos, fetchingStatus, searchTerm, selectedVideo } = videosSlice.actions
const videosReducer = videosSlice.reducer
export default videosReducer 