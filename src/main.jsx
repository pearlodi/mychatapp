import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import store from './store'
import App from './App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './services/reducers/UserReducer'


const store = configureStore({
  reducer: {
    users: UserReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

 