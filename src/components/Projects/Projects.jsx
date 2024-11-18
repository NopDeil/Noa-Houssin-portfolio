import "./Projects.scss";
import datas from "../../datas/projects.json";
import Cards from "../Card/Card";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Projects() {
  const uniqueCategories = [
    ...new Set(datas.map((project) => project.categorie.name)),
  ];

  const categories = [
    { id: 1, name: "Tous" },
    ...uniqueCategories.map((name) => ({
      id: datas.find((project) => project.categorie.name === name)?.categorie
        .id,
      name: name,
    })),
  ];

  // Trier les catégories dans l'ordre souhaité
  const sortOrder = ["Tous", "Frontend", "Backend", "SEO"];
  const sortedCategories = categories.sort(
    (a, b) => sortOrder.indexOf(a.name) - sortOrder.indexOf(b.name)
  );

  const [activeCategory, setActiveCategory] = useState("Tous");

  // Filtrer les projets en fonction de la catégorie active
  const filteredProjects = datas.filter((project) =>
    activeCategory === "Tous" ? true : project.categorie.name === activeCategory
  );

  // Gestion du clic sur un bouton de catégorie
  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <section id="projectSection">
      <h2>MES PROJETS</h2>
      <div className="buttons">
        {sortedCategories.map((category, index) => (
          <Button
            key={index}
            variant={activeCategory === category.name ? "primary" : "secondary"}
            className="btnCat"
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="gallery">
        {filteredProjects.map((data) => (
          <Cards
            key={data.id}
            title={data.title}
            description={data.description}
            image={data.image}
            technologies = {data.technologies}
            github={data.github}
            project_link={data.projectLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
