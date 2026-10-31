import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Gift, Sparkles } from "lucide-react";
import "./GiftBox.css";

export default function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);

  const openGift = () => {
    if (isOpen) return;

    setIsOpen(true);

    confetti({
      particleCount: 130,
      spread: 100,
      origin: { y: 0.65 },
      colors: ["#d5ad79", "#e8b9d9", "#ffffff", "#a77bd1"],
    });
  };

  return (
    <section className="gift-section" id="cadeau">
      <motion.div
        className="gift-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>UNE DERNIÈRE SURPRISE ?</span>

        <h2>
          Un cadeau <em>pour toi...</em>
        </h2>

        <p>
          Il reste encore quelque chose qui t'attend.
          Mais pour le découvrir, il faudra ouvrir cette boîte.
        </p>
      </motion.div>

      <div className={`gift-container ${isOpen ? "opened" : ""}`}>
        <div className="gift-glow" />

        <div className="gift-box">
          <div className="gift-light" />

          <div className="gift-lid">
            <div className="gift-lid-ribbon" />
            <div className="gift-bow">
              <span />
              <span />
            </div>
          </div>

          <div className="gift-body">
            <div className="gift-ribbon" />
            <div className="gift-ribbon-horizontal" />
          </div>
        </div>

        <div className="gift-shadow" />
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="open-button"
            className="gift-button"
            onClick={openGift}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 15 }}
          >
            <Gift size={19} />
            Ouvrir mon cadeau
          </motion.button>
        ) : (
          <motion.div
            key="gift-message"
            className="gift-message"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Sparkles className="gift-message-icon" size={30} />

            <h3>Une pensée spéciale pour toi</h3>

            <p>
              Que cette nouvelle année t'apporte encore plus
              de bonheur, de réussite et de merveilleux moments.
              Tu mérites de belles choses, Consolas.
            </p>

            <span>Avec toute mon attention ✨</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}