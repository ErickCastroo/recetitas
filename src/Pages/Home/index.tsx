import { DrinkCard } from "@/components/DrinkCard"
import { useAppStore } from "@/store/useAppStore"
import { useMemo } from "react"

function Home() {

  const { drinks } = useAppStore()

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])

  return (
    <div>
      <h1 className='flex text-5xl font-extrabold justify-center'>Recipes</h1>
      {hasDrinks ? (
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 max-w-6xl mx-auto'>
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className='my-10 text-center text-2xl'>
          There are no drinks yet, use the form to search for a drink
        </p>
      )}
    </div>
  )
}

export { Home }