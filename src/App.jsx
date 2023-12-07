import './App.css'
import AppOutline from './Portfolio/AppOutline'

function App()

{
  return(
    <div className='flex justify-center'>
    <AppOutline></AppOutline>
    </div>
  )
}


export default App

/*

import Applayout from './Shopping/Applayout'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddToCart from './Shopping/AddToCart'
import { store } from './Shopping/Applayout'
import { Provider } from 'react-redux'




<div>
<Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path={'/'} element={<Applayout></Applayout>}></Route>
  <Route path={'/addToCart'} element={<AddToCart></AddToCart>}></Route>
</Routes>
</BrowserRouter>
</Provider>
</div>*/
