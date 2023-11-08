import React, { useEffect, useRef } from "react";

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const closeModalOnOutsideClick = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", closeModalOnOutsideClick);
    } else {
      document.removeEventListener("click", closeModalOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeModalOnOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div
        className="z-10 min-h-[70%] w-[90%] overflow-y-auto rounded-3xl bg-baseColor p-4 shadow-lg"
        ref={modalRef}
      >
        <div className="flex justify-end">
          <div
            className="focus:shadow-outline-red mb-[5px] flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-red-500 text-lg font-bold  leading-none text-white hover:bg-red-600 focus:outline-none active:bg-red-700"
            onClick={onClose}
          >
            <span className="mb-1">&times;</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export { Modal };
