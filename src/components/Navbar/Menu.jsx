"use client";

import { AlignJustify, BookText, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]);

  return (
    <div className="menu">
      {isOpen ? (
        <>
          <X
            onClick={() => setIsOpen(prev => !prev)}
            className="menu__sign"
          />
          {/* TODO! сделать ссылку на page reports */}
          <a
            href="https://ya.ru"
            target="_blank"
            rel="noopener noreferer"
          >
            <div className="menu__link">
              <BookText />
              <p className="text-2xl font-normal leading-none">Отчеты</p>
            </div>
          </a>
        </>
      ) : (
        <AlignJustify
          onClick={() => setIsOpen(prev => !prev)}
          className="menu__sign"
        />
      )}
    </div>
  );
}
