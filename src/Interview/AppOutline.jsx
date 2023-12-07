import React from 'react'
import IntersectionObserve from './IntersectionObserve'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {configureStore} from '@reduxjs/toolkit'
import arrayReducer from './services/slice'
import { Provider } from 'react-redux'
import Interface from './Interface'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60*1000
    }
  }
})

 const store = configureStore({
  reducer:{
  array:arrayReducer
  }
 })

function AppOutline() {
  return (
  <Provider store={store}>
  <div>
    <Interface></Interface>
  </div>
  </Provider>
  )
}

export default AppOutline

  {/*} <div>
      <QueryClientProvider client={queryClient}>
        <IntersectionObserve></IntersectionObserve>
        </QueryClientProvider>
  </div>*/}