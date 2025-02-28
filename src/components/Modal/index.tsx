import { JSX } from 'react'
import { Dialog, DialogPanel, DialogTitle, Description, Transition, TransitionChild } from '@headlessui/react'
import { useAppStore } from '@/store/useAppStore'
import { FaHeart, FaHeartBroken } from "react-icons/fa";


function Modal() {
  const { modal, closeModal, RecetaSeleccionada, handleClickFavorite, favoritoExiste  } = useAppStore()

  const renderIngredientes = () => {
    const ingredientes: JSX.Element[] = []
    for (let i = 1; i <= 15; i++) {
      const ingrediente = RecetaSeleccionada?.[`strIngredient${i}` as keyof typeof RecetaSeleccionada]
      const medida = RecetaSeleccionada?.[`strMeasure${i}` as keyof typeof RecetaSeleccionada]

      if (ingrediente) {
        ingredientes.push(
          <li key={i} className='flex items-center space-x-2 text-lg text-gray-700'>
            <span className='font-semibold'>{ingrediente}</span>
            {medida && <span className='text-gray-500'>- {medida}</span>}
          </li>
        );
      }
    }
    return ingredientes;
  };


  return (
    <Transition show={modal}>
      <Dialog className='relative z-50' onClose={closeModal}>
        <div className='fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-md flex items-center justify-center p-4'>
          <TransitionChild
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-90'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-90'
          >
            <DialogPanel className='max-w-lg w-full bg-white p-6 rounded-3xl shadow-2xl transform transition-all relative'>
              <button
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'
                onClick={closeModal}
                aria-label='Cerrar modal'
              >
                ✖
              </button>

              <div className='flex flex-col items-center text-center'>
                <DialogTitle className='text-3xl font-bold text-gray-900 mb-4'>
                  {RecetaSeleccionada?.strDrink || 'Sin título'}
                </DialogTitle>
                <Description className='text-gray-600'>
                  Detalles de la receta seleccionada.
                </Description>

                {RecetaSeleccionada?.strDrinkThumb && (
                  <img
                    className='rounded-xl shadow-lg w-80 h-80 object-cover mb-6'
                    src={RecetaSeleccionada.strDrinkThumb}
                    alt={RecetaSeleccionada.strDrink || 'Imagen de la receta'}
                  />
                )}
              </div>

              <div className='text-left'>
                <h3 className='text-xl font-semibold text-gray-900 border-b pb-2 mb-4'>Ingredientes y cantidades</h3>
                <div className='max-h-60 overflow-y-auto mb-6'>
                  <ul className='grid grid-cols-2 gap-4'>
                    {renderIngredientes()}
                  </ul>
                </div>

                <h3 className='text-xl font-semibold text-gray-900 border-b pb-2 mb-4'>Instrucciones</h3>
                <p className='text-gray-700 leading-relaxed'>
                  {RecetaSeleccionada?.strInstructions || 'No hay instrucciones disponibles.'}
                </p>
              </div>

              <div className='mt-6 flex justify-between'>
                <button
                  onClick={closeModal}
                  className='bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400'
                >
                  Cerrar
                </button>
                <button
                  onClick={() => handleClickFavorite(RecetaSeleccionada)}
                  className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700'>
                  {
                    favoritoExiste(RecetaSeleccionada?.idDrink) ?
                      <FaHeartBroken className='inline-block' /> :
                      <FaHeart className='inline-block' />
                  }
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export { Modal };
