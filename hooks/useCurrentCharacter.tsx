import { useState } from "react";

export const useCurrentCharacter = () => {
  const [currentCharacter, setCurrentCharacter] = useState({
    name: "",
    race: "",
    isAttack: false,
    isHeal: false,
    isSummon: false,
    isInherited: false,
    water: "",
    fire: "",
    wind: "",
    earth: "",
    heal: "",
    detoxification: "",
    divineStrike: "",
    protection: "",
    fiends: "",
    spirits: "",
    isHowling: false,
    isTeleport: false,
    isGravityManipulation: false,
    isTimeTravel: false,
    isHypnosis: false,
    isMagicDisruption: false,
    isReincarnation: false,
    isDivination: false,
    isTemporarySoulSummoning: false,
  });

  return { currentCharacter, setCurrentCharacter };
};
