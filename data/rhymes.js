// Curated rhyme packs for freestyle practice
// Each theme has multiple rhyme families (groups of words that rhyme)

const RHYME_PACKS = {
  "Pain & Mind": [
    ["pain", "rain", "chain", "brain", "train", "gain", "lane", "remain", "explain", "insane"],
    ["mind", "find", "blind", "grind", "behind", "remind", "designed", "confined", "refined"],
    ["hurt", "dirt", "shirt", "alert", "assert", "convert", "desert", "insert"],
    ["soul", "goal", "role", "control", "patrol", "console", "whole", "toll"],
    ["fear", "clear", "near", "hear", "year", "appear", "sincere", "severe", "career"],
    ["lost", "cost", "frost", "crossed", "exhausted", "accosted"],
    ["tear", "wear", "care", "share", "aware", "despair", "prepare", "unfair"],
    ["dark", "spark", "mark", "park", "stark", "embark", "remark"]
  ],
  "Money & Flex": [
    ["money", "honey", "funny", "sunny", "runnin'", "comin'", "stunner"],
    ["cash", "flash", "dash", "stash", "crash", "splash", "clash"],
    ["rich", "switch", "pitch", "glitch", "enrich", "bewitch"],
    ["stack", "back", "track", "black", "attack", "react", "exact", "impact"],
    ["band", "hand", "stand", "plan", "grand", "demand", "expand", "command"],
    ["gold", "sold", "bold", "cold", "hold", "fold", "controlled", "behold"],
    ["whip", "trip", "flip", "clip", "grip", "strip", "equip", "membership"],
    ["chain", "gain", "main", "lane", "remain", "domain", "explain"]
  ],
  "Love & Heart": [
    ["love", "above", "dove", "glove", "shove", "thereof"],
    ["heart", "start", "part", "art", "apart", "restart", "smart", "chart"],
    ["feel", "real", "deal", "steal", "reveal", "appeal", "heal", "wheel"],
    ["kiss", "miss", "bliss", "this", "dismiss", "reminisce", "abyss"],
    ["eyes", "lies", "rise", "surprise", "disguise", "realize", "despise"],
    ["hold", "cold", "told", "gold", "bold", "unfold", "controlled"],
    ["need", "feed", "lead", "speed", "succeed", "proceed", "indeed"],
    ["true", "you", "through", "blue", "knew", "grew", "pursue", "renew"]
  ],
  "Battle & Bars": [
    ["bars", "cars", "stars", "scars", "mars", "jars", "guitars", "cigars"],
    ["flow", "go", "know", "show", "blow", "throw", "below", "shadow", "ego"],
    ["kill", "skill", "ill", "will", "still", "chill", "thrill", "drill", "fulfill"],
    ["rap", "trap", "map", "cap", "snap", "clap", "adapt", "react"],
    ["verse", "curse", "worse", "nurse", "purse", "rehearse", "disperse"],
    ["mic", "like", "strike", "hype", "type", "spike", "alike", "dislike"],
    ["beat", "heat", "street", "complete", "defeat", "elite", "concrete"],
    ["game", "name", "fame", "flame", "claim", "shame", "frame", "became"]
  ],
  "Street & Life": [
    ["street", "heat", "beat", "complete", "defeat", "elite", "concrete", "athlete"],
    ["life", "knife", "wife", "strife", "midlife", "nightlife"],
    ["block", "lock", "rock", "clock", "shock", "knock", "stock", "unlock"],
    ["hood", "good", "could", "should", "wood", "stood", "understood"],
    ["ride", "side", "pride", "hide", "wide", "guide", "decide", "provide"],
    ["city", "pretty", "gritty", "witty", "committee", "itty-bitty"],
    ["night", "light", "fight", "right", "sight", "tight", "bright", "tonight"],
    ["road", "code", "mode", "load", "explode", "episode", "overload"]
  ],
  "Motivation": [
    ["up", "cup", "cut", "shut", "what", "gut", "strut"],
    ["rise", "eyes", "lies", "size", "prize", "surprise", "realize"],
    ["grind", "mind", "find", "blind", "behind", "designed", "combined"],
    ["win", "sin", "begin", "within", "spin", "chin", "skin", "akin"],
    ["dream", "team", "scheme", "stream", "extreme", "supreme", "redeem"],
    ["power", "hour", "tower", "flower", "devour", "empower"],
    ["focus", "locus", "hocus", "crocus"],
    ["strong", "long", "wrong", "song", "belong", "prolong", "along"]
  ]
};

// Flat lookup for dictionary search
const ALL_RHYMES = {};
Object.entries(RHYME_PACKS).forEach(([theme, groups]) => {
  groups.forEach((group, gi) => {
    group.forEach(word => {
      const key = word.toLowerCase().replace(/'/g, "");
      if (!ALL_RHYMES[key]) ALL_RHYMES[key] = [];
      ALL_RHYMES[key].push({ theme, group, index: gi });
    });
  });
});

// Extra common rhyme families for dictionary (not in themes)
const EXTRA_FAMILIES = [
  ["cat", "hat", "bat", "rat", "sat", "flat", "that", "chat", "combat"],
  ["day", "way", "say", "play", "stay", "pay", "ray", "delay", "away", "today"],
  ["time", "rhyme", "climb", "crime", "prime", "sublime", "mime"],
  ["fire", "desire", "higher", "wire", "liar", "inspire", "retire", "entire"],
  ["world", "girl", "curl", "swirl", "unfurl", "pearl"],
  ["home", "alone", "phone", "zone", "tone", "known", "own", "thrown"],
  ["free", "me", "see", "be", "key", "tree", "degree", "agree", "energy"],
  ["move", "groove", "prove", "remove", "improve", "approve"],
  ["change", "range", "strange", "arrange", "exchange", "derange"],
  ["space", "place", "face", "race", "base", "grace", "embrace", "erase"]
];

EXTRA_FAMILIES.forEach((group, gi) => {
  group.forEach(word => {
    const key = word.toLowerCase();
    if (!ALL_RHYMES[key]) ALL_RHYMES[key] = [];
    ALL_RHYMES[key].push({ theme: "Extra", group, index: gi });
  });
});
