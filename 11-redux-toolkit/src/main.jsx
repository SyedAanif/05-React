import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

// https://redux-toolkit.js.org/tutorials/quick-start
// 1. Create and Configure Store with Reducers
// 2. Wrap Application with Redux Provider and the Store, so that the State can be accessed in any component
// 3. Create a Slice
// 4. Register the reducer for each slice in the store
// 5. Handle the events
// 6. Fetch the state using selector
// 7. Dispatch the Action using Dispatch hook
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* Wrap the application with the Redux Provider with it's store */}
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
