import { Drink } from '@/types'

import { useAppStore } from '@/store/useAppStore'


type DrinkCardProps = {
  drink: Drink
}

function DrinkCard({ drink }: DrinkCardProps) {

  const { seleccionarReceta } = useAppStore()

  return (
    <div className='shadow-lg'>
      <div className='overflow-hidden'>
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className='hover:scale-125 transition-transform hover:rotate-2'
        />
      </div>

      <div className='p-5'>
        <h2 className='text-2xl truncate font-black'>{drink.strDrink}</h2>

        <button
          type='button'
          className='bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg'
          onClick={() => seleccionarReceta(drink.idDrink)}
        >
          Ver receta
        </button>
      </div>
    </div>
  )
}

export { DrinkCard }