import { generatedGameAssets } from "@/data/games.generated";

export type Game = {
  slug: string;
  appId: string;
  title: string;
  playstore: string;
  technologies: readonly string[];
  shortDescription: string;
  description: string;
  icon: string;
  headerImage: string;
  screenshots: string[];
};

const baseGames = [
  {
    slug: "skincare-asmr-spa",
    appId: "com.relaxing.skincare.asmr.spa.makeover.salon",
    title: "Skincare ASMR Spa Makeover Salon",
    playstore:
      "https://play.google.com/store/apps/details?id=com.relaxing.skincare.asmr.spa.makeover.salon",
    technologies: ["Unity", "C#", "Android", "Mobile UI"],
    shortDescription:
      "A relaxing skincare makeover game built around satisfying ASMR treatments and beauty salon interactions.",
    description:
      "Skincare ASMR Spa Makeover Salon is a casual mobile beauty game focused on soothing player feedback, skincare treatment flows, and polished makeover interactions. The project combines Unity gameplay logic with clean touch controls, layered UI states, and progression-friendly salon sequences designed for mobile players seeking relaxing and satisfying gameplay."
  },
  {
    slug: "shuriken-slice",
    appId: "com.thegamebeast.shuriken.slice.memerot.games",
    title: "Shuriken Slice",
    playstore:
      "https://play.google.com/store/apps/details?id=com.thegamebeast.shuriken.slice.memerot.games",
    technologies: ["Unity", "C#", "Android", "Arcade Systems"],
    shortDescription:
      "A fast-paced arcade slicing game centered on precision, timing, and sharp-feeling action feedback.",
    description:
      "Shuriken Slice is an action-focused mobile arcade experience built around responsive slicing mechanics, fast reaction gameplay, and momentum-driven challenge design. The project emphasizes crisp Unity input handling, score-driven loops, and satisfying visual feedback to keep the core mechanic readable and addictive across short mobile sessions."
  },
  {
    slug: "scary-survival-house",
    appId: "com.scarysurvival.house",
    title: "Scary Survival House",
    playstore: "https://play.google.com/store/apps/details?id=com.scarysurvival.house",
    technologies: ["Unity", "C#", "Android", "Horror Gameplay"],
    shortDescription:
      "A survival horror game with tense house exploration, danger-driven pacing, and atmospheric interactions.",
    description:
      "Scary Survival House is a horror survival experience built in Unity around suspense, environmental navigation, and player tension. The game focuses on exploration flow, atmospheric level design, and interactive systems that keep the player under pressure while maintaining clear objectives and immersive mobile-friendly controls."
  },
  {
    slug: "fire-shooting-battle-royale",
    appId: "com.fireshooting.battleroyale",
    title: "Fire Shooting Battle Royale",
    playstore: "https://play.google.com/store/apps/details?id=com.fireshooting.battleroyale",
    technologies: ["Unity", "C#", "Android", "Combat Systems"],
    shortDescription:
      "A battle royale shooter featuring weapon combat, action pacing, and competitive survival gameplay.",
    description:
      "Fire Shooting Battle Royale is a mobile shooter project built around combat readability, survival pressure, and high-energy player encounters. The game combines Unity combat logic, action-focused UI, and responsive gameplay systems to deliver a battle-oriented experience with strong visual clarity and mobile performance awareness."
  },
  {
    slug: "harvest-crop-farm-town",
    appId: "com.harvestcrop.farmtown",
    title: "Harvest Crop Farm Town",
    playstore: "https://play.google.com/store/apps/details?id=com.harvestcrop.farmtown",
    technologies: ["Unity", "C#", "Android", "Simulation"],
    shortDescription:
      "A farming and town-building experience focused on harvesting, crop growth, and cozy management loops.",
    description:
      "Harvest Crop Farm Town is a casual farming simulation built with Unity for mobile players who enjoy progression, collection, and calm management gameplay. The project centers on crop cycles, bright visual presentation, and approachable systems that support repeat engagement through farming, upgrades, and town-building tasks."
  }
] as const;

export const games: Game[] = baseGames.map((game) => {
  const generatedAssets = generatedGameAssets.find((entry) => entry.slug === game.slug);

  if (!generatedAssets) {
    throw new Error(`Missing generated assets for game: ${game.slug}`);
  }

  return {
    ...game,
    icon: generatedAssets.icon,
    headerImage: generatedAssets.headerImage,
    screenshots: generatedAssets.screenshots
  };
});

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
