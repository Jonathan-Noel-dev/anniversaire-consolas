import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";

const photos = [
  { src: "/instant.jpeg", title: "Un instant précieux" },
  { src: "/souri.jpeg", title: "Un joli sourire" },
  { src: "/souvenir.jpeg", title: "Un souvenir à garder" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const previous = () => {
    setSelected((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  const next = () => {
    setSelected((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="gallery-section">
      <div className="gallery-heading">
        <span>QUELQUES INSTANTS</span>
        <h2>Des souvenirs précieux...</h2>
        <p>Certains moments méritent d'être gardés.</p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.src}
            className="gallery-card"
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelected(index)}
          >
            <img src={photo.src} alt={photo.title} />
            <span>{photo.title}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
            >
              <X />
            </button>

            <button
              className="lightbox-arrow left"
              onClick={(e) => {
                e.stopPropagation();
                previous();
              }}
              aria-label="Photo précédente"
            >
              <ChevronLeft />
            </button>

            <motion.img
              key={selected}
              src={photos[selected].src}
              alt={photos[selected].title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="lightbox-arrow right"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Photo suivante"
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}