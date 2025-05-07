

import { Route,  Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Stores/Pages/LandingPage'
import MobilePage from './Stores/Pages/MobilePage'
import LaptopPage from './Stores/Pages/LaptopPage'
import WatchPage from './Stores/Pages/WatchPage'
import MensPage from './Stores/Pages/MensPage'
import WomensPage from './Stores/Pages/WomensPage'
import AcPage from './Stores/Pages/AcPage'
import TvPage from './Stores/Pages/TvPage'
import Furniture from './Stores/Pages/Furniture'
import FridgePage from './Stores/Pages/FridgePage'
import KitchenPage from './Stores/Pages/KitchenPage'
import MobileSingle from './Stores/Single/MobileSingle'
import Laptop from './Stores/Single/Laptop'
import WatchSingle from './Stores/Single/WatchSingle'
import MensSingle from './Stores/Single/MensSingle'
import WomenSingle from './Stores/Single/WomenSingle'
import AcSingle from './Stores/Single/AcSingle'
import TvSingle from './Stores/Single/TvSingle'
import FurnitureSingle from './Stores/Single/FurnitureSingle'
import KitchenSingle from './Stores/Single/KitchenSingle'
import Fridge from './Stores/Single/Fridge'
import CartUsage from './Stores/UseContext/CartUsage'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={  <LandingPage />}/>
      <Route path='/mobile' element={<MobilePage />}/>
      <Route path='/laptop' element={<LaptopPage />}/>
      <Route path='/watch' element={<WatchPage />}/>
      <Route path='/menfashion' element={<MensPage />}/>
      <Route path='/womenfashion' element={<WomensPage />}/>
      <Route path='/ac' element={<AcPage />}/>
      <Route path='/tv' element={<TvPage />}/>
      <Route path='/furniture' element={<Furniture />}/>
      <Route path='/fridge' element={<FridgePage />}/>
      <Route path='/kitchen' element={<KitchenPage />}/>

     {/* Dynamic Routing */}
     <Route path='/mobiles/:id' element={<MobileSingle />}/>
     <Route path='/laptop/:id' element={<Laptop />}/>
     <Route path='/watches/:id' element={<WatchSingle />}/>
     <Route path='/mens/:id' element={<MensSingle />}/>
     <Route path='/womans/:id' element={<WomenSingle />} />
     <Route path='/ac/:id' element={<AcSingle />} />
     <Route path='/tv/:id' element={<TvSingle />} />
     <Route path='/furniture/:id' element={<FurnitureSingle />} />
     <Route path='/kitchen/:id' element={<KitchenSingle />} />
     <Route path='/fridge/:id' element={<Fridge />}/>

     {/* Cart  */}
     <Route path='/cart' element={<CartUsage />}/>
    </Routes>
   
    </>
  )
}

export default App
