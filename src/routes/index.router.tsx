import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Layout } from '@/layout'
import { Home } from '@/Pages/Home'
const DrinksFavoritos = lazy(() => import('@/Pages/DrinksFavoritos'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Toaster position='top-center' />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/recetitas' element={<Home />} />
          <Route path='/drinksfavoritos' element={
            <Suspense fallback={<div>Loading...</div>}>
              <DrinksFavoritos />
            </Suspense>
          } />
          <Route path='*' element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRouter }