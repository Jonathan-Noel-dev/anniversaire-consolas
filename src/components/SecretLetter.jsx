import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import "./SecretLetter.css";

export default function SecretLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="secret-letter-section" id="lettre-secrete">
      <motion.div
        className="secret-letter-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>QUELQUES MOTS POUR TOI</span>

        <h2>
          Une lettre <em>secrète...</em>
        </h2>

        <p>
          Il y a des choses qui méritent d'être écrites
          plutôt que simplement dites.
        </p>
      </motion.div>

      <div className={`envelope-scene ${isOpen ? "letter-opened" : ""}`}>
        <div className="envelope">
          <div className="envelope-back" />

          <div className="letter-paper">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="letter-content"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <Sparkles size={23} className="letter-sparkle" />

                  <h3>Chère Consolas,</h3>

                  <p>
                    En ce jour particulier, je voulais prendre
                    un instant pour te souhaiter bien plus qu'un
                    simple joyeux anniversaire.
                  </p>

                  <p>
                    Que tes 19 ans soient le début d'une magnifique
                    aventure, remplie de découvertes, de réussite,
                    de bonheur et de belles surprises.
                  </p>

                  <p>
                    N'oublie jamais que tu as encore tant de belles
                    choses à découvrir et tant de rêves à réaliser.
                    Continue d'avancer et de briller à ta manière.
                  </p>

                  <p>
                    Profite pleinement de cette journée qui est la tienne.
                  </p>

                  <div className="letter-signature">
                    <Heart size={17} fill="currentColor" />
                    <span>Avec une pensée particulière pour toi.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="envelope-front" />

          <div className="envelope-flap" />

          {!isOpen && (
            <motion.div
              className="envelope-seal"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={24} fill="currentColor" />
            </motion.div>
          )}
        </div>
      </div>

      <motion.button
        className="letter-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? "Refermer la lettre" : "Ouvrir mon enveloppe"}
      </motion.button>
    </section>
  );
}