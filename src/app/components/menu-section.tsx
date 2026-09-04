"use client";

import { useState } from "react";
import {
  featuredMenuItem,
  menuFilters,
  menuItems,
  menuNotes,
  type MenuFilter,
} from "../data/menu";
import { ArrowUpRight } from "./icons";

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState<MenuFilter>("Todo");
  const visibleItems =
    activeFilter === "Todo"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section className="menu-section section" id="carta" aria-labelledby="menu-title">
      <div className="menu-heading">
        <div>
          <span className="eyebrow">LA CARTA</span>
          <h2 id="menu-title" className="display-title">
            Lo difícil es
            <br />
            <span>elegir solo una.</span>
          </h2>
        </div>
        <div className="menu-heading__note">
          <span className="menu-heading__mark">POX</span>
          <p>
            Cafés, tostadas, bocadillos y bebidas para acompañar cada pausa.
          </p>
        </div>
      </div>

      <div className="menu-controls">
        <div
          className="menu-filters"
          role="tablist"
          aria-label="Filtrar la carta por categoría"
        >
          {menuFilters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                className={`menu-filter${isActive ? " is-active" : ""}`}
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <div className="menu-result" aria-live="polite">
          {activeFilter === "Todo" ? "Toda la carta" : activeFilter}
          <span>{visibleItems.length} opciones</span>
        </div>
      </div>

      <div className="menu-notes" aria-label="Notas de la carta">
        <p>{menuNotes.toast}</p>
        <p>{menuNotes.sizes}</p>
        <p>{menuNotes.frappe}</p>
      </div>

      <div className="menu-grid">
        {visibleItems.map((item, index) => (
          <article className={`menu-item menu-item--${index % 4}`} key={`${item.category}-${item.name}`}>
            <span className="menu-item__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="menu-item__body">
              <span className="menu-item__category">
                {item.subgroup ?? item.category}
              </span>
              <h3>{item.name}</h3>
              {item.description ? <p>{item.description}</p> : null}
            </div>
            <span
              className={`menu-item__price${item.price ? "" : " menu-item__price--ask"}`}
            >
              {item.price ?? "Consultar"}
            </span>
          </article>
        ))}
      </div>

      <aside className="menu-feature" aria-label="Producto destacado">
        <div className="menu-feature__art" aria-hidden="true">
          <span>FRÍO</span>
          <strong>B</strong>
          <i />
        </div>
        <div className="menu-feature__copy">
          <span className="eyebrow eyebrow--light">DESTACADO</span>
          <h3>{featuredMenuItem.name}</h3>
          <p>{featuredMenuItem.description}</p>
        </div>
        <div className="menu-feature__price">
          <span>{featuredMenuItem.price}</span>
          <small>precio</small>
        </div>
        <a href="#visitanos" aria-label="Consultar Frappé Berrys en el local">
          Consultar <ArrowUpRight aria-hidden="true" />
        </a>
      </aside>
    </section>
  );
}
