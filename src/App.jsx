import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Intro from "./components/Intro";
import BirthdayReveal from "./components/BirthdayReveal";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <AnimatePresence mode="wait">

      {!opened ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8 }}
        >
          <Intro onOpen={() => setOpened(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="birthday"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <BirthdayReveal />
        </motion.div>
      )}

    </AnimatePresence>
  );
}

export default App;