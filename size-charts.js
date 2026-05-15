// K² Size Charts — sourced from TRXX (manufacturer)
// All measurements in CM. Half chest = laid flat, side seam to side seam.
// Half waist = laid flat, side to side at top of waistband.

window.K2_SIZE_CHARTS = {
  unisex_rugby_jersey: {
    title: "Unisex Rugby Jersey",
    note: "Best fit reference for the K² Training Kit jersey.",
    columns: ["Size", "K4", "K6", "K8", "K10", "K12", "K14", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL"],
    rows: [
      ["A — Half chest (cm)", "35", "37.5", "40", "42.5", "45", "47.5", "50", "53", "55", "58", "60", "63", "65", "67.5", "70", "72.5", "75"],
      ["B — Length (cm)",     "49", "52",   "55", "58",   "61", "63",   "67", "70", "72", "74", "76", "78", "80", "81",   "81.5", "82", "82.5"],
    ],
  },
  unisex_rugby_short: {
    title: "Unisex Rugby Short",
    note: "Best fit reference for the K² Training Kit shorts.",
    columns: ["Size", "K4", "K6", "K8", "K10", "K12", "K14", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    rows: [
      ["A — Half waist (cm)", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48"],
      ["B — Length (cm)",     "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42"],
    ],
  },
  ladies_rugby_jersey: {
    title: "Ladies Rugby Jersey",
    note: "Cut for ladies fit. Compare to a fave jersey before ordering.",
    columns: ["Size", "L6-XS", "L8-S", "L10-M", "L12-L", "L14-XL", "L16-2XL", "L18-3XL", "L20-4XL", "L22-5XL", "L24-6XL", "L26-7XL"],
    rows: [
      ["A — Half chest (cm)", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66"],
      ["B — Length (cm)",     "68", "70", "72", "74", "76", "78", "80", "82", "84", "86", "87"],
    ],
  },
  mens_profit_jersey: {
    title: "Men's Profit Jersey",
    note: "Slimmer fit jersey option.",
    columns: ["Size", "S", "M", "L", "XL", "2XL", "3XL"],
    rows: [
      ["A — Half chest (cm)", "49", "51", "53", "55", "57", "59"],
      ["B — Length (cm)",     "73", "75", "77", "79", "81", "83"],
    ],
  },
  touch_short: {
    title: "Touch Shorts",
    note: "Performance fit, lighter weight.",
    columns: ["Size", "K4", "K6", "K8", "K10", "K12", "K14", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    rows: [
      ["Numeric size",        "18", "20",    "22",   "24",    "26",   "28",    "30", "32",   "34",   "36",    "38", "40",   "42",    "44"],
      ["A — Half waist (cm)", "27", "28.25", "29.5", "31.25", "32.5", "33.75", "35", "36.5", "37.5", "38.75", "40", "41.5", "43.25", "44.5"],
      ["B — Length (cm)",     "33", "34.5",  "36",   "38.5",  "40",   "41",    "41", "43",   "44",   "44",    "44", "45",   "45",    "45"],
    ],
  },
  unisex_athletic_tee: {
    title: "T-Shirt & Polo",
    note: "Standard fit performance tee / polo.",
    columns: ["Size", "K4", "K6", "K8", "K10", "K12", "K14", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL"],
    rows: [
      ["A — Half chest (cm)", "37", "39", "42", "43", "45", "47", "51.5", "54", "56.5", "59", "61.5", "65", "69", "71", "72.5", "73.5", "75"],
      ["B — Length (cm)",     "46", "50", "54", "59", "61", "63", "67",   "69", "72",   "74", "76",   "78", "80", "82", "84",   "85",   "86"],
    ],
  },
  hoodie_jacket: {
    title: "Hoodie / Jacket",
    note: "Boxy fit. Sized for layering — size down for a slimmer look.",
    columns: ["Size", "K2", "K4", "K6", "K8", "K10", "K12", "K14", "K16", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL", "8XL"],
    rows: [
      ["A — Half chest (cm)", "32", "36", "38", "41", "44", "47", "50", "51", "53", "55.5", "58", "60.5", "63", "65.5", "68",   "71", "73", "76", "78", "81"],
      ["B — Length (cm)",     "40", "46", "50", "54", "58", "62", "66", "67", "68", "70",   "73", "76",   "78", "79",   "80.5", "82", "84", "85", "87", "89"],
    ],
  },
};

// Default chart shown for kit PDP (jersey + shorts)
window.K2_KIT_DEFAULT_CHARTS = ["unisex_rugby_jersey", "unisex_rugby_short"];

window.K2_SIZE_GUIDE_TIP =
  "When choosing a size, find a garment you currently wear and like the fit of, then match the closest measurements below. Measurements are in CM.";
