import { DrinkCard } from "@/components/DrinkCard"
import { useAppStore } from "@/store/useAppStore"



function DrinksFavoritos() {

  const { favoritos } = useAppStore()

  return (
    <>
      <h1 className='flex justify-center text-6xl font-extrabold'>
        Favoritos
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 max-w-6xl mx-auto'>
        {
          favoritos.length > 0 ?
            favoritos.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            )) :
            <p className='my-10 text-center text-2xl'>
              No hay bebidas favoritas aún.
            </p>
        }
      </div>
    </>
  )
}

export { DrinksFavoritos }