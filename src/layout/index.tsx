
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppStore } from '@/store/useAppStore'

import { Header } from '@/components/Header'
import { Modal } from '@/components/Modal'


function Layout() {

  const { loadFromStoage } = useAppStore()

  useEffect(() => {
    loadFromStoage()
  }, [])
  return (
    <>
      <Header />

      <main className='py-10'><Outlet /></main>
      <Modal />


    </>
  )
}

export { Layout }