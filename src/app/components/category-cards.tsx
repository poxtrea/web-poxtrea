import { ArrowUpRight, categoryIconMap } from "./icons";
import { menuCategories } from "../data/menu";

export default function CategoryCards() {
  return (
    <section className="categories-section section" aria-labelledby="categories-title">
      <div className="section__intro section__intro--categories">
        <div>
          <span className="eyebrow">PARA CADA ANTOJO</span>
          <h2 id="categories-title" className="display-title">
            Elige tu
            <br />
            <span>momento.</span>
          </h2>
        </div>
        <p className="section__intro-copy">
          Algo rápido, algo dulce o ese café que pide una sobremesa. La carta
          está hecha para dejarse llevar.
        </p>
      </div>

      <div className="category-grid">
        {menuCategories.map((category, index) => {
          const Icon = categoryIconMap[category.icon];

          return (
            <a
              className={`category-card category-card--${category.color}`}
              href="#carta"
              key={category.title}
            >
              <div className="category-card__topline">
                <span className="category-card__index">0{index + 1}</span>
                <span className="category-card__icon">
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <span className="category-card__link">
                Ver carta <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
