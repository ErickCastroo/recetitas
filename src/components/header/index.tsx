import { useMemo, useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { toast } from 'sonner'

import { useAppStore } from '@/store/useAppStore'

import '@/layout/index.css'

function Header() {
  const [filtros, setFiltros] = useState({
    ingrediente: '',
    categoria: ''
  })

  const { pathname } = useLocation()
  const { fetchCategory, categorias, buscarReceta } = useAppStore()

  useEffect(() => {
    fetchCategory()
  }, [])
  const isHome = useMemo(() => pathname === '/recetitas/', [pathname])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ( Object.values(filtros).includes('') ) {
      toast('Por favor llena todos los campos')
      return
    }
    buscarReceta( filtros)
  }

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
              Favorite Drinks
            </NavLink>
          </nav>
        </div>
        {
          isHome && (
            <form className='md:1/2 2xl:w-1/3 bg-orange-400 mt-32 p-10 rounded-lg shadow space-y-6' onSubmit={handleSubmit}>
              <div className='space-y-4'>
                <label
                  htmlFor='ingrediente'
                  className='text-white font-extrabold text-lg'
                >Name or ingredient of the drink</label>
                <input
                  type='text' 
                  id='ingrediente'
                  name='ingrediente'
                  placeholder='Search by name or ingredient'
                  className='bg-white p-3 w-full rounded-lg focus:outline-none'
                  onChange={handleChange}
                  value={filtros.ingrediente}
                />
              </div>
              <div className='space-y-4'>
                <label
                  htmlFor='categoria'
                  className='text-white font-extrabold text-lg'
                >Category</label>
                <select
                  id='categoria'
                  name='categoria'
                  className='bg-white p-3 w-full rounded-lg focus:outline-none'
                  onChange={handleChange}
                  value={filtros.categoria}
                >
                  <option value=''>Select a category</option>
                  {
                    categorias?.drinks?.map((categoria) => (
                      <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                    ))
                  }
                </select>
              </div>
              <input
                type='submit'
                className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-3 rounded-lg'
                value='Search'
              />
            </form>
          )}
      </div>
    </header>
  )
}

export { Header }