import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'
import { Modal } from '@/components/Modal'


function Layout() {
  return (
    <>
      <Header />

      <main className='py-10'><Outlet /></main>
      <Modal />


    </>
  )
}

export { Layout }