import { useMemo, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { useAppStore } from '@/store/useAppStore'

function Header() {

  const { pathname } = useLocation()
  const { fetchCategory, categorias } = useAppStore()

  console.log(categorias)

  useEffect(() => {
    fetchCategory()
  }, [])

  const isHome = useMemo(() => pathname === '/recetitas/', [pathname])
  return (
    <header className='bg-slate-800'>
      <div className='mx-auto container px-5 py-3'>
        <div className='flex justify-between'>
          <div className='flex justify-start items-start'>
            <img className='w-32' src='./logo.svg' alt='logotipo' />
          </div>
          <nav className='flex gap-4'>
            <NavLink
              to='recetitas/'
              className={({ isActive }) =>
                isActive
                  ? 'flex justify-end items-center text-orange-400'
                  : 'flex justify-end items-center text-white hover:text-gray-300'
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/drinksfavoritos'
              className={({ isActive }) =>
                isActive
                  ? 'flex justify-end items-center text-orange-400'
                  : 'flex justify-end items-center text-white hover:text-gray-300'
              }
            >
              Drinks Favoritos
            </NavLink>
          </nav>
        </div>
        {
          isHome && (
            <form className='md:1/2 2xl:w-1/3 bg-orange-400 mt-32 p-10 rounded-lg shadow space-y-4'>
              <div className='space-y-4'>
                <label
                  htmlFor='ingrediente'
                  className='text-white font-extrabold text-lg'
                >Nombre o ingrediente</label>
                <input
                  type='text'
                  id='ingrediente'
                  name='ingrediente'
                  placeholder='escribe la bebida que desea realizar'
                  className='bg-white p-3 w-full rounded-lg focus:outline-none'
                />
              </div>
              <div className='space-y-4'>
                <label
                  htmlFor='ingrediente'
                  className='text-white font-extrabold text-lg'
                >Categoria</label>
                <select
                  id='ingrediente'
                  name='ingrediente'
                  className='bg-white p-3 w-full rounded-lg focus:outline-none'
                >
                  <option value=''>Selecciona una categoria</option>
                  {
                    categorias.drinks.map((categoria) => (
                      <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                    ))
                  }
                </select>
              </div>
              <input
                id=''
                name=''
                type='submit'
                className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-3 rounded-lg'
              />
            </form>
          )}
      </div>
    </header>
  )
}

export { Header }