import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { useAppStore } from '@/store/useAppStore';

function Modal() {
  const { modal, closeModal } = useAppStore();
  return (
    <Transition show={modal}>
      <Dialog className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center p-4">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100" 
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <DialogPanel className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-xl transform transition-all">
              <div className="flex justify-between items-center mb-4">
                <DialogTitle className="text-2xl font-semibold text-gray-800">Deactivate Account</DialogTitle>
              </div>
              <p className="text-gray-600">This will permanently deactivate your account. Are you sure?</p>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export { Modal };
