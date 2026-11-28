/*!
 * Aura Climate Card – Raumklima, Schimmelrisiko & Lüftungsempfehlung für Home Assistant
 * MIT © muhkuh666 – https://github.com/muhkuh666/Aura-Climate-Card
 */
const AURA_VERSION = "2.0.0";

/* ------------------------------------------------------------------ */
/*  Texte                                                              */
/* ------------------------------------------------------------------ */
const AURA_I18N = {
  de: {
    title: "Raumklima",
    outdoor: "Außen",
    inside: "innen",
    outside: "außen",
    temperature: "Temperatur",
    humidity: "Luftfeuchte",
    dewpoint: "Taupunkt",
    abs_humidity: "Abs. Feuchte",
    wall: "Wandoberfläche",
    wall_est: "geschätzt",
    wall_meas: "gemessen",
    co2: "CO₂",
    target: "Soll",
    mold: "Schimmelrisiko",
    mold_sensor: "Schimmelsensor",
    mold_hours: "{h} h über {v} % in {p} h",
    mold_hours_none: "in {p} h nie über {v} %",
    surface_rh: "Feuchte an der kältesten Wandstelle",
    risk_low: "gering",
    risk_medium: "erhöht",
    risk_high: "hoch",
    condensation: "Kondensation an der Wand!",
    comfort: "Behaglichkeit",
    c_ok: "Behaglich",
    c_cold: "Zu kalt",
    c_warm: "Zu warm",
    c_dry: "Zu trocken",
    c_humid: "Zu feucht",
    history: "Verlauf {h} h",
    window: "Fenster",
    open: "offen",
    closed: "zu",
    v_now: "Jetzt lüften",
    v_ok: "Lüften nicht nötig",
    v_useless: "Lüften bringt nichts",
    v_close: "Fenster schließen",
    v_open: "Fenster offen",
    v_cool: "Zum Abkühlen lüften",
    v_keep: "Fenster geschlossen halten",
    v_heat: "Heizung läuft bei offenem Fenster",
    dur: "{m} min Stoßlüften",
    dur_left: "noch ca. {m} min",
    r_humid: "Luftfeuchte über {v} %",
    r_co2: "CO₂ über {v} ppm",
    r_mold: "Schimmelgefahr an kalten Wänden",
    r_drier: "Außenluft ist trockener ({o} statt {i} g/m³)",
    r_wetter: "Außenluft ist feuchter ({o} statt {i} g/m³) – besser heizen oder entfeuchten",
    r_after: "danach ca. {v} % rel. Feuchte",
    r_dry: "Raumluft ist eher trocken",
    r_open: "seit {m} min geöffnet",
    r_hot: "Draußen ist es wärmer als drinnen",
    r_cooler: "Draußen {o} °C – kühler als drinnen",
    r_nooutdoor: "Ohne Außensensor kein Feuchtevergleich möglich",
    r_co2_est: "CO₂ geschätzt über {v} ppm",
    wall_learned: "gelernt · {n} Messung|gelernt · {n} Messungen",
    wl_title: "Wandpunkt messen",
    th_title: "Thermostate",
    fc_best: "Beste Lüftungszeit heute: {f}–{t} Uhr · {ah} g/m³ (jetzt {n})",
    fc_now: "Jetzt ist die beste Lüftungszeit für heute ({ah} g/m³)",
    fc_cool: "Kühl lüften: {f}–{t} Uhr · {tmp} °C",
    fc_later: "Besser {f}–{t} Uhr lüften (Außenluft ≈ {ah} g/m³)",
    tr_rising: "Feuchte steigt schnell (+{d} % in 30 min)",
    vt_start: "Lüften gestartet",
    vt_stop: "Fenster zu",
    vt_left: "Lüft-Timer: noch {m} min",
    vt_done: "Lüftzeit vorbei – Fenster schließen",
    hl_now: "Heizverlust bisher ≈ {k} kWh ({c})",
    hl_today: "heute ≈ {k} kWh · {c}",
    hl_open: "≈ {k} kWh bisher",
    v_cellar_closed: "Fenster zu lassen",
    r_cellar_dry: "Kellerlüftung: Außenluft trocknet (Taupunkt außen {d} °C)",
    r_cellar_wet: "Taupunkt außen {d} °C über Wand {w} °C – Feuchte würde sich niederschlagen",
    r_cellar_wait: "Erst lüften, wenn der Taupunkt außen unter {w} °C fällt",
    dev_dehum: "Entfeuchter",
    dev_hum: "Befeuchter",
    dev_on: "an",
    dev_off: "aus",
    dev_target: "Ziel {v} %",
    adv_dehum_on: "Entfeuchter einschalten",
    adv_dehum_off: "Entfeuchter ausschalten",
    adv_hum_on: "Befeuchter einschalten",
    adv_hum_off: "Befeuchter ausschalten",
    mw_title: "Schimmel-Wochenbilanz",
    mw_hours: "{h} h",
    mw_sub: "Stunden über {v} % an der Wand, letzte 7 Tage",
    th_count: "{n} Thermostate",
    th_heating: "{n} heizt|{n} heizen",
    th_off: "aus",
    wl_hint: "Kälteste Stelle (Außenwandecke, Fensterlaibung, hinter Schrank) mit IR-Thermometer messen und Wert eintragen. Am besten an kalten Tagen.",
    wl_input: "Gemessene Wandtemperatur (°C)",
    wl_save: "Übernehmen",
    wl_reset: "Gelerntes löschen",
    wl_close: "Schließen",
    wl_now: "Wandfaktor fRsi {f} · {src}",
    wl_src_norm: "Normwert",
    wl_src_room: "eigener Wert",
    wl_src_learned: "gelernt aus {n} Messung(en)",
    wl_calc: "Außen Ø 12 h: {o} °C · innen {i} °C",
    wl_err_dt: "Draußen zu warm: mindestens 8 K Unterschied innen/außen nötig (aktuell {d} K).",
    wl_err_range: "Unplausibel (fRsi {f}) – bitte nachmessen.",
    wl_err_num: "Bitte eine Temperatur eingeben, z. B. 12,5.",
    wl_err_noent: "Kein Lernspeicher (input_text) für diesen Raum eingetragen.",
    wl_err_write: "Speichern fehlgeschlagen: {e}",
    wl_ok: "Gespeichert: Messung ergibt fRsi {fi} → gelernt {f}",
    wl_outlier: "Starke Abweichung – schwächer gewichtet.",
    wl_auto: "Wandsensor lernt automatisch mit",
    r_aq: "Luftqualität {l}: {w}",
    aq: "Luftqualität",
    aq_1: "sehr gut",
    aq_2: "gut",
    aq_3: "mäßig",
    aq_4: "schlecht",
    aq_5: "sehr schlecht",
    est: "geschätzt",
    persons: "{n} Pers.",
    voc: "VOC",
    pm25: "PM2.5",
    pm10: "PM10",
    w_co2: "CO₂ hoch",
    w_voc: "Ausdünstungen (VOC)",
    w_pm25: "Feinstaub PM2.5",
    w_pm10: "Feinstaub PM10",
    r_heat: "Heizung herunterdrehen oder Fenster schließen",
    sum_ok: "Alles im grünen Bereich",
    sum_vent: "{n} Raum lüften|{n} Räume lüften",
    sum_mold: "{n} × Schimmelrisiko",
    back: "Alle Räume",
    unavailable: "nicht verfügbar",
    no_rooms: "Bitte im Editor mindestens einen Raum anlegen.",
  },
  en: {
    title: "Indoor climate",
    outdoor: "Outdoor",
    inside: "in",
    outside: "out",
    temperature: "Temperature",
    humidity: "Humidity",
    dewpoint: "Dew point",
    abs_humidity: "Abs. humidity",
    wall: "Wall surface",
    wall_est: "estimated",
    wall_meas: "measured",
    co2: "CO₂",
    target: "Target",
    mold: "Mold risk",
    mold_sensor: "Mold sensor",
    mold_hours: "{h} h above {v} % in {p} h",
    mold_hours_none: "never above {v} % in {p} h",
    surface_rh: "Humidity at the coldest wall spot",
    risk_low: "low",
    risk_medium: "elevated",
    risk_high: "high",
    condensation: "Condensation on the wall!",
    comfort: "Comfort",
    c_ok: "Comfortable",
    c_cold: "Too cold",
    c_warm: "Too warm",
    c_dry: "Too dry",
    c_humid: "Too humid",
    history: "History {h} h",
    window: "Window",
    open: "open",
    closed: "closed",
    v_now: "Ventilate now",
    v_ok: "No need to ventilate",
    v_useless: "Ventilating won't help",
    v_close: "Close the window",
    v_open: "Window open",
    v_cool: "Ventilate to cool down",
    v_keep: "Keep windows closed",
    v_heat: "Heating with open window",
    dur: "{m} min burst ventilation",
    dur_left: "about {m} min left",
    r_humid: "Humidity above {v} %",
    r_co2: "CO₂ above {v} ppm",
    r_mold: "Mold risk on cold walls",
    r_drier: "Outdoor air is drier ({o} vs {i} g/m³)",
    r_wetter: "Outdoor air is more humid ({o} vs {i} g/m³) – heat or dehumidify instead",
    r_after: "afterwards approx. {v} % RH",
    r_dry: "Indoor air is rather dry",
    r_open: "open for {m} min",
    r_hot: "It's warmer outside than inside",
    r_cooler: "Outside {o} °C – cooler than inside",
    r_nooutdoor: "No outdoor sensor – humidity comparison unavailable",
    r_co2_est: "CO₂ estimated above {v} ppm",
    wall_learned: "learned · {n} measurement|learned · {n} measurements",
    wl_title: "Measure wall spot",
    th_title: "Thermostats",
    fc_best: "Best time to ventilate today: {f}–{t} · {ah} g/m³ (now {n})",
    fc_now: "Now is the best time to ventilate today ({ah} g/m³)",
    fc_cool: "Ventilate to cool: {f}–{t} · {tmp} °C",
    fc_later: "Better ventilate {f}–{t} (outdoor ≈ {ah} g/m³)",
    tr_rising: "Humidity rising fast (+{d} % in 30 min)",
    vt_start: "Ventilation started",
    vt_stop: "Window closed",
    vt_left: "Ventilation timer: {m} min left",
    vt_done: "Time is up – close the window",
    hl_now: "Heat loss so far ≈ {k} kWh ({c})",
    hl_today: "today ≈ {k} kWh · {c}",
    hl_open: "≈ {k} kWh so far",
    v_cellar_closed: "Keep windows closed",
    r_cellar_dry: "Cellar ventilation: outdoor air dries (outdoor dew point {d} °C)",
    r_cellar_wet: "Outdoor dew point {d} °C above wall {w} °C – moisture would condense",
    r_cellar_wait: "Ventilate once the outdoor dew point drops below {w} °C",
    dev_dehum: "Dehumidifier",
    dev_hum: "Humidifier",
    dev_on: "on",
    dev_off: "off",
    dev_target: "target {v} %",
    adv_dehum_on: "Turn dehumidifier on",
    adv_dehum_off: "Turn dehumidifier off",
    adv_hum_on: "Turn humidifier on",
    adv_hum_off: "Turn humidifier off",
    mw_title: "Mold balance (week)",
    mw_hours: "{h} h",
    mw_sub: "Hours above {v} % at the wall, last 7 days",
    th_count: "{n} thermostats",
    th_heating: "{n} heating|{n} heating",
    th_off: "off",
    wl_hint: "Measure the coldest spot (outer wall corner, window reveal, behind a wardrobe) with an IR thermometer and enter the value. Best on cold days.",
    wl_input: "Measured wall temperature (°C)",
    wl_save: "Apply",
    wl_reset: "Reset learned values",
    wl_close: "Close",
    wl_now: "Wall factor fRsi {f} · {src}",
    wl_src_norm: "standard value",
    wl_src_room: "own value",
    wl_src_learned: "learned from {n} measurement(s)",
    wl_calc: "Outdoor 12 h avg: {o} °C · indoor {i} °C",
    wl_err_dt: "Too warm outside: at least 8 K difference indoor/outdoor needed (now {d} K).",
    wl_err_range: "Implausible (fRsi {f}) – please measure again.",
    wl_err_num: "Please enter a temperature, e.g. 12.5.",
    wl_err_noent: "No learning storage (input_text) set for this room.",
    wl_err_write: "Saving failed: {e}",
    wl_ok: "Saved: measurement gives fRsi {fi} → learned {f}",
    wl_outlier: "Large deviation – weighted less.",
    wl_auto: "Wall sensor is learning automatically",
    r_aq: "Air quality {l}: {w}",
    aq: "Air quality",
    aq_1: "excellent",
    aq_2: "good",
    aq_3: "moderate",
    aq_4: "poor",
    aq_5: "very poor",
    est: "estimated",
    persons: "{n} pers.",
    voc: "VOC",
    pm25: "PM2.5",
    pm10: "PM10",
    w_co2: "high CO₂",
    w_voc: "emissions (VOC)",
    w_pm25: "particulates PM2.5",
    w_pm10: "particulates PM10",
    r_heat: "Turn the heating down or close the window",
    sum_ok: "Everything looks fine",
    sum_vent: "{n} room to ventilate|{n} rooms to ventilate",
    sum_mold: "{n} × mold risk",
    back: "All rooms",
    unavailable: "unavailable",
    no_rooms: "Please add at least one room in the editor.",
  },
};

const AURA_DEFAULTS = {
  layout: "tabs",
  language: "auto",
  default_room: 1,
  tap_action: "more-info",
  show_title: true,
  show_outdoor: true,
  show_summary: true,
  show_tabs: true,
  tabs_mode: "wrap",
  blink: "warn",
  blink_speed: 1.2,
  show_gauge: true,
  show_ventilation: true,
  show_mold: true,
  show_comfort_chart: true,
  show_history: true,
  show_dewpoint: true,
  show_abs_humidity: true,
  show_wall: true,
  show_co2: true,
  show_window: true,
  show_target: true,
  show_mold_sensor: true,
  show_devices: true,
  show_air_quality: true,
  show_voc: true,
  show_pm: true,
  show_reasons: true,
  show_ah_compare: true,
  show_mold_hours: true,
  show_history_temp: true,
  show_history_hum: true,
  show_comfort_others: true,
  show_outdoor_in_chart: true,
  history_hours: 24,
  chart_temp_min: 14,
  chart_temp_max: 30,
  grid_min_width: 150,
  font_scale: 100,
  decimals_temp: 1,
  decimals_hum: 0,
  decimals_ah: 1,
  vent_min_freezing: 5,
  vent_min_cold: 10,
  vent_min_cool: 15,
  vent_min_mild: 20,
  vent_min_warm: 25,
  close_tolerance: 5,
  close_below: 15,
  heating_alarm: true,
  show_forecast: true,
  show_trends: true,
  show_heat_loss: true,
  heat_price: 0.12,
  currency: "€",
  show_mold_week: true,
  show_vent_timer: true,
  co2_estimate: true,
  co2_estimate_vent: true,
  co2_outdoor: 420,
  default_volume: 40,
  default_persons: 1,
  ach_closed: 0.3,
  ach_open: 6,
  aq_warn: 60,
  aq_alarm: 40,
  temp_min: 19,
  temp_max: 23,
  hum_min: 40,
  hum_max: 60,
  mold_warn: 75,
  mold_alarm: 80,
  co2_warn: 1000,
  co2_alarm: 1500,
  vent_threshold: 1.0,
  frsi: 0.7,
  color_temperature: "#ff8a50",
  color_humidity: "#29b6f6",
  color_ok: "#66bb6a",
  color_warn: "#ffa726",
  color_alarm: "#ef5350",
  color_info: "#42a5f5",
};

// Werte, die pro Raum überschrieben werden können
const AURA_ROOM_OVERRIDES = ["aq_warn", "aq_alarm", "temp_min", "temp_max", "hum_min", "hum_max", "mold_warn", "mold_alarm", "co2_warn", "co2_alarm", "vent_threshold", "frsi"];

/* ------------------------------------------------------------------ */
/*  Bauphysik                                                          */
/* ------------------------------------------------------------------ */
const Phys = {
  // Sättigungsdampfdruck in hPa (Magnus, über Wasser)
  es: (t) => 6.112 * Math.exp((17.62 * t) / (243.12 + t)),
  vapor: (t, rh) => (rh / 100) * Phys.es(t),
  // absolute Feuchte g/m³
  ah: (t, rh) => (216.7 * Phys.vapor(t, rh)) / (273.15 + t),
  dew: (t, rh) => {
    const g = Math.log(Math.max(Phys.vapor(t, rh), 0.01) / 6.112);
    return (243.12 * g) / (17.62 - g);
  },
  // relative Feuchte, die eine Luft mit Dampfdruck e bei Temperatur t hätte
  rhAt: (e, t) => Math.min(100, (e / Phys.es(t)) * 100),
  // Wandoberflächentemperatur über Temperaturfaktor fRsi (DIN 4108-2: 0,7)
  wall: (tin, tout, frsi) => (tout < tin ? tout + frsi * (tin - tout) : tin),
  // Stoßlüftdauer nach Außentemperatur
};

const LEVEL = { ok: 0, info: 1, warn: 2, alarm: 3 };

/* Luftqualität: Teil-Scores 0–100 (stückweise linear) */
const AQ = {
  lerp: (v, pts) => {
    if (v <= pts[0][0]) return pts[0][1];
    for (let i = 1; i < pts.length; i++) {
      const [x1, y1] = pts[i - 1],
        [x2, y2] = pts[i];
      if (v <= x2) return y1 + ((v - x1) / (x2 - x1)) * (y2 - y1);
    }
    return pts[pts.length - 1][1];
  },
  co2: (v) => AQ.lerp(v, [[600, 100], [800, 85], [1000, 70], [1400, 40], [2000, 10], [2500, 0]]),
  // VOC: ppb (tVOC), µg/m³ oder dimensionsloser Index (z. B. Sensirion VOC-Index, 100 = Normalwert)
  voc: (v, unit) => {
    const u = String(unit || "").toLowerCase();
    if (u.includes("ppb")) return AQ.lerp(v, [[200, 100], [500, 70], [1000, 40], [3000, 0]]);
    if (u.includes("µg") || u.includes("ug") || u.includes("mg")) {
      const x = u.includes("mg") ? v * 1000 : v;
      return AQ.lerp(x, [[300, 100], [1000, 60], [3000, 20], [5000, 0]]);
    }
    return AQ.lerp(v, [[100, 100], [150, 75], [250, 40], [400, 0]]);
  },
  pm25: (v) => AQ.lerp(v, [[5, 100], [15, 75], [25, 50], [50, 20], [75, 0]]),
  pm10: (v) => AQ.lerp(v, [[15, 100], [45, 70], [100, 30], [150, 0]]),
  label: (s) => (s >= 90 ? 1 : s >= 75 ? 2 : s >= 60 ? 3 : s >= 40 ? 4 : 5),
};

/* ------------------------------------------------------------------ */
/*  Hilfsfunktionen                                                    */
/* ------------------------------------------------------------------ */
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Einzelwert oder Liste → Liste (z. B. mehrere Thermostate pro Raum)
const toList = (v) => (Array.isArray(v) ? v : v ? [v] : []).filter((x) => typeof x === "string" && x);

const toColor = (v, fb) => {
  if (Array.isArray(v) && v.length === 3) return `rgb(${v.join(",")})`;
  if (typeof v === "string" && v.trim()) return v.trim();
  return fb;
};

const polar = (cx, cy, r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
};
const arc = (cx, cy, r, a1, a2) => {
  if (a2 - a1 < 0.01) return "";
  const [x1, y1] = polar(cx, cy, r, a1);
  const [x2, y2] = polar(cx, cy, r, a2);
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} A${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
};

const ICONS = {
  thermo: '<path d="M10 4a2 2 0 0 1 4 0v9.3a4 4 0 1 1-4 0z"/><path d="M12 9v7"/>',
  drop: '<path d="M12 3.5c3 3.8 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0c0-3 2.5-6.2 5.5-10z"/>',
  dew: '<path d="M12 3.5c3 3.8 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0c0-3 2.5-6.2 5.5-10z"/><path d="M9 14h6"/>',
  wall: '<path d="M4 5h16v14H4z"/><path d="M4 10h16M4 15h16M9 5v5M15 10v5M9 15v4"/>',
  co2: '<circle cx="8" cy="12" r="3.2"/><circle cx="16" cy="12" r="3.2"/><path d="M11.2 12h1.6"/>',
  wind: '<path d="M3 9h11a3 3 0 1 0-3-3"/><path d="M3 14h15a3 3 0 1 1-3 3"/><path d="M3 19h6"/>',
  window: '<path d="M5 3h14v18H5z"/><path d="M12 3v18M5 12h14"/>',
  windowOpen: '<path d="M5 3h14v18H5z"/><path d="M5 3l6 3v15l-6-0z"/>',
  check: '<circle cx="12" cy="12" r="8.5"/><path d="M8 12.5l2.7 2.7L16 9.8"/>',
  alert: '<path d="M12 3.5 21 19.5H3z"/><path d="M12 10v4.5M12 17v.3"/>',
  mold: '<circle cx="9" cy="10" r="2.5"/><circle cx="15.5" cy="8.5" r="1.6"/><circle cx="15" cy="15" r="3"/><circle cx="8" cy="16" r="1.3"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>',
  flame: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.3-4 2.5-5 .3 1.8 1.2 2.8 2.2 3.2C11 8.5 11 6 12 3z"/>',
  home: '<path d="M4 11 12 4l8 7v9H4z"/><path d="M10 20v-5h4v5"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  play: '<path d="M8 5.5v13l10-6.5z"/>',
  stop: '<rect x="7" y="7" width="10" height="10" rx="1.5"/>',
  euro: '<path d="M17 7.5a6 6 0 1 0 0 9"/><path d="M5 10.5h8M5 13.5h8"/>',
  dehum: '<path d="M12 3.5c3 3.8 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0c0-3 2.5-6.2 5.5-10z"/><path d="M4 4l16 16"/>',
  cellar: '<path d="M3 10 12 4l9 6"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  leaf: '<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19 13 11"/>',
  dust: '<circle cx="6" cy="8" r="1.4"/><circle cx="12" cy="6" r="1.1"/><circle cx="17" cy="9" r="1.6"/><circle cx="8" cy="14" r="1.2"/><circle cx="14" cy="13" r="1.4"/><circle cx="11" cy="19" r="1.1"/><circle cx="18" cy="17" r="1.2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>',
};
const icon = (name, cls = "") =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;

/* ------------------------------------------------------------------ */
/*  Karte                                                              */
/* ------------------------------------------------------------------ */
class AuraClimateCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement("aura-climate-card-editor");
  }

  static getStubConfig(hass) {
    const states = Object.values(hass?.states || {});
    const find = (dc, not = []) =>
      states.filter((s) => s.attributes?.device_class === dc && !not.includes(s.entity_id)).map((s) => s.entity_id);
    const temps = find("temperature");
    const hums = find("humidity");
    const outRx = /(au(ss|ß)en|outdoor|outside|garten|balkon|wetter|weather)/i;
    const outT = temps.find((e) => outRx.test(e));
    const outH = hums.find((e) => outRx.test(e));
    const inT = temps.find((e) => e !== outT);
    const inH = hums.find((e) => e !== outH);
    return {
      outdoor_temperature: outT || "",
      outdoor_humidity: outH || "",
      rooms: [{ name: "Wohnzimmer", temperature: inT || "", humidity: inH || "" }],
    };
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._sel = 0;
    this._detail = null;
    this._hist = null;
    this._histAt = 0;
    this._sig = "";
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = { ...AURA_DEFAULTS, ...config };
    this._rooms = Array.isArray(config.rooms) ? config.rooms.filter((r) => r && typeof r === "object") : [];
    const dr = Math.round(Number(this._config.default_room) || 1) - 1;
    if (this._defRoom !== dr) {
      this._defRoom = dr;
      this._sel = dr;
    }
    if (this._sel >= this._rooms.length || this._sel < 0) this._sel = 0;
    this._sig = "";
    this._hist = null;
    this._histAt = 0;
    this._week = null;
    this._weekAt = 0;
    if (this._fcEntity !== this._config.weather) this._unsubForecast();
    if (this._hass) this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  connectedCallback() {
    this._tick = 0;
    this._timer = setInterval(() => {
      this._tick++;
      // jede Minute neu zeichnen, bei laufendem Timer / offenem Fenster alle 15 s
      const busy = (this._all || []).some((a) => a.windowOpen || a.timer);
      if (busy || this._tick % 4 === 0) {
        this._sig = "";
        this._update();
      }
    }, 15000);
    if (this._hass) this._update();
  }
  disconnectedCallback() {
    clearInterval(this._timer);
    this._unsubForecast();
  }

  getCardSize() {
    return this._config?.layout === "grid" ? 4 : 8;
  }
  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: "auto" };
  }

  /* ---------- Texte ---------- */
  get _lang() {
    const l = this._config?.language;
    if (l && l !== "auto") return AURA_I18N[l] ? l : "en";
    const h = (this._hass?.locale?.language || this._hass?.language || "en").slice(0, 2);
    return AURA_I18N[h] ? h : "en";
  }
  _t(key, vars = {}) {
    let s = AURA_I18N[this._lang][key] ?? AURA_I18N.en[key] ?? key;
    if (s.includes("|")) s = s.split("|")[vars.n === 1 ? 0 : 1];
    return s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ""));
  }
  _n(v, d = 1) {
    if (v == null || !isFinite(v)) return "–";
    return new Intl.NumberFormat(this._lang === "de" ? "de-DE" : "en-US", {
      minimumFractionDigits: d,
      maximumFractionDigits: d,
    }).format(v);
  }

  /* ---------- Daten ---------- */
  _st(id) {
    return id ? this._hass?.states?.[id] : undefined;
  }
  _num(id) {
    const s = this._st(id);
    if (!s) return null;
    const v = parseFloat(s.state);
    return isFinite(v) ? v : null;
  }

  _cfgFor(room) {
    const c = { ...this._config };
    c.frsiSrc = "norm";
    AURA_ROOM_OVERRIDES.forEach((k) => {
      const v = room?.[k];
      if (v !== undefined && v !== null && v !== "" && isFinite(Number(v))) {
        c[k] = Number(v);
        if (k === "frsi") c.frsiSrc = "room";
      }
    });
    const L = this._learned(room);
    if (L && L.n > 0) {
      c.frsi = L.f;
      c.frsiSrc = "learned";
      c.frsiN = L.n;
    }
    return c;
  }

  /* ---------- Wandpunkt-Lernen ----------
     Speicher (input_text): "f;w;n;tMess;tAuto"
     f = gelernter Wandfaktor, w = Summe der Gewichte (gedeckelt), n = Anzahl Messungen */
  _learned(room) {
    const st = this._st(room?.wall_learn);
    if (!st) return null;
    const p = String(st.state || "").split(";");
    const f = parseFloat(p[0]);
    if (!isFinite(f)) return { f: null, w: 0, n: 0, tm: 0, ta: 0 };
    return { f, w: parseFloat(p[1]) || 0, n: parseInt(p[2]) || 0, tm: (parseInt(p[3]) || 0) * 1000, ta: (parseInt(p[4]) || 0) * 1000 };
  }
  async _saveLearned(room, L) {
    const v = `${L.f.toFixed(3)};${L.w.toFixed(2)};${L.n};${Math.round(L.tm / 1000)};${Math.round(L.ta / 1000)}`;
    await this._hass.callService("input_text", "set_value", { entity_id: room.wall_learn, value: v });
  }
  _blend(L, fi, wi) {
    const base = L && L.n > 0 && isFinite(L.f) ? L : { f: fi, w: 0, n: 0, tm: 0, ta: L?.ta || 0 };
    const w = base.w + wi;
    return { ...base, f: (base.f * base.w + fi * wi) / w, w: Math.min(w, 20), n: base.n + 1 };
  }
  // zeitgewichteter Mittelwert einer Treppenfunktion über [from, to]
  _mean(series, from, to) {
    if (!series?.length) return null;
    let sum = 0,
      dur = 0,
      v = this._at(series, from),
      t = from;
    for (const p of series) {
      if (p.t <= from) continue;
      if (p.t >= to) break;
      if (v != null) {
        sum += v * (p.t - t);
        dur += p.t - t;
      }
      v = p.v;
      t = p.t;
    }
    if (v != null) {
      sum += v * (to - t);
      dur += to - t;
    }
    return dur > 0 ? sum / dur : null;
  }
  // Wände reagieren träge → Außentemperatur als Mittel der letzten 12 h
  _outdoorLag() {
    const O = this._hist?.map?.[this._config.outdoor_temperature];
    const now = Date.now();
    const m = O ? this._mean(O, now - 12 * 3600e3, now) : null;
    return m ?? this._outdoor().t;
  }
  async _measureWall(idx, tw) {
    const room = this._rooms[idx];
    const L0 = this._learned(room);
    const msg = (k, v = {}) => ({ ok: false, text: this._t(k, v) });
    if (!L0) return msg("wl_err_noent");
    const tin = this._num(room.temperature);
    const tout = this._outdoorLag();
    if (!isFinite(tw)) return msg("wl_err_num");
    if (tin == null || tout == null) return msg("wl_err_dt", { d: "–" });
    const dT = tin - tout;
    if (dT < 8) return msg("wl_err_dt", { d: this._n(dT, 1) });
    const fi = (tw - tout) / dT;
    if (fi < 0.3 || fi > 1.02) return msg("wl_err_range", { f: this._n(fi, 2) });
    let wi = Math.min(1, dT / 15);
    let outlier = false;
    if (L0.n >= 3 && Math.abs(fi - L0.f) > 0.15) {
      wi *= 0.3;
      outlier = true;
    }
    const L = this._blend(L0, Math.min(1, fi), wi);
    L.tm = Date.now();
    try {
      await this._saveLearned(room, L);
    } catch (e) {
      return msg("wl_err_write", { e: e?.message || e });
    }
    return { ok: true, text: this._t("wl_ok", { fi: this._n(fi, 2), f: this._n(L.f, 2) }) + (outlier ? " " + this._t("wl_outlier") : "") };
  }
  // automatisch lernen, solange ein Wandsensor im Raum hängt (nicht überlappende Zeitfenster)
  async _autoLearn() {
    const h = this._hist;
    if (!h) return;
    for (const room of this._rooms) {
      if (!room.wall_temperature || !room.wall_learn) continue;
      const L0 = this._learned(room);
      if (!L0 || h.to - L0.ta < (h.to - h.from) * 0.98) continue;
      const W = h.map[room.wall_temperature],
        T = h.map[room.temperature],
        O = h.map[this._config.outdoor_temperature];
      if (!W?.length || !T?.length || !O?.length) continue;
      const from = Math.max(h.from, W[0].t);
      const hours = (h.to - from) / 3600e3;
      if (hours < 6) continue;
      const tw = this._mean(W, from, h.to),
        ti = this._mean(T, from, h.to),
        to = this._mean(O, from, h.to);
      if (tw == null || ti == null || to == null || ti - to < 8) continue;
      const fi = (tw - to) / (ti - to);
      if (fi < 0.3 || fi > 1.02) continue;
      const wi = Math.min(1, hours / 24) * Math.min(1, (ti - to) / 15) * 1.5;
      const L = this._blend(L0, Math.min(1, fi), wi);
      L.ta = h.to;
      try {
        await this._saveLearned(room, L);
      } catch (e) {
        console.warn("aura-climate-card: auto-learn", e);
      }
    }
  }
  _ventMinutes(tout) {
    const c = this._config;
    return Number(tout < 0 ? c.vent_min_freezing : tout < 10 ? c.vent_min_cold : tout < 15 ? c.vent_min_cool : tout < 20 ? c.vent_min_mild : c.vent_min_warm);
  }
  get _dT() { return Math.max(0, Math.min(2, Number(this._config.decimals_temp) || 0)); }
  get _dH() { return Math.max(0, Math.min(2, Number(this._config.decimals_hum) || 0)); }
  get _dA() { return Math.max(0, Math.min(2, Number(this._config.decimals_ah) || 0)); }

  /* CO₂-Schätzung über Massenbilanz: dC/dt = N·G/V − n·(C − C_außen)
     G = 0,016 m³/h CO₂ pro Person (Ruhe/leichte Tätigkeit), n = Luftwechsel 1/h.
     Zeitverlauf aus dem letzten Fenster- und Anwesenheitswechsel (analytisch, stückweise). */
  _estimateCo2(room, c) {
    const V = Number(room.volume ?? c.default_volume);
    if (!(V > 0)) return null;
    // Ohne Anwesenheitssensor wird nur geschätzt, wenn beim Raum Personen eingetragen sind
    const hasPresence = !!this._st(room.presence);
    const baseP = Number(room.persons ?? (hasPresence ? c.default_persons : 0));
    const cOut = Number(c.co2_outdoor) || 420;
    const nClosed = Math.max(0.05, Number(room.ach ?? c.ach_closed) || 0.3);
    const nOpen = Math.max(nClosed, Number(c.ach_open) || 6);
    const G = 0.016;
    const now = Date.now();
    const H24 = 24 * 3600e3;

    // Anwesenheit: binary → an/aus, numerisch → Personenzahl
    const ps = this._st(room.presence);
    let pNow = baseP,
      pPrev = baseP,
      pChange = null;
    if (ps) {
      const v = parseFloat(ps.state);
      if (isFinite(v)) pNow = pPrev = v;
      else {
        const on = ["on", "home", "true", "detected", "occupied"].includes(String(ps.state).toLowerCase());
        pNow = on ? baseP || 1 : 0;
        pPrev = on ? 0 : baseP || 1;
        pChange = new Date(ps.last_changed).getTime();
      }
    }
    if (!(pNow >= 0)) return null;
    if (!ps && !(baseP > 0)) return null; // 0 Personen ohne Anwesenheitssensor → keine Schätzung

    const ws = this._st(room.window);
    const wOpenNow = !!ws && ["on", "open", "opening", "tilted", "true"].includes(String(ws.state).toLowerCase());
    const wChange = ws ? new Date(ws.last_changed).getTime() : null;

    // Zeitpunkte sammeln (max. 24 h zurück)
    const events = [];
    if (wChange && now - wChange < H24) events.push(wChange);
    if (pChange && now - pChange < H24) events.push(pChange);
    events.sort((x, y) => x - y);
    const stateAt = (ts) => ({
      open: wChange && ts < wChange ? !wOpenNow : wOpenNow,
      p: pChange && ts < pChange ? pPrev : pNow,
    });
    const css = (st) => {
      const n = st.open ? nOpen : nClosed;
      return { n, c: cOut + (st.p * G * 1e6) / (n * V) };
    };
    // Startwert: Gleichgewicht des ältesten Zustands
    let t = events.length ? events[0] - 1 : now;
    let C = css(stateAt(t)).c;
    const pts = [...events, now];
    for (let i = 0; i < pts.length; i++) {
      const from = i === 0 ? t : pts[i - 1];
      const to = pts[i];
      const seg = css(stateAt((from + to) / 2));
      const dtH = Math.max(0, (to - from) / 3600e3);
      C = seg.c + (C - seg.c) * Math.exp(-seg.n * dtH);
    }
    return { ppm: Math.round(C / 10) * 10, persons: pNow };
  }

  _outdoor() {
    const c = this._config;
    const t = this._num(c.outdoor_temperature);
    const rh = this._num(c.outdoor_humidity);
    const ok = t != null && rh != null;
    return { t, rh, ah: ok ? Phys.ah(t, rh) : null, ok, hasT: t != null };
  }

  _analyze(room, out) {
    const c = this._cfgFor(room);
    const t = this._num(room.temperature);
    const rh = this._num(room.humidity);
    const a = { room, t, rh, valid: t != null && rh != null, level: "ok", reasons: [], cfg: c };
    a.co2 = this._num(room.co2);
    a.co2Est = false;
    if (a.co2 == null && c.co2_estimate) {
      const est = this._estimateCo2(room, c);
      if (est) {
        a.co2 = est.ppm;
        a.co2Est = true;
        a.persons = est.persons;
      }
    }
    a.voc = this._num(room.voc);
    a.vocUnit = this._st(room.voc)?.attributes?.unit_of_measurement;
    a.pm25 = this._num(room.pm25);
    a.pm10 = this._num(room.pm10);
    const subs = [];
    if (a.co2 != null) subs.push(["co2", AQ.co2(a.co2)]);
    if (a.voc != null) subs.push(["voc", AQ.voc(a.voc, a.vocUnit)]);
    if (a.pm25 != null) subs.push(["pm25", AQ.pm25(a.pm25)]);
    if (a.pm10 != null) subs.push(["pm10", AQ.pm10(a.pm10)]);
    if (subs.length) {
      subs.sort((x, y) => x[1] - y[1]);
      a.aq = Math.round(subs[0][1]);
      a.aqWorst = subs[0][0];
      a.aqOnlyEst = a.co2Est && subs.length === 1;
      a.aqLevel = a.aq < c.aq_alarm ? "alarm" : a.aq < c.aq_warn ? "warn" : "ok";
      if (a.aqOnlyEst && a.aqLevel === "alarm") a.aqLevel = "warn";
    }
    a.moldSensor = this._num(room.mold);
    // Thermostate (eins oder mehrere)
    a.climates = toList(room.climate)
      .map((id) => this._st(id))
      .filter(Boolean)
      .map((st) => {
        const at = st.attributes || {};
        const heating = at.hvac_action === "heating" || (at.hvac_action == null && st.state === "heat");
        const tg = at.temperature ?? at.target_temp_low ?? null;
        return {
          id: st.entity_id,
          name: at.friendly_name || st.entity_id,
          target: tg != null && isFinite(Number(tg)) ? Number(tg) : null,
          current: at.current_temperature != null ? Number(at.current_temperature) : null,
          off: st.state === "off",
          heating,
        };
      });
    const tg = a.climates.filter((x) => !x.off && x.target != null).map((x) => x.target);
    a.targetMin = tg.length ? Math.min(...tg) : null;
    a.targetMax = tg.length ? Math.max(...tg) : null;
    a.target = tg.length ? tg.reduce((x, y) => x + y, 0) / tg.length : room.target_temperature != null ? Number(room.target_temperature) : null;
    a.heatingCount = a.climates.filter((x) => x.heating).length;
    a.heating = a.heatingCount > 0;
    const w = this._st(room.window);
    a.hasWindow = !!w;
    a.windowOpen = !!w && ["on", "open", "opening", "tilted", "true"].includes(String(w.state).toLowerCase());
    a.openMin = a.windowOpen ? Math.max(0, Math.round((Date.now() - new Date(w.last_changed).getTime()) / 60000)) : 0;

    if (!a.valid) return a;

    a.e = Phys.vapor(t, rh);
    a.ah = Phys.ah(t, rh);
    a.dew = Phys.dew(t, rh);

    // Wandoberfläche
    const wallMeas = this._num(room.wall_temperature);
    if (wallMeas != null) {
      a.wall = wallMeas;
      a.wallEst = false;
    } else if (out.hasT) {
      a.wall = Phys.wall(t, out.t, Number(c.frsi));
      a.wallEst = c.frsiSrc !== "learned";
      a.wallLearned = c.frsiSrc === "learned";
    } else {
      a.wall = t - 3;
      a.wallEst = true;
    }
    a.surfRh = Phys.rhAt(a.e, a.wall);
    a.condensation = a.wall <= a.dew;
    a.mold = a.surfRh >= c.mold_alarm || a.condensation ? "high" : a.surfRh >= c.mold_warn ? "medium" : "low";

    // Behaglichkeit
    a.comfort = [];
    if (t < c.temp_min) a.comfort.push("c_cold");
    if (t > c.temp_max) a.comfort.push("c_warm");
    if (rh < c.hum_min) a.comfort.push("c_dry");
    if (rh > c.hum_max) a.comfort.push("c_humid");

    a.trT = this._trend(room.temperature, t, "t");
    a.trH = this._trend(room.humidity, rh, "h");
    a.trC = room.co2 ? this._trend(room.co2, a.co2, "c") : null;
    a.cellar = room.room_type === "cellar";
    const dev = (id) => {
      const st = this._st(id);
      if (!st) return null;
      return { id, on: ["on", "true", "home"].includes(String(st.state).toLowerCase()), target: st.attributes?.humidity ?? null };
    };
    a.dehum = dev(room.dehumidifier);
    a.hum = dev(room.humidifier);

    this._ventilation(a, out);
    this._afterVentilation(a, out);

    const moldLvl = a.mold === "high" ? "alarm" : a.mold === "medium" ? "warn" : "ok";
    a.level = LEVEL[moldLvl] > LEVEL[a.vLevel] ? moldLvl : a.vLevel;
    if (a.aqLevel && LEVEL[a.aqLevel] > LEVEL[a.level]) a.level = a.aqLevel;
    return a;
  }

  _ventilation(a, out) {
    const c = a.cfg;
    const R = a.reasons;
    const needs = [];
    if (a.rh > c.hum_max || (a.trH?.strong && a.trH.dir > 0 && a.rh > c.hum_max - 8)) needs.push("humid");
    if (a.mold !== "low") needs.push("mold");
    if (a.co2 != null && a.co2 >= c.co2_warn && (!a.co2Est || c.co2_estimate_vent)) needs.push("co2");
    if (a.aq != null && a.aqWorst !== "co2" && a.aqLevel !== "ok" && !needs.includes("co2")) needs.push("co2");

    a.duration = out.hasT ? this._ventMinutes(out.t) : Number(c.vent_min_cold);
    if (out.ok) {
      a.drier = out.ah < a.ah - Number(c.vent_threshold);
      // Außenluft auf Raumtemperatur erwärmt → rel. Feuchte nach dem Lüften
      a.rhAfter = Phys.rhAt((out.ah * (273.15 + a.t)) / 216.7, a.t);
    }
    const cooling = out.hasT && a.t > c.temp_max && out.t < a.t - 2;
    const hotOut = out.hasT && out.t > a.t + 1 && a.t >= c.temp_max - 1;
    const ahTxt = () => ({ o: this._n(out.ah, this._dA), i: this._n(a.ah, this._dA) });

    let key = "v_ok",
      lvl = "ok";

    if (a.cellar && out.ok) {
      // Taupunktlüftung: nur lüften, wenn die Außenluft trocknet und an kalten Flächen nicht kondensiert
      const outDew = Phys.dew(out.t, out.rh);
      const cold = Math.min(a.wall ?? a.t, a.t);
      const safe = outDew < cold - 1 && a.drier;
      const dTxt = { d: this._n(outDew, 1), w: this._n(cold, 1) };
      if (a.windowOpen) {
        R.push(this._t("r_open", { m: a.openMin }));
        if (!safe) {
          key = "v_close";
          lvl = "warn";
          R.push(this._t("r_cellar_wet", dTxt));
        } else {
          key = "v_open";
          lvl = "info";
          R.push(this._t("r_cellar_dry", dTxt));
        }
      } else if (needs.includes("humid") || needs.includes("mold")) {
        if (needs.includes("humid")) R.push(this._t("r_humid", { v: c.hum_max }));
        if (needs.includes("mold")) R.push(this._t("r_mold"));
        if (safe) {
          key = "v_now";
          lvl = a.mold === "high" ? "alarm" : "warn";
          R.push(this._t("r_cellar_dry", dTxt));
        } else {
          key = "v_cellar_closed";
          lvl = a.mold === "high" ? "alarm" : "info";
          R.push(outDew >= cold - 1 ? this._t("r_cellar_wet", dTxt) : this._t("r_wetter", ahTxt()));
          R.push(this._t("r_cellar_wait", dTxt));
        }
      } else if (needs.includes("co2")) {
        key = "v_now";
        lvl = "warn";
        R.push(this._t("r_co2", { v: c.co2_warn }));
      }
      a.vKey = key;
      a.vLevel = lvl;
      a.showDuration = key === "v_now";
      return;
    }

    if (a.windowOpen) {
      R.push(this._t("r_open", { m: a.openMin }));
      if (c.heating_alarm && a.heating && out.hasT && out.t < c.close_below) {
        key = "v_heat";
        lvl = "alarm";
        R.push(this._t("r_heat"));
      } else if (hotOut) {
        key = "v_close";
        lvl = "warn";
        R.push(this._t("r_hot"));
      } else if (out.hasT && out.t < c.close_below && a.openMin > a.duration + Number(c.close_tolerance) && !needs.includes("co2")) {
        key = "v_close";
        lvl = "warn";
      } else {
        key = "v_open";
        lvl = "info";
        const left = a.duration - a.openMin;
        if (left > 0 && out.hasT && out.t < c.close_below) R.push(this._t("dur_left", { m: left }));
      }
    } else if (needs.length) {
      if (needs.includes("humid")) R.push(a.rh > c.hum_max ? this._t("r_humid", { v: c.hum_max }) : this._t("tr_rising", { d: this._n(a.trH.d, 0) }));
      if (needs.includes("mold")) R.push(this._t("r_mold"));
      if (needs.includes("co2")) {
        if (a.aq != null && a.aqWorst !== "co2" && a.aqLevel !== "ok")
          R.push(this._t("r_aq", { l: this._t("aq_" + AQ.label(a.aq)), w: this._t("w_" + a.aqWorst) }));
        else R.push(this._t(a.co2Est ? "r_co2_est" : "r_co2", { v: c.co2_warn }));
      }
      const co2Only = needs.length === 1 && needs[0] === "co2";
      if (!out.ok) {
        key = "v_now";
        lvl = "warn";
        if (!co2Only) R.push(this._t("r_nooutdoor"));
      } else if (a.drier || co2Only) {
        key = "v_now";
        lvl = a.mold === "high" || (!a.co2Est && (a.co2 ?? 0) >= c.co2_alarm) || a.aqLevel === "alarm" ? "alarm" : "warn";
        if (a.drier) {
          R.push(this._t("r_drier", ahTxt()));
          R.push(this._t("r_after", { v: this._n(a.rhAfter, this._dH) }));
        }
      } else if (needs.includes("co2")) {
        key = "v_now";
        lvl = "warn";
        R.push(this._t("r_wetter", ahTxt()));
      } else {
        key = "v_useless";
        lvl = a.mold === "high" ? "alarm" : "info";
        R.push(this._t("r_wetter", ahTxt()));
      }
    } else if (cooling) {
      key = "v_cool";
      lvl = "info";
      R.push(this._t("r_cooler", { o: this._n(out.t, this._dT) }));
    } else if (hotOut) {
      key = "v_keep";
      lvl = "info";
      R.push(this._t("r_hot"));
    } else if (a.rh < c.hum_min) {
      R.push(this._t("r_dry"));
    }
    a.vKey = key;
    a.vLevel = lvl;
    a.showDuration = key === "v_now" || key === "v_cool";
  }

  _afterVentilation(a, out) {
    const c = a.cfg;
    const R = a.reasons;
    const idx = this._rooms.indexOf(a.room);
    // Lüft-Timer (ohne Fenstersensor manuell, mit Sensor automatisch)
    if (a.windowOpen) {
      a.timer = { elapsed: a.openMin, dur: a.duration, auto: true };
    } else if (!a.hasWindow && c.show_vent_timer) {
      const T = this._timers();
      const k = this._timerKey(a.room, idx);
      if (T[k]) {
        const el = (Date.now() - T[k]) / 60000;
        if (el > a.duration + 60) {
          delete T[k];
          this._saveTimers();
        } else {
          a.timer = { elapsed: Math.floor(el), dur: a.duration, auto: false, start: T[k] };
          a.reasons.length = 0;
          if (el >= a.duration) {
            a.vKey = "v_close";
            a.vLevel = "warn";
            R.push(this._t("vt_done"));
          } else {
            a.vKey = "v_open";
            a.vLevel = "info";
            R.push(this._t("vt_left", { m: Math.ceil(a.duration - el) }));
          }
          a.showDuration = false;
        }
      }
    }
    // Heizverlust
    a.loss = this._heatLoss(a, out);
    if (a.loss && a.windowOpen && a.loss.nowKwh >= 0.01) R.push(this._t("hl_now", a.loss.now));
    // Ent-/Befeuchter-Empfehlung
    a.advice = [];
    if (a.dehum) {
      // nur nicht empfehlen, wenn Lüften die Feuchte selbst senkt
      const want = !a.windowOpen && (a.rh > c.hum_max || a.mold !== "low") && !(a.vKey === "v_now" && a.drier);
      if (!a.dehum.on && want) a.advice.push({ id: a.dehum.id, svc: "turn_on", key: "adv_dehum_on" });
      else if (a.dehum.on && (a.windowOpen || a.rh < c.hum_min + 5)) a.advice.push({ id: a.dehum.id, svc: "turn_off", key: "adv_dehum_off" });
    }
    if (a.hum) {
      if (!a.hum.on && !a.windowOpen && a.rh < c.hum_min) a.advice.push({ id: a.hum.id, svc: "turn_on", key: "adv_hum_on" });
      else if (a.hum.on && (a.windowOpen || a.rh > c.hum_max - 5)) a.advice.push({ id: a.hum.id, svc: "turn_off", key: "adv_hum_off" });
    }
    // Vorhersage-Hinweis, wenn Lüften jetzt nichts bringt
    const bt = this._best;
    if (bt && bt.mode === "dry" && (a.vKey === "v_useless" || a.vKey === "v_cellar_closed") && bt.ah < a.ah - Number(c.vent_threshold))
      R.push(this._t("fc_later", { f: this._hourFmt(bt.from), t: this._hourFmt(bt.to), ah: this._n(bt.ah, this._dA) }));
  }

  /* ---------- Verlauf ---------- */
  async _loadHistory() {
    const c = this._config;
    if (!this._hass || (!c.show_history && !c.show_mold && !c.show_trends && !c.show_heat_loss)) return;
    if (this._histLoading || Date.now() - this._histAt < 10 * 60 * 1000) return;
    const ids = new Set([c.outdoor_temperature]);
    this._rooms.forEach((r) => [r.temperature, r.humidity, r.wall_temperature, r.co2, r.window].forEach((i) => ids.add(i)));
    const list = [...ids].filter((i) => i && this._hass.states[i]);
    if (!list.length) return;
    this._histLoading = true;
    try {
      const hours = Math.max(1, Math.min(168, Number(c.history_hours) || 24));
      const start = new Date(Date.now() - hours * 3600e3).toISOString();
      const res = await this._hass.callApi(
        "GET",
        `history/period/${start}?filter_entity_id=${list.join(",")}&minimal_response&no_attributes&significant_changes_only=0`
      );
      const { map, raw } = this._parseHistory(res);
      this._hist = { map, raw, hours, from: Date.now() - hours * 3600e3, to: Date.now() };
      this._histAt = Date.now();
      this._sig = "";
      this._update();
      this._autoLearn();
    } catch (e) {
      this._histAt = Date.now();
      console.warn("aura-climate-card: history", e);
    } finally {
      this._histLoading = false;
    }
  }

  _parseHistory(res) {
    const map = {},
      raw = {};
    (res || []).forEach((arr) => {
      if (!arr?.length) return;
      const id = arr[0].entity_id;
      const pts = arr.map((p) => ({ t: new Date(p.last_changed || p.last_updated).getTime(), s: p.state })).filter((p) => isFinite(p.t));
      raw[id] = pts;
      map[id] = pts.map((p) => ({ t: p.t, v: parseFloat(p.s) })).filter((p) => isFinite(p.v));
    });
    return { map, raw };
  }

  // 7 Tage Verlauf für die Schimmel-Wochenbilanz (stündlich aktualisiert)
  async _loadWeek() {
    const c = this._config;
    if (!this._hass || !c.show_mold_week || this._weekLoading || Date.now() - this._weekAt < 60 * 60 * 1000) return;
    const ids = new Set([c.outdoor_temperature]);
    this._rooms.forEach((r) => [r.temperature, r.humidity, r.wall_temperature].forEach((i) => ids.add(i)));
    const list = [...ids].filter((i) => i && this._hass.states[i]);
    if (!list.length) return;
    this._weekLoading = true;
    try {
      const from = Date.now() - 168 * 3600e3;
      const res = await this._hass.callApi(
        "GET",
        `history/period/${new Date(from).toISOString()}?filter_entity_id=${list.join(",")}&minimal_response&no_attributes`
      );
      this._week = { map: this._parseHistory(res).map, hours: 168, from, to: Date.now() };
      this._weekAt = Date.now();
      this._sig = "";
      this._update();
    } catch (e) {
      this._weekAt = Date.now();
      console.warn("aura-climate-card: week history", e);
    } finally {
      this._weekLoading = false;
    }
  }

  // Trend über die letzten 30 min: { d, dir, strong } oder null
  _trend(id, cur, kind) {
    if (!this._config.show_trends || cur == null) return null;
    const s = this._hist?.map?.[id];
    if (!s?.length) return null;
    const past = this._at(s, Date.now() - 30 * 60e3);
    if (past == null || s[0].t > Date.now() - 30 * 60e3) return null;
    const d = cur - past;
    const [weak, strong] = kind === "t" ? [0.3, 1] : kind === "h" ? [3, 8] : [100, 300];
    if (Math.abs(d) < weak) return null;
    return { d, dir: d > 0 ? 1 : -1, strong: Math.abs(d) >= strong };
  }
  _arrow(tr, unit, dec) {
    if (!tr) return "";
    const ch = tr.dir > 0 ? (tr.strong ? "↑" : "↗") : tr.strong ? "↓" : "↘";
    return `<span class="trend ${tr.dir > 0 ? "up" : "dn"} ${tr.strong ? "strong" : ""}" title="${tr.d > 0 ? "+" : ""}${this._n(tr.d, dec)} ${unit} / 30 min">${ch}</span>`;
  }

  /* ---------- Wettervorhersage ---------- */
  async _subscribeForecast() {
    const c = this._config;
    if (!c.weather || !c.show_forecast || !this._hass?.connection || this._fcEntity === c.weather || this._fcPending) return;
    if (!this._hass.states[c.weather]) return;
    this._fcPending = true;
    try {
      this._fcUnsub = await this._hass.connection.subscribeMessage(
        (m) => {
          this._fc = Array.isArray(m?.forecast) ? m.forecast : [];
          this._sig = "";
          this._update();
        },
        { type: "weather/subscribe_forecast", entity_id: c.weather, forecast_type: "hourly" }
      );
      this._fcEntity = c.weather;
    } catch (e) {
      console.warn("aura-climate-card: forecast (hourly) not available", e);
      this._fcEntity = c.weather;
      this._fc = null;
    } finally {
      this._fcPending = false;
    }
  }
  _unsubForecast() {
    try {
      if (typeof this._fcUnsub === "function") this._fcUnsub();
    } catch (e) {
      /* ignore */
    }
    this._fcUnsub = null;
    this._fcEntity = null;
    this._fc = null;
  }
  _hourFmt(ts) {
    return new Intl.DateTimeFormat(this._lang === "de" ? "de-DE" : "en-US", { hour: "2-digit", minute: this._lang === "de" ? undefined : "2-digit" })
      .format(new Date(ts))
      .replace(/\s?Uhr$/, "");
  }
  // bestes 2-h-Fenster: trockenste Außenluft (Heizperiode) oder kühlste Luft (Sommer)
  _bestTime(all) {
    const c = this._config;
    if (!c.show_forecast || !Array.isArray(this._fc) || !this._fc.length) return null;
    const now = Date.now();
    const pts = this._fc
      .map((f) => {
        const ts = new Date(f.datetime).getTime();
        const T = Number(f.temperature);
        const rh = f.humidity != null ? Number(f.humidity) : null;
        const td = f.dew_point != null ? Number(f.dew_point) : null;
        let ah = null;
        if (isFinite(T) && rh != null && isFinite(rh)) ah = Phys.ah(T, rh);
        else if (isFinite(T) && td != null && isFinite(td)) ah = (216.7 * Phys.es(td)) / (273.15 + T);
        const rain = Number(f.precipitation_probability ?? 0) > 60 || Number(f.precipitation ?? 0) > 0.3;
        return { ts, T, ah, rain };
      })
      .filter((p) => isFinite(p.ts) && isFinite(p.T) && p.ts >= now - 45 * 60e3 && p.ts <= now + 18 * 3600e3)
      .sort((a, b) => a.ts - b.ts);
    if (pts.length < 2) return null;
    const valid = all.filter((a) => a.valid);
    const tin = valid.length ? valid.reduce((x, a) => x + a.t, 0) / valid.length : null;
    const hourOf = (ts) => new Date(ts).getHours();
    const blocks = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i],
        b = pts[i + 1];
      if (b.ts - a.ts > 2 * 3600e3 || a.rain || b.rain) continue;
      blocks.push({ from: a.ts, to: b.ts + 3600e3, T: (a.T + b.T) / 2, ah: a.ah != null && b.ah != null ? (a.ah + b.ah) / 2 : null, i });
    }
    if (!blocks.length) return null;
    // Sommer: drinnen zu warm und es wird draußen deutlich kühler
    if (tin != null && tin > c.temp_max) {
      const cool = blocks.filter((b) => b.T < tin - 2).sort((x, y) => x.T - y.T)[0];
      if (cool) return { mode: "cool", ...cool };
    }
    const day = blocks.filter((b) => b.ah != null && hourOf(b.from) >= 7 && hourOf(b.from) <= 21);
    if (!day.length) return null;
    const best = day.slice().sort((x, y) => x.ah - y.ah)[0];
    const nowBlock = day.find((b) => b.from <= now + 30 * 60e3);
    const nowGood = nowBlock && nowBlock.ah - best.ah < 0.3;
    return { mode: "dry", ...best, nowGood };
  }

  // Wert einer Treppenfunktion zum Zeitpunkt ts
  _at(series, ts) {
    if (!series?.length) return null;
    let v = series[0].v;
    for (const p of series) {
      if (p.t > ts) break;
      v = p.v;
    }
    return v;
  }

  _moldHours(room, h = this._hist, stepMin = 5) {
    const rc = this._cfgFor(room);
    if (!h) return null;
    const T = h.map[room.temperature],
      H = h.map[room.humidity];
    if (!T?.length || !H?.length) return null;
    const W = h.map[room.wall_temperature];
    const O = h.map[this._config.outdoor_temperature];
    const step = stepMin * 60e3;
    let above = 0;
    for (let ts = h.from + step / 2; ts < h.to; ts += step) {
      const t = this._at(T, ts),
        rh = this._at(H, ts);
      if (t == null || rh == null) continue;
      let wall;
      const wv = W ? this._at(W, ts) : null;
      const ov = O ? this._at(O, ts) : null;
      if (wv != null) wall = wv;
      else if (ov != null) wall = Phys.wall(t, ov, Number(rc.frsi));
      else wall = t - 3;
      if (Phys.rhAt(Phys.vapor(t, rh), wall) >= rc.mold_alarm) above += step;
    }
    return above / 3600e3;
  }

  /* ---------- Heizverlust offenes Fenster ----------
     Q = 0,34 Wh/(m³·K) · V · n_offen · ΔT · t */
  _heatLoss(a, out) {
    const c = this._config;
    if (!c.show_heat_loss || !a.hasWindow || !out.hasT || !a.valid || a.t <= out.t) return null;
    const V = Number(a.room.volume ?? c.default_volume) || 40;
    const kw = (0.34 * V * (Number(c.ach_open) || 6) * (a.t - out.t)) / 1000;
    const now = Date.now();
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const isOpen = (st) => ["on", "open", "opening", "tilted", "true"].includes(String(st).toLowerCase());
    let todayH = 0;
    const raw = this._hist?.raw?.[a.room.window];
    if (raw?.length) {
      for (let i = 0; i < raw.length; i++) {
        if (!isOpen(raw[i].s)) continue;
        const from = Math.max(raw[i].t, midnight.getTime());
        const to = i + 1 < raw.length ? raw[i + 1].t : now;
        if (to > from) todayH += (to - from) / 3600e3;
      }
    }
    const curH = a.windowOpen ? a.openMin / 60 : 0;
    if (!raw?.length) todayH = curH;
    const fmt = (kwh) => ({ k: this._n(kwh, kwh < 1 ? 2 : 1), c: `${this._n(kwh * Number(c.heat_price || 0), 2)} ${c.currency || "€"}` });
    return { now: fmt(kw * curH), today: fmt(kw * todayH), todayKwh: kw * todayH, nowKwh: kw * curH };
  }

  /* ---------- Lüft-Timer ---------- */
  _timerKey(room, i) {
    return `${this._config.title || ""}|${room.name || i}`;
  }
  _timers() {
    if (!this._vt) {
      try {
        this._vt = JSON.parse(localStorage.getItem("aura-climate-vt") || "{}");
      } catch (e) {
        this._vt = {};
      }
    }
    return this._vt;
  }
  _saveTimers() {
    try {
      localStorage.setItem("aura-climate-vt", JSON.stringify(this._vt || {}));
    } catch (e) {
      /* ignore */
    }
  }

  /* ---------- Aktionen ---------- */
  _moreInfo(entityId) {
    if (!entityId) return;
    const ev = new Event("hass-more-info", { bubbles: true, composed: true });
    ev.detail = { entityId };
    this.dispatchEvent(ev);
  }

  /* ---------- Rendering ---------- */
  _update() {
    if (!this._hass || !this._config) return;
    if (this._typing) {
      this._pending = true;
      return;
    }
    const c = this._config;
    const ids = [c.outdoor_temperature, c.outdoor_humidity];
    if (this._config.weather) ids.push(this._config.weather);
    this._rooms.forEach((r) => ids.push(r.temperature, r.humidity, r.window, r.co2, r.wall_temperature, r.mold, ...toList(r.climate), r.voc, r.pm25, r.pm10, r.presence, r.wall_learn, r.dehumidifier, r.humidifier));
    const sig = ids
      .map((i) => {
        const s = this._st(i);
        return s ? s.state + "|" + (s.attributes?.temperature ?? "") + "|" + (s.attributes?.hvac_action ?? "") + "|" + s.last_changed : "";
      })
      .join(";") + `#${(this._fc || []).length}#${this._weekAt}#${this._histAt}#${this._sel}#${this._detail}#${this._lang}#${this._wallPanel}#${this._climPanel}#${this._wallMsg?.text || ""}`;
    if (sig === this._sig) return;
    this._sig = sig;
    this._render();
    this._loadHistory();
    this._loadWeek();
    this._subscribeForecast();
  }

  _render() {
    const c = this._config;
    const col = {
      temp: toColor(c.color_temperature, AURA_DEFAULTS.color_temperature),
      hum: toColor(c.color_humidity, AURA_DEFAULTS.color_humidity),
      ok: toColor(c.color_ok, AURA_DEFAULTS.color_ok),
      warn: toColor(c.color_warn, AURA_DEFAULTS.color_warn),
      alarm: toColor(c.color_alarm, AURA_DEFAULTS.color_alarm),
    };
    col.info = toColor(c.color_info, AURA_DEFAULTS.color_info);
    this._col = col;
    const out = this._outdoor();
    // Vorhersage zuerst grob mit Raumtemperaturen, dann Räume analysieren
    this._best = this._bestTime(this._rooms.map((r) => ({ valid: this._num(r.temperature) != null, t: this._num(r.temperature) })));
    const all = this._rooms.map((r) => this._analyze(r, out));
    this._all = all;

    let body;
    if (!this._rooms.length) body = `<div class="empty">${this._t("no_rooms")}</div>`;
    else if (c.layout === "grid" && this._detail == null) body = this._renderGrid(all, out);
    else {
      const idx = c.layout === "grid" ? this._detail : this._sel;
      body = this._renderTabs(all, idx) + this._renderRoom(all[idx] || all[0], out, all);
    }

    const title = c.show_title ? c.title ?? this._t("title") : "";
    const outHtml = c.show_outdoor ? this._renderOutdoor(out) : "";
    const oldTabs = this.shadowRoot.querySelector(".tabswrap.scroll .tabs");
    if (oldTabs) this._tabScroll = oldTabs.scrollLeft;
    this.shadowRoot.innerHTML = `
      <style>${this._css(col)}</style>
      <ha-card>
        ${title || outHtml ? `<div class="head"><div class="title">${title ? esc(title) : ""}</div>${outHtml}</div>` : ""}
        ${this._rooms.length && c.show_summary ? this._renderSummary(all) : ""}
        ${this._renderForecast(out)}
        ${body}
        ${c.show_mold_week && this._rooms.length ? this._renderMoldWeek(all) : ""}
      </ha-card>`;
    this._bind();
    this._setupTabs();
  }

  _setupTabs() {
    const wrap = this.shadowRoot.querySelector(".tabswrap.scroll");
    if (!wrap) return;
    const tabs = wrap.querySelector(".tabs");
    const upd = () => {
      const max = tabs.scrollWidth - tabs.clientWidth;
      wrap.classList.toggle("can-l", tabs.scrollLeft > 2);
      wrap.classList.toggle("can-r", tabs.scrollLeft < max - 2);
    };
    if (this._tabScroll != null) tabs.scrollLeft = this._tabScroll;
    if (this._scrollToSel) {
      this._scrollToSel = false;
      const sel = tabs.querySelector(".tab.sel");
      if (sel) {
        const l = sel.offsetLeft - tabs.offsetLeft;
        if (l < tabs.scrollLeft) tabs.scrollLeft = l - 30;
        else if (l + sel.offsetWidth > tabs.scrollLeft + tabs.clientWidth) tabs.scrollLeft = l + sel.offsetWidth - tabs.clientWidth + 30;
      }
    }
    tabs.addEventListener("scroll", () => { this._tabScroll = tabs.scrollLeft; upd(); }, { passive: true });
    tabs.addEventListener("wheel", (ev) => {
      if (Math.abs(ev.deltaY) > Math.abs(ev.deltaX) && tabs.scrollWidth > tabs.clientWidth) {
        ev.preventDefault();
        tabs.scrollLeft += ev.deltaY;
      }
    }, { passive: false });
    wrap.querySelectorAll("[data-tscroll]").forEach((b) =>
      b.addEventListener("click", () => tabs.scrollBy({ left: Number(b.dataset.tscroll) * tabs.clientWidth * 0.7, behavior: "smooth" }))
    );
    requestAnimationFrame(upd);
    if (!this._ro && window.ResizeObserver) {
      this._ro = new ResizeObserver(() => {
        const t = this.shadowRoot.querySelector(".tabswrap.scroll .tabs");
        if (t) t.dispatchEvent(new Event("scroll"));
      });
      this._ro.observe(this);
    }
  }

  _renderOutdoor(out) {
    const c = this._config;
    if (!c.outdoor_temperature && !c.outdoor_humidity) return "";
    return `<button class="out" data-entity="${esc(c.outdoor_temperature || c.outdoor_humidity)}" title="${this._t("outdoor")}">
      ${icon("home", "dim")}<span class="lbl">${this._t("outdoor")}</span>
      <b>${this._n(out.t, this._dT)} °C</b><span>${this._n(out.rh, this._dH)} %</span>
      ${out.ok ? `<span class="dim">${this._n(out.ah, this._dA)} g/m³</span>` : ""}
    </button>`;
  }

  _renderForecast(out) {
    const b = this._best;
    if (!b) return "";
    let txt;
    if (b.mode === "cool") txt = this._t("fc_cool", { f: this._hourFmt(b.from), t: this._hourFmt(b.to), tmp: this._n(b.T, 0) });
    else if (b.nowGood) txt = this._t("fc_now", { ah: this._n(b.ah, this._dA) });
    else txt = this._t("fc_best", { f: this._hourFmt(b.from), t: this._hourFmt(b.to), ah: this._n(b.ah, this._dA), n: out.ok ? this._n(out.ah, this._dA) : "–" });
    return `<button class="fcst ${b.nowGood ? "good" : ""}" data-entity="${esc(this._config.weather)}">${icon("clock")}<span>${esc(txt)}</span></button>`;
  }

  _renderMoldWeek(all) {
    const w = this._week;
    if (!w) return "";
    const rows = all
      .map((a, i) => ({ a, i, h: this._moldHours(a.room, w, 15) }))
      .filter((r) => r.h != null)
      .sort((x, y) => y.h - x.h);
    if (!rows.length) return "";
    const max = Math.max(24, ...rows.map((r) => r.h));
    const lv = (h) => (h >= 42 ? "alarm" : h >= 6 ? "warn" : "ok");
    return `<div class="mweek">
      <div class="ch">${icon("mold")}<span>${this._t("mw_title")}</span></div>
      <div class="msub2">${this._t("mw_sub", { v: this._config.mold_alarm })}</div>
      ${rows
        .map(
          (r) => `<button class="mwrow lv-${lv(r.h)}" ${this._config.layout === "grid" ? `data-detail="${r.i}"` : `data-room="${r.i}"`}>
          <span class="mwn">${esc(r.a.room.name || "#" + (r.i + 1))}</span>
          <span class="mwb"><i style="width:${Math.max(r.h > 0 ? 2 : 0, (r.h / max) * 100).toFixed(1)}%"></i></span>
          <span class="mwh">${this._t("mw_hours", { h: this._n(r.h, r.h < 10 ? 1 : 0) })}</span>
        </button>`
        )
        .join("")}
    </div>`;
  }

  _renderSummary(all) {
    const vent = all.filter((a) => a.vKey === "v_now" || a.vKey === "v_close" || a.vKey === "v_heat").length;
    const mold = all.filter((a) => a.mold && a.mold !== "low").length;
    const worst = all.reduce((m, a) => Math.max(m, LEVEL[a.level] || 0), 0);
    const lv = Object.keys(LEVEL).find((k) => LEVEL[k] === worst);
    const parts = [];
    if (vent) parts.push(this._t("sum_vent", { n: vent }));
    if (mold) parts.push(this._t("sum_mold", { n: mold }));
    if (!parts.length) parts.push(this._t("sum_ok"));
    return `<div class="summary lv-${lv}">${icon(worst >= 2 ? "alert" : "check")}<span>${parts.join(" · ")}</span></div>`;
  }

  // Blink-Klasse + Phasenversatz, damit die Animation bei Neuzeichnen nicht neu startet
  _blink(a) {
    const c = this._config;
    if (!c.blink || c.blink === "off") return { cls: "", style: "" };
    const min = c.blink === "alarm" ? LEVEL.alarm : LEVEL.warn;
    if ((LEVEL[a.level] || 0) < min) return { cls: "", style: "" };
    const dur = Math.max(0.4, Math.min(5, Number(c.blink_speed) || 1.2)) * 1000;
    return { cls: " blink", style: ` style="animation-duration:${dur}ms;animation-delay:-${Date.now() % dur}ms"` };
  }

  _renderTabs(all, idx) {
    const c = this._config;
    if (c.layout === "grid") {
      return `<div class="tabswrap wrap"><div class="tabs"><button class="tab back" data-back="1">${icon("back")}${this._t("back")}</button>
        <span class="tab sel lv-${all[idx].level}${this._blink(all[idx]).cls}"${this._blink(all[idx]).style}><i class="dot lv-${all[idx].level}"></i>${esc(all[idx].room.name || "–")}</span></div></div>`;
    }
    if (all.length < 2 || !c.show_tabs) return "";
    const scroll = c.tabs_mode === "scroll";
    return `<div class="tabswrap ${scroll ? "scroll" : "wrap"}">
      ${scroll ? `<button class="tarr l" data-tscroll="-1" aria-label="‹">${icon("back")}</button>` : ""}
      <div class="tabs">${all
      .map(
        (a, i) => `<button class="tab lv-${a.level} ${i === idx ? "sel" : ""}${this._blink(a).cls}"${this._blink(a).style} data-room="${i}">
          ${a.room.icon ? `<ha-icon icon="${esc(a.room.icon)}"></ha-icon>` : `<i class="dot lv-${a.level}"></i>`}
          ${esc(a.room.name || `#${i + 1}`)}
          ${a.room.icon && a.level !== "ok" ? `<i class="dot lv-${a.level}"></i>` : ""}
        </button>`
      )
      .join("")}</div>
      ${scroll ? `<button class="tarr r" data-tscroll="1" aria-label="›">${icon("back")}</button>` : ""}
    </div>`;
  }

  _renderGrid(all) {
    const c = this._config;
    return `<div class="grid">${all
      .map((a, i) => {
        const v = a.valid;
        return `<button class="gtile lv-${a.level}${this._blink(a).cls}"${this._blink(a).style} data-detail="${i}">
          <div class="gname">${a.room.icon ? `<ha-icon icon="${esc(a.room.icon)}"></ha-icon>` : ""}<span>${esc(a.room.name || `#${i + 1}`)}</span><i class="dot lv-${a.level}"></i></div>
          <div class="gvals"><span class="gt">${v ? this._n(a.t, this._dT) : "–"}<small>°C</small></span>
          <span class="gh">${icon("drop")}${v ? this._n(a.rh, this._dH) : "–"}<small>%</small></span></div>
          <div class="gfoot">
            ${v ? `<span class="chip lv-${a.vLevel}">${icon(a.windowOpen ? "windowOpen" : "wind")}${this._t(a.vKey)}</span>` : `<span class="dim">${this._t("unavailable")}</span>`}
            ${v && a.mold !== "low" ? `<span class="chip lv-${a.mold === "high" ? "alarm" : "warn"}">${icon("mold")}${this._t("risk_" + a.mold)}</span>` : ""}
            ${a.aq != null && c.show_air_quality ? `<span class="chip lv-${a.aqLevel}">${this._t("aq")} ${a.aq}</span>` : ""}
            ${a.co2 != null ? `<span class="chip">${a.co2Est ? "~" : ""}${this._n(a.co2, 0)} ppm</span>` : ""}
          </div>
        </button>`;
      })
      .join("")}</div>`;
  }

  _renderRoom(a, out, all) {
    const c = this._config;
    const r = a.room;
    if (!a.valid) {
      return `<div class="empty">${esc(r.name || "")}: ${this._t("unavailable")}<br><small>${esc(r.temperature || "")} / ${esc(r.humidity || "")}</small></div>`;
    }
    let tiles = [
      { k: "show_dewpoint", ic: "dew", label: this._t("dewpoint"), val: `${this._n(a.dew, this._dT)} °C`, ent: r.humidity },
      { k: "show_abs_humidity", ic: "drop", label: this._t("abs_humidity"), val: `${this._n(a.ah, this._dA)} g/m³`, ent: r.humidity },
      {
        k: "show_wall",
        ic: "wall",
        label: this._t("wall"),
        val: `${this._n(a.wall, this._dT)} °C`,
        sub: a.wallLearned ? this._t("wall_learned", { n: a.cfg.frsiN }) : this._t(a.wallEst ? "wall_est" : "wall_meas"),
        ent: r.wall_learn ? "" : r.wall_temperature || c.outdoor_temperature,
        attr: r.wall_learn ? ` data-wall="${this._all.indexOf(a)}"` : "",
        cls: a.condensation ? "lv-alarm" : "",
      },
    ];
    const rc = a.cfg;
    if (a.aq != null)
      tiles.unshift({
        k: "show_air_quality",
        ic: "leaf",
        label: this._t("aq"),
        val: `${a.aq} · ${this._t("aq_" + AQ.label(a.aq))}`,
        sub: a.aqOnlyEst ? this._t("est") : a.aqLevel !== "ok" ? this._t("w_" + a.aqWorst) : "",
        ent: r.co2 || r.pm25 || r.voc || r.pm10 || r.presence || r.window,
        cls: "lv-" + a.aqLevel + " aqtile",
      });
    if (a.co2 != null) {
      const lv = a.co2 >= rc.co2_alarm ? "alarm" : a.co2 >= rc.co2_warn ? "warn" : "";
      tiles.push({
        k: "show_co2",
        ic: "co2",
        label: this._t("co2"),
        val: `${a.co2Est ? "~" : ""}${this._n(a.co2, 0)} ppm${this._arrow(a.trC, "ppm", 0)}`,
        sub: a.co2Est ? `${this._t("est")} · ${this._t("persons", { n: this._n(a.persons, 0) })}` : "",
        ent: r.co2 || r.presence || r.window,
        cls: lv ? "lv-" + lv : "",
      });
    }
    const unit = (id) => this._st(id)?.attributes?.unit_of_measurement || "";
    if (a.voc != null) {
      const sv = AQ.voc(a.voc, a.vocUnit);
      tiles.push({ k: "show_voc", ic: "leaf", label: this._t("voc"), val: `${this._n(a.voc, 0)} ${esc(unit(r.voc))}`, ent: r.voc, cls: sv < 40 ? "lv-alarm" : sv < 60 ? "lv-warn" : "" });
    }
    if (a.pm25 != null) {
      const sv = AQ.pm25(a.pm25);
      tiles.push({ k: "show_pm", ic: "dust", label: this._t("pm25"), val: `${this._n(a.pm25, 0)} µg/m³`, ent: r.pm25, cls: sv < 40 ? "lv-alarm" : sv < 60 ? "lv-warn" : "" });
    }
    if (a.pm10 != null) {
      const sv = AQ.pm10(a.pm10);
      tiles.push({ k: "show_pm", ic: "dust", label: this._t("pm10"), val: `${this._n(a.pm10, 0)} µg/m³`, ent: r.pm10, cls: sv < 40 ? "lv-alarm" : sv < 60 ? "lv-warn" : "" });
    }
    if (a.hasWindow)
      tiles.push({
        k: "show_window",
        ic: a.windowOpen ? "windowOpen" : "window",
        label: this._t("window"),
        val: a.windowOpen ? `${this._t("open")} · ${a.openMin} min` : this._t("closed"),
        sub: a.loss ? (a.windowOpen ? (a.loss.nowKwh >= 0.01 ? this._t("hl_open", a.loss.now) : "") : a.loss.todayKwh >= 0.01 ? this._t("hl_today", a.loss.today) : "") : "",
        ent: r.window,
        cls: a.windowOpen ? "lv-info" : "",
      });
    [
      [a.dehum, "dev_dehum", "dehum"],
      [a.hum, "dev_hum", "drop"],
    ].forEach(([d, lbl, ic]) => {
      if (!d) return;
      tiles.push({
        k: "show_devices",
        ic,
        label: this._t(lbl),
        val: this._t(d.on ? "dev_on" : "dev_off"),
        sub: d.target != null ? this._t("dev_target", { v: this._n(Number(d.target), 0) }) : "",
        ent: d.id,
        cls: d.on ? "lv-info" : "",
      });
    });
    if (a.target != null)
      tiles.push({
        k: "show_target",
        ic: a.heating ? "flame" : "target",
        label: this._t("target"),
        val:
          a.targetMin != null && a.targetMax - a.targetMin >= 0.25
            ? `${this._n(a.targetMin, this._dT)}–${this._n(a.targetMax, this._dT)} °C`
            : `${this._n(a.target, this._dT)} °C`,
        sub:
          a.climates.length > 1
            ? this._t("th_count", { n: a.climates.length }) + (a.heatingCount ? " · " + this._t("th_heating", { n: a.heatingCount }) : "")
            : "",
        ent: a.climates.length > 1 ? "" : a.climates[0]?.id || "",
        attr: a.climates.length > 1 ? ` data-clim="${this._all.indexOf(a)}"` : "",
        cls: a.heating ? "lv-warn" : "",
      });
    if (a.moldSensor != null)
      tiles.push({ k: "show_mold_sensor", ic: "mold", label: this._t("mold_sensor"), val: `${this._n(a.moldSensor, 0)}${esc(this._st(r.mold)?.attributes?.unit_of_measurement ? " " + this._st(r.mold).attributes.unit_of_measurement : "")}`, ent: r.mold });

    tiles = tiles.filter((t) => c[t.k] !== false);
    const sections = [];
    if (r.wall_learn && this._wallPanel === this._all.indexOf(a)) sections.push(this._renderWallPanel(a));
    if (a.climates.length > 1 && this._climPanel === this._all.indexOf(a)) sections.push(this._renderClimPanel(a));
    if (c.show_ventilation) sections.push(this._renderVent(a));
    if (c.show_mold) sections.push(this._renderMold(a));
    const charts = [];
    if (c.show_comfort_chart) charts.push(this._renderComfort(a, all));
    if (c.show_history) charts.push(this._renderHistory(a));

    return `
      ${c.show_gauge || tiles.length ? `<div class="main ${c.show_gauge ? "" : "nogauge"} ${tiles.length ? "" : "notiles"}">
        ${c.show_gauge ? this._renderGauge(a) : ""}
        ${tiles.length ? `<div class="tiles">${tiles
          .map(
            (t) => `<button class="tile ${t.cls || ""}" data-entity="${esc(t.ent || "")}"${t.attr || ""}>
              ${icon(t.ic)}<div><div class="tl">${t.label}</div><div class="tv">${t.val}</div>${t.sub ? `<div class="ts">${t.sub}</div>` : ""}</div>
            </button>`
          )
          .join("")}</div>` : ""}
      </div>` : ""}
      ${sections.join("")}
      ${charts.length ? `<div class="charts">${charts.join("")}</div>` : ""}`;
  }

  _renderGauge(a) {
    const c = a.cfg,
      col = this._col;
    const S = 135,
      E = 405,
      cx = 90,
      cy = 90;
    const ang = (v) => S + ((E - S) * Math.max(0, Math.min(100, v))) / 100;
    const zones = [
      [0, c.hum_min, col.warn],
      [c.hum_min, c.hum_max, col.ok],
      [c.hum_max, c.mold_warn, col.warn],
      [c.mold_warn, 100, col.alarm],
    ];
    const [mx, my] = polar(cx, cy, 66, ang(a.rh));
    const comfort = a.comfort.length ? a.comfort.map((k) => this._t(k)).join(" · ") : this._t("c_ok");
    const tOk = a.t >= c.temp_min && a.t <= c.temp_max;
    return `<div class="gauge" >
      <svg viewBox="0 0 180 170">
        <path d="${arc(cx, cy, 78, S, E)}" class="track" stroke-width="5"/>
        ${zones.map(([f, t, cl]) => `<path d="${arc(cx, cy, 78, ang(f) + 0.8, ang(t) - 0.8)}" stroke="${cl}" stroke-width="5" fill="none" opacity=".85"/>`).join("")}
        <path d="${arc(cx, cy, 66, S, E)}" class="track" stroke-width="10"/>
        <path d="${arc(cx, cy, 66, S, ang(a.rh))}" stroke="${col.hum}" stroke-width="10" fill="none" stroke-linecap="round"/>
        <circle cx="${mx.toFixed(1)}" cy="${my.toFixed(1)}" r="7" fill="var(--card-bg)" stroke="${col.hum}" stroke-width="3"/>
      </svg>
      <button class="gcenter" data-entity="${esc(a.room.temperature)}">
        <div class="gtemp" style="color:${tOk ? "var(--primary-text-color)" : col.temp}">${this._n(a.t, this._dT)}<small>°C</small>${this._arrow(a.trT, "°C", 1)}</div>
        <div class="ghum" data-entity="${esc(a.room.humidity)}">${icon("drop")}${this._n(a.rh, this._dH)} %${this._arrow(a.trH, "%", 0)}</div>
        <div class="gcomf ${a.comfort.length ? "bad" : ""}">${comfort}</div>
      </button>
    </div>`;
  }

  _renderClimPanel(a) {
    return `<div class="wpanel cpanel">
      <div class="wph">${icon("target")}<b>${this._t("th_title")}</b><button class="wx" data-cclose="1" aria-label="${this._t("wl_close")}">✕</button></div>
      <div class="clist">${a.climates
        .map(
          (x) => `<button class="crow ${x.heating ? "heat" : ""} ${x.off ? "off" : ""}" data-entity="${esc(x.id)}">
            ${icon(x.heating ? "flame" : "target")}
            <span class="cn">${esc(x.name)}</span>
            <span class="cv">${x.current != null ? `${this._n(x.current, this._dT)} °C → ` : ""}<b>${x.off ? this._t("th_off") : x.target != null ? this._n(x.target, this._dT) + " °C" : "–"}</b></span>
          </button>`
        )
        .join("")}</div>
    </div>`;
  }

  _renderWallPanel(a) {
    const c = a.cfg;
    const src =
      c.frsiSrc === "learned" ? this._t("wl_src_learned", { n: c.frsiN }) : c.frsiSrc === "room" ? this._t("wl_src_room") : this._t("wl_src_norm");
    const msg = this._wallMsg;
    return `<div class="wpanel">
      <div class="wph">${icon("wall")}<b>${this._t("wl_title")}</b><button class="wx" data-wclose="1" aria-label="${this._t("wl_close")}">✕</button></div>
      <div class="wpt">${this._t("wl_hint")}</div>
      <div class="wpt dim">${this._t("wl_now", { f: this._n(c.frsi, 2), src })} · ${this._t("wl_calc", { o: this._n(this._outdoorLag(), 1), i: this._n(a.t, 1) })}</div>
      ${a.room.wall_temperature ? `<div class="wpt dim">${this._t("wl_auto")}</div>` : ""}
      <div class="wrow">
        <input class="win" type="text" inputmode="decimal" autocomplete="off" placeholder="${this._t("wl_input")}" value="${esc(this._wallInput ?? "")}">
        <button class="wbtn pri" data-wsave="1">${this._t("wl_save")}</button>
        ${c.frsiSrc === "learned" ? `<button class="wbtn" data-wreset="1">${this._t("wl_reset")}</button>` : ""}
      </div>
      ${msg ? `<div class="wmsg ${msg.ok ? "ok" : "bad"}">${esc(msg.text)}</div>` : ""}
    </div>`;
  }

  _renderVent(a) {
    const out = this._outdoor();
    const ic =
      a.vKey === "v_heat" ? "flame" : a.windowOpen ? "windowOpen" : a.vKey === "v_ok" ? "check" : a.vKey === "v_keep" ? "sun" : a.cellar ? "cellar" : a.timer ? "clock" : "wind";
    return `<div class="vent lv-${a.vLevel}">
      <div class="vic">${icon(ic)}</div>
      <div class="vtx">
        <div class="vh">${this._t(a.vKey)}${a.showDuration ? `<span class="vdur">${this._t("dur", { m: a.duration })}</span>` : ""}</div>
        ${a.reasons.length && this._config.show_reasons ? `<ul>${a.reasons.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
        ${this._renderTimer(a)}
      </div>
      ${out.ok && this._config.show_ah_compare ? `<div class="vcmp" title="${this._t("abs_humidity")}">
        <div><span>${this._n(a.ah, this._dA)}</span><small>${this._t("inside")}</small></div>
        <div class="arr ${a.drier ? "good" : ""}">${a.drier ? "›" : "‹"}</div>
        <div><span>${this._n(out.ah, this._dA)}</span><small>${this._t("outside")}</small></div>
        <em>g/m³</em>
      </div>` : ""}
    </div>`;
  }

  _renderTimer(a) {
    const c = this._config;
    const idx = this._all.indexOf(a);
    let html = "";
    if (a.timer) {
      const pct = Math.min(100, (a.timer.elapsed / Math.max(1, a.timer.dur)) * 100);
      html += `<div class="vbar ${pct >= 100 ? "done" : ""}"><i style="width:${pct.toFixed(0)}%"></i></div>
        <div class="vbt">${a.timer.elapsed} / ${a.timer.dur} min</div>`;
    }
    const btns = [];
    if (!a.hasWindow && c.show_vent_timer) {
      if (a.timer) btns.push(`<button class="wbtn" data-vstop="${idx}">${icon("stop")}${this._t("vt_stop")}</button>`);
      else if (["v_now", "v_cool"].includes(a.vKey)) btns.push(`<button class="wbtn pri" data-vstart="${idx}">${icon("play")}${this._t("vt_start")}</button>`);
    }
    (a.advice || []).forEach((ad) => btns.push(`<button class="wbtn ${ad.svc === "turn_on" ? "pri" : ""}" data-svc="${ad.svc}" data-svcent="${esc(ad.id)}">${icon(ad.id === a.dehum?.id ? "dehum" : "drop")}${this._t(ad.key)}</button>`));
    if (btns.length) html += `<div class="vbtns">${btns.join("")}</div>`;
    return html;
  }

  _renderMold(a) {
    const c = a.cfg,
      col = this._col;
    const lv = a.mold === "high" ? "alarm" : a.mold === "medium" ? "warn" : "ok";
    const pos = Math.max(0, Math.min(100, a.surfRh));
    const span = 100 - 40; // Skala 40–100 %
    const p = (v) => ((Math.max(40, Math.min(100, v)) - 40) / span) * 100;
    const mh = this._config.show_mold_hours ? this._moldHours(a.room) : null;
    const hrs = this._hist?.hours ?? c.history_hours;
    const mhTxt =
      mh == null ? "" : mh > 0.05 ? this._t("mold_hours", { h: this._n(mh, 1), v: c.mold_alarm, p: hrs }) : this._t("mold_hours_none", { v: c.mold_alarm, p: hrs });
    return `<div class="mold">
      <div class="mrow">
        <span class="mt">${icon("mold")}${this._t("mold")}</span>
        <span class="chip lv-${lv}">${this._t("risk_" + a.mold)}</span>
        <span class="mv">${this._n(pos, 0)} %</span>
      </div>
      <div class="bar" style="background:linear-gradient(90deg, ${col.ok} 0%, ${col.ok} ${p(c.mold_warn - 5)}%, ${col.warn} ${p(c.mold_warn)}%, ${col.warn} ${p(c.mold_alarm - 3)}%, ${col.alarm} ${p(c.mold_alarm)}%, ${col.alarm} 100%)">
        <i class="tick" style="left:${p(c.mold_warn)}%"></i><i class="tick" style="left:${p(c.mold_alarm)}%"></i>
        <i class="mark" style="left:${p(pos)}%"></i>
      </div>
      <div class="msub"><span>${this._t("surface_rh")}${a.wallEst ? ` (${this._t("wall_est")})` : ""}</span>${mhTxt ? `<span>${mhTxt}</span>` : ""}</div>
      ${a.condensation ? `<div class="cond">${icon("alert")}${this._t("condensation")}</div>` : ""}
    </div>`;
  }

  _renderComfort(cur, all) {
    const c = cur.cfg,
      col = this._col;
    const W = 260,
      H = 170,
      L = 30,
      B = 22,
      T = 8,
      Rr = 8;
    let tx = [Number(this._config.chart_temp_min), Number(this._config.chart_temp_max)];
    if (!(tx[1] - tx[0] >= 4)) tx = [14, 30];
    const tStep = tx[1] - tx[0] > 20 ? 8 : tx[1] - tx[0] > 10 ? 4 : 2;
    const
hy = [10, 90];
    const X = (t) => L + ((Math.max(tx[0], Math.min(tx[1], t)) - tx[0]) / (tx[1] - tx[0])) * (W - L - Rr);
    const Y = (h) => T + (1 - (Math.max(hy[0], Math.min(hy[1], h)) - hy[0]) / (hy[1] - hy[0])) * (H - T - B);
    const rect = (t1, t2, h1, h2, fill, op) =>
      `<rect x="${X(t1)}" y="${Y(h2)}" width="${X(t2) - X(t1)}" height="${Y(h1) - Y(h2)}" rx="6" fill="${fill}" opacity="${op}"/>`;
    let g = "";
    for (let t = Math.ceil((tx[0] + 0.5) / tStep) * tStep; t < tx[1]; t += tStep) g += `<line x1="${X(t)}" x2="${X(t)}" y1="${T}" y2="${H - B}" class="gl"/><text x="${X(t)}" y="${H - 6}" class="ax" text-anchor="middle">${t}°</text>`;
    for (let h = 20; h <= 80; h += 20) g += `<line x1="${L}" x2="${W - Rr}" y1="${Y(h)}" y2="${Y(h)}" class="gl"/><text x="${L - 4}" y="${Y(h) + 3}" class="ax" text-anchor="end">${h}%</text>`;
    const dots = all
      .filter((a) => a.valid && (a === cur || this._config.show_comfort_others))
      .map((a) => {
        const me = a === cur;
        return `<circle cx="${X(a.t)}" cy="${Y(a.rh)}" r="${me ? 6.5 : 4}" fill="${me ? col.hum : "var(--secondary-text-color)"}" opacity="${me ? 1 : 0.55}" ${me ? `stroke="var(--card-bg)" stroke-width="2"` : ""}><title>${esc(a.room.name || "")}: ${this._n(a.t, this._dT)} °C / ${this._n(a.rh, this._dH)} %</title></circle>`;
      })
      .join("");
    const out = this._outdoor();
    return `<div class="chart"><div class="ch">${this._t("comfort")}</div>
      <svg viewBox="0 0 ${W} ${H}">
        ${g}
        ${rect(c.temp_min - 2, c.temp_max + 2, c.hum_min - 10, c.hum_max + 10, col.ok, 0.12)}
        ${rect(c.temp_min, c.temp_max, c.hum_min, c.hum_max, col.ok, 0.28)}
        <rect x="${L}" y="${Y(100)}" width="${W - L - Rr}" height="${Y(c.mold_warn) - Y(100)}" fill="${col.alarm}" opacity=".08"/>
        ${dots}
        ${out.ok && this._config.show_outdoor_in_chart && out.t >= tx[0] && out.t <= tx[1] ? `<circle cx="${X(out.t)}" cy="${Y(out.rh)}" r="4" fill="none" stroke="var(--secondary-text-color)" stroke-dasharray="2 2"/>` : ""}
      </svg></div>`;
  }

  _renderHistory(a) {
    const col = this._col;
    const hours = this._config.history_hours;
    const h = this._hist;
    const head = `<div class="ch">${this._t("history", { h: hours })}
      <span class="lg">${this._config.show_history_temp ? `<i style="background:${col.temp}"></i>°C ` : ""}${this._config.show_history_hum ? `<i style="background:${col.hum}"></i>%` : ""}</span></div>`;
    const T = h?.map[a.room.temperature],
      Hm = h?.map[a.room.humidity];
    if (!T?.length && !Hm?.length) return `<div class="chart">${head}<div class="nohist">…</div></div>`;
    const W = 260,
      H = 170,
      L = 6,
      Rr = 6,
      Tp = 16,
      B = 22;
    const X = (ts) => L + ((ts - h.from) / (h.to - h.from)) * (W - L - Rr);
    const line = (s, color, now) => {
      if (!s?.length) return { p: "" };
      const pts = [...s.filter((p) => p.t >= h.from), { t: Date.now(), v: now ?? s[s.length - 1].v }];
      const first = this._at(s, h.from);
      if (first != null) pts.unshift({ t: h.from, v: first });
      const vs = pts.map((p) => p.v);
      let mn = Math.min(...vs),
        mx = Math.max(...vs);
      if (mx - mn < 2) {
        const m = (mx + mn) / 2;
        mn = m - 1;
        mx = m + 1;
      }
      const Y = (v) => Tp + (1 - (v - mn) / (mx - mn)) * (H - Tp - B);
      let d = "";
      pts.forEach((p, i) => {
        const x = X(Math.min(p.t, h.to)).toFixed(1),
          y = Y(p.v).toFixed(1);
        d += i ? `H${x}V${y}` : `M${x} ${y}`;
      });
      return { p: `<path d="${d}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>`, mn: Math.min(...vs), mx: Math.max(...vs) };
    };
    const lt = this._config.show_history_temp ? line(T, col.temp, a.t) : { p: "" },
      lh = this._config.show_history_hum ? line(Hm, col.hum, a.rh) : { p: "" };
    let ticks = "";
    const step = h.hours <= 24 ? 6 : h.hours <= 72 ? 24 : 48;
    for (let k = 0; k <= h.hours; k += step) {
      const ts = h.to - k * 3600e3;
      ticks += `<line x1="${X(ts)}" x2="${X(ts)}" y1="${Tp}" y2="${H - B}" class="gl"/><text x="${X(ts)}" y="${H - 6}" class="ax" text-anchor="middle">${k ? "−" + k + "h" : "0"}</text>`;
    }
    const mm = (l, u, d, cl) =>
      l.mn != null ? `<span style="color:${cl}">${this._n(l.mn, d)}–${this._n(l.mx, d)} ${u}</span>` : "";
    return `<div class="chart">${head}
      <svg viewBox="0 0 ${W} ${H}">${ticks}${lh.p}${lt.p}</svg>
      <div class="mm">${mm(lt, "°C", 1, col.temp)}${mm(lh, "%", 0, col.hum)}</div></div>`;
  }

  _bind() {
    const root = this.shadowRoot;
    root.querySelectorAll("[data-room]").forEach((b) =>
      b.addEventListener("click", () => {
        this._sel = Number(b.dataset.room);
        this._scrollToSel = true;
        this._sig = "";
        this._update();
      })
    );
    root.querySelectorAll("[data-detail]").forEach((b) =>
      b.addEventListener("click", () => {
        this._detail = Number(b.dataset.detail);
        this._sig = "";
        this._update();
      })
    );
    root.querySelectorAll("[data-back]").forEach((b) =>
      b.addEventListener("click", () => {
        this._detail = null;
        this._sig = "";
        this._update();
      })
    );
    const rerender = () => {
      this._sig = "";
      this._update();
    };
    root.querySelectorAll("[data-wall]").forEach((b) =>
      b.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const i = Number(b.dataset.wall);
        this._wallPanel = this._wallPanel === i ? null : i;
        this._wallMsg = null;
        rerender();
      })
    );
    root.querySelectorAll("[data-vstart]").forEach((b) =>
      b.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const i = Number(b.dataset.vstart);
        this._timers()[this._timerKey(this._rooms[i], i)] = Date.now();
        this._saveTimers();
        rerender();
      })
    );
    root.querySelectorAll("[data-vstop]").forEach((b) =>
      b.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const i = Number(b.dataset.vstop);
        delete this._timers()[this._timerKey(this._rooms[i], i)];
        this._saveTimers();
        rerender();
      })
    );
    root.querySelectorAll("[data-svc]").forEach((b) =>
      b.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        b.disabled = true;
        try {
          await this._hass.callService("homeassistant", b.dataset.svc, { entity_id: b.dataset.svcent });
        } catch (e) {
          console.warn("aura-climate-card: service", e);
        }
      })
    );
    root.querySelectorAll("[data-clim]").forEach((b) =>
      b.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const i = Number(b.dataset.clim);
        this._climPanel = this._climPanel === i ? null : i;
        rerender();
      })
    );
    root.querySelector("[data-cclose]")?.addEventListener("click", () => {
      this._climPanel = null;
      rerender();
    });
    root.querySelector("[data-wclose]")?.addEventListener("click", () => {
      this._wallPanel = null;
      this._wallMsg = null;
      rerender();
    });
    const inp = root.querySelector(".win");
    if (inp) {
      inp.addEventListener("focus", () => (this._typing = true));
      inp.addEventListener("input", () => (this._wallInput = inp.value));
      inp.addEventListener("blur", () => {
        this._typing = false;
        if (this._pending) {
          this._pending = false;
          setTimeout(rerender, 200);
        }
      });
      inp.addEventListener("keydown", (ev) => ev.key === "Enter" && root.querySelector("[data-wsave]")?.click());
    }
    root.querySelector("[data-wsave]")?.addEventListener("click", async () => {
      const v = parseFloat(String(inp?.value ?? "").replace(",", "."));
      this._typing = false;
      this._wallMsg = await this._measureWall(this._wallPanel, v);
      if (this._wallMsg.ok) this._wallInput = "";
      rerender();
    });
    root.querySelector("[data-wreset]")?.addEventListener("click", async () => {
      const room = this._rooms[this._wallPanel];
      try {
        await this._hass.callService("input_text", "set_value", { entity_id: room.wall_learn, value: "-" });
        this._wallMsg = null;
      } catch (e) {
        this._wallMsg = { ok: false, text: this._t("wl_err_write", { e: e?.message || e }) };
      }
      rerender();
    });
    if (this._config.tap_action === "none") return;
    root.querySelectorAll("[data-entity]").forEach((b) =>
      b.addEventListener("click", (ev) => {
        ev.stopPropagation();
        this._moreInfo(b.dataset.entity);
      })
    );
  }

  _css(col) {
    return `
    :host{--card-bg:var(--ha-card-background,var(--card-background-color,#fff));--soft:color-mix(in srgb,var(--primary-text-color) 6%,transparent);--soft2:color-mix(in srgb,var(--primary-text-color) 11%,transparent);
      --ok:${col.ok};--warn:${col.warn};--alarm:${col.alarm};--info:${col.info};--hum:${col.hum};--temp:${col.temp}}
    ha-card{padding:16px;overflow:hidden;color:var(--primary-text-color);font-size:${Math.max(60, Math.min(160, Number(this._config.font_scale) || 100))}%}
    button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer;text-align:inherit}
    .ic{width:18px;height:18px;flex:none}
    .dim{color:var(--secondary-text-color)}
    .head{display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:space-between}
    .title{font-size:1.25em;font-weight:600;letter-spacing:.2px}
    .out{display:flex;align-items:center;gap:8px;padding:6px 12px;border-radius:999px;background:var(--soft);font-size:.9em}
    .out .lbl{color:var(--secondary-text-color)}
    .summary{display:flex;align-items:center;gap:8px;margin-top:12px;padding:8px 12px;border-radius:12px;font-size:.92em;
      background:color-mix(in srgb,var(--c) 14%,transparent);color:color-mix(in srgb,var(--c) 70%,var(--primary-text-color))}
    .lv-ok{--c:var(--ok)}.lv-info{--c:var(--info)}.lv-warn{--c:var(--warn)}.lv-alarm{--c:var(--alarm)}
    .dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--c);flex:none}
    .tabswrap{position:relative;margin-top:12px}
    .tabs{display:flex;gap:6px}
    .wrap .tabs{flex-wrap:wrap}
    .scroll .tabs{overflow-x:auto;scrollbar-width:none;scroll-behavior:auto}
    .scroll .tabs::-webkit-scrollbar{display:none}
    .tarr{position:absolute;top:0;bottom:0;width:34px;display:none;align-items:center;justify-content:center;z-index:1;color:var(--primary-text-color)}
    .tarr .ic{width:18px;height:18px;background:var(--card-bg);border-radius:50%;padding:4px;box-shadow:0 1px 4px rgba(0,0,0,.25)}
    .tarr.l{left:-4px;background:linear-gradient(90deg,var(--card-bg) 45%,transparent)}
    .tarr.r{right:-4px;background:linear-gradient(270deg,var(--card-bg) 45%,transparent)}
    .tarr.r .ic{transform:rotate(180deg)}
    .can-l .tarr.l,.can-r .tarr.r{display:flex}
    .tab{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:var(--soft);white-space:nowrap;font-size:.9em}
    .tab.sel{background:color-mix(in srgb,var(--hum) 22%,transparent);font-weight:600}
    @keyframes aura-blink{0%,100%{background:color-mix(in srgb,var(--c) 10%,var(--soft));box-shadow:0 0 0 0 color-mix(in srgb,var(--c) 0%,transparent)}
      50%{background:color-mix(in srgb,var(--c) 42%,transparent);box-shadow:0 0 0 3px color-mix(in srgb,var(--c) 30%,transparent)}}
    @keyframes aura-blink-tile{0%,100%{border-color:color-mix(in srgb,var(--c) 35%,transparent);box-shadow:0 0 0 0 transparent}
      50%{border-color:var(--c);box-shadow:0 0 14px 1px color-mix(in srgb,var(--c) 45%,transparent)}}
    .tab.blink{animation:aura-blink 1.2s ease-in-out infinite}
    .tab.blink.sel{outline:2px solid color-mix(in srgb,var(--hum) 70%,transparent);outline-offset:1px}
    .gtile.blink{animation:aura-blink-tile 1.2s ease-in-out infinite}
    .tab ha-icon{--mdc-icon-size:18px}
    .main{display:grid;grid-template-columns:minmax(170px,210px) 1fr;gap:14px;align-items:center;margin-top:12px}
    .main.nogauge,.main.notiles{grid-template-columns:1fr}
    @container (max-width:420px){.main{grid-template-columns:1fr}}
    .gauge{position:relative;width:100%;max-width:210px;margin:auto}
    .gauge svg{width:100%;display:block}
    .track{fill:none;stroke:var(--soft2);stroke-linecap:round}
    .gcenter{position:absolute;inset:22% 18% 18%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
    .gtemp{font-size:2.3em;font-weight:300;line-height:1;letter-spacing:-1px}
    .gtemp small{font-size:.42em;margin-left:2px;letter-spacing:0;color:var(--secondary-text-color)}
    .ghum{display:flex;align-items:center;gap:3px;margin-top:4px;font-size:1.05em;color:var(--hum);font-weight:600}
    .ghum .ic{width:15px;height:15px}
    .gcomf{margin-top:4px;font-size:.75em;color:var(--secondary-text-color)}
    .gcomf.bad{color:var(--warn)}
    .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px}
    .tile{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:var(--soft);min-width:0}
    .tile .ic{color:var(--c,var(--secondary-text-color));width:20px;height:20px}
    .tile.lv-warn,.tile.lv-alarm,.tile.lv-info{background:color-mix(in srgb,var(--c) 13%,transparent)}
    .tl{font-size:.75em;color:var(--secondary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .tv{font-weight:600;white-space:nowrap}
    .ts{font-size:.68em;color:var(--secondary-text-color)}
    .vent{display:flex;gap:12px;align-items:center;margin-top:14px;padding:12px 14px;border-radius:16px;
      background:color-mix(in srgb,var(--c) 13%,transparent);border:1px solid color-mix(in srgb,var(--c) 30%,transparent)}
    .vic{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:var(--c);color:#fff;flex:none}
    .vic .ic{width:24px;height:24px}
    .vtx{flex:1;min-width:0}
    .vh{font-weight:600;display:flex;flex-wrap:wrap;gap:4px 10px;align-items:baseline}
    .vdur{font-weight:500;font-size:.85em;color:color-mix(in srgb,var(--c) 75%,var(--primary-text-color))}
    .vtx ul{margin:4px 0 0;padding-left:16px;font-size:.84em;color:var(--secondary-text-color)}
    .vcmp{display:flex;align-items:center;gap:6px;text-align:center;position:relative;padding-bottom:12px;flex:none}
    .vcmp span{display:block;font-weight:600;font-size:.95em}
    .vcmp small{font-size:.68em;color:var(--secondary-text-color)}
    .vcmp em{position:absolute;bottom:0;left:0;right:0;font-style:normal;font-size:.65em;color:var(--secondary-text-color)}
    .arr{font-size:1.6em;line-height:1;color:var(--secondary-text-color)}.arr.good{color:var(--ok)}
    @container (max-width:400px){.vcmp{display:none}}
    .mold{margin-top:12px;padding:12px 14px;border-radius:16px;background:var(--soft)}
    .mrow{display:flex;align-items:center;gap:8px}
    .mt{display:flex;align-items:center;gap:6px;font-weight:600;flex:1}
    .mv{font-weight:600}
    .chip{display:inline-flex;align-items:center;gap:4px;padding:2px 9px;border-radius:999px;font-size:.78em;font-weight:600;
      background:color-mix(in srgb,var(--c,var(--secondary-text-color)) 18%,transparent);color:color-mix(in srgb,var(--c,var(--primary-text-color)) 75%,var(--primary-text-color))}
    .chip .ic{width:14px;height:14px}
    .bar{position:relative;height:8px;border-radius:99px;margin:12px 0 6px;opacity:.9}
    .tick{position:absolute;top:-3px;bottom:-3px;width:2px;background:var(--card-bg);transform:translateX(-1px)}
    .mark{position:absolute;top:50%;width:16px;height:16px;border-radius:50%;background:var(--card-bg);border:3px solid var(--primary-text-color);transform:translate(-50%,-50%);box-sizing:border-box}
    .msub{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:.75em;color:var(--secondary-text-color)}
    .wpanel{margin-top:12px;padding:12px 14px;border-radius:16px;background:var(--soft);border:1px solid color-mix(in srgb,var(--hum) 35%,transparent)}
    .wph{display:flex;align-items:center;gap:8px}.wph b{flex:1}
    .wx{color:var(--secondary-text-color);padding:2px 6px;border-radius:6px}
    .wpt{font-size:.82em;margin-top:6px;line-height:1.35}
    .wrow{display:flex;gap:8px;margin-top:10px;flex-wrap:wrap}
    .win{flex:1;min-width:150px;font:inherit;padding:8px 10px;border-radius:10px;border:1px solid var(--divider-color,#8884);background:var(--card-bg);color:var(--primary-text-color)}
    .wbtn{padding:8px 14px;border-radius:10px;background:var(--soft2);font-weight:600}
    .wbtn.pri{background:var(--hum);color:#fff}
    .wmsg{margin-top:8px;font-size:.85em;font-weight:600}.wmsg.ok{color:var(--ok)}.wmsg.bad{color:var(--alarm)}
    .clist{display:flex;flex-direction:column;gap:6px;margin-top:10px}
    .crow{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:var(--card-bg)}
    .crow .ic{color:var(--secondary-text-color)}.crow.heat .ic{color:var(--warn)}.crow.off{opacity:.55}
    .cn{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .cv{white-space:nowrap;font-size:.9em;color:var(--secondary-text-color)}.cv b{color:var(--primary-text-color)}
    .trend{font-size:.7em;margin-left:3px;font-weight:700;color:var(--secondary-text-color);vertical-align:super}
    .trend.up.strong{color:var(--warn)}.trend.dn.strong{color:var(--info)}
    .gtemp .trend{font-size:.38em;letter-spacing:0}
    .fcst{display:flex;align-items:center;gap:8px;margin-top:8px;padding:8px 12px;border-radius:12px;font-size:.88em;width:100%;box-sizing:border-box;
      background:color-mix(in srgb,var(--info) 12%,transparent);color:color-mix(in srgb,var(--info) 60%,var(--primary-text-color))}
    .fcst.good{background:color-mix(in srgb,var(--ok) 15%,transparent);color:color-mix(in srgb,var(--ok) 65%,var(--primary-text-color))}
    .vbar{height:6px;border-radius:9px;background:var(--soft2);margin-top:8px;overflow:hidden}
    .vbar i{display:block;height:100%;background:var(--c);border-radius:9px;transition:width .5s}
    .vbar.done i{background:var(--warn)}
    .vbt{font-size:.72em;color:var(--secondary-text-color);margin-top:3px}
    .vbtns{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
    .vbtns .wbtn{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;font-size:.85em}
    .vbtns .wbtn .ic{width:15px;height:15px}
    .mweek{margin-top:12px;padding:12px 14px;border-radius:16px;background:var(--soft)}
    .mweek .ch{justify-content:flex-start;gap:6px}
    .msub2{font-size:.72em;color:var(--secondary-text-color);margin:2px 0 8px}
    .mwrow{display:grid;grid-template-columns:minmax(80px,30%) 1fr 54px;align-items:center;gap:10px;width:100%;padding:4px 0;font-size:.85em}
    .mwn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .mwb{height:8px;border-radius:9px;background:var(--soft2);overflow:hidden}
    .mwb i{display:block;height:100%;background:var(--c);border-radius:9px}
    .mwh{text-align:right;font-weight:600}
    .cond{display:flex;align-items:center;gap:6px;margin-top:8px;color:var(--alarm);font-weight:600;font-size:.88em}
    .charts{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:10px;margin-top:12px}
    .chart{padding:10px 12px 6px;border-radius:16px;background:var(--soft)}
    .chart svg{width:100%;display:block}
    .ch{font-size:.8em;font-weight:600;color:var(--secondary-text-color);display:flex;justify-content:space-between;align-items:center}
    .lg{display:flex;align-items:center;gap:4px;font-weight:500}.lg i{display:inline-block;width:10px;height:3px;border-radius:2px;margin-left:6px}
    .gl{stroke:var(--soft2);stroke-width:1}
    .ax{font-size:9px;fill:var(--secondary-text-color)}
    .mm{display:flex;justify-content:space-between;font-size:.75em;font-weight:600;padding:0 2px 4px}
    .nohist{height:120px;display:grid;place-items:center;color:var(--secondary-text-color)}
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(${Math.max(100, Number(this._config.grid_min_width) || 150)}px,1fr));gap:10px;margin-top:12px}
    .gtile{padding:12px;border-radius:16px;background:var(--soft);display:flex;flex-direction:column;gap:6px;border:1px solid transparent}
    .gtile.lv-warn,.gtile.lv-alarm{border-color:color-mix(in srgb,var(--c) 45%,transparent)}
    .gname{display:flex;align-items:center;gap:6px;font-weight:600;font-size:.92em}.gname span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .gname ha-icon{--mdc-icon-size:18px;color:var(--secondary-text-color)}
    .gvals{display:flex;align-items:baseline;gap:12px}
    .gt{font-size:1.7em;font-weight:300}.gt small,.gh small{font-size:.55em;color:var(--secondary-text-color);margin-left:1px}
    .gh{display:flex;align-items:center;gap:2px;color:var(--hum);font-weight:600;font-size:1.1em}.gh .ic{width:14px;height:14px}
    .gfoot{display:flex;flex-wrap:wrap;gap:4px}
    .empty{padding:24px 8px;text-align:center;color:var(--secondary-text-color)}
    ha-card{container-type:inline-size}
    `;
  }
}

/* ------------------------------------------------------------------ */
/*  Grafischer Editor                                                  */
/* ------------------------------------------------------------------ */
const ED_I18N = {
  de: {
    title: "Titel",
    g_forecast: "Wettervorhersage (beste Lüftungszeit)",
    weather: "Wetter-Entität (stündliche Vorhersage)",
    show_forecast: "Beste Lüftungszeit anzeigen",
    show_trends: "Trendpfeile",
    show_mold_week: "Schimmel-Wochenbilanz",
    show_devices: "Ent-/Befeuchter",
    show_vent_timer: "Lüft-Timer (Räume ohne Fenstersensor)",
    show_heat_loss: "Heizverlust offener Fenster",
    heat_price: "Wärmepreis (pro kWh)",
    currency: "Währung",
    room_type: "Raumart",
    rt_normal: "Wohnraum",
    rt_cellar: "Keller (Taupunktlüftung)",
    dehumidifier: "Entfeuchter (optional)",
    humidifier: "Befeuchter (optional)",
    wall_learn: "Wandpunkt-Lernspeicher (input_text, optional)",
    wall_learn_help: "Helfer anlegen: Einstellungen → Geräte & Dienste → Helfer → Text, z. B. „Aura Wand Schlafzimmer“. Danach auf die Kachel Wandoberfläche tippen und eine Messung eintragen.",
    wall_temperature_help: "Mit Lernspeicher kann der Sensor nach ein paar Tagen in den nächsten Raum wandern – der gelernte Wert bleibt.",
    g_air: "Luftqualität & CO₂-Schätzung",
    r_air: "Luftqualität & CO₂-Schätzung",
    show_air_quality: "Luftqualität",
    show_voc: "VOC",
    show_pm: "Feinstaub",
    co2_estimate: "CO₂ schätzen, wenn kein Sensor",
    co2_estimate_vent: "Schätzung löst Lüftungsempfehlung aus",
    default_volume: "Raumvolumen Standard (m³)",
    default_persons: "Personen bei Anwesenheit (Standard)",
    ach_closed: "Luftwechsel Fenster zu (1/h)",
    ach_open: "Luftwechsel Fenster offen (1/h)",
    co2_outdoor: "CO₂ außen (ppm)",
    aq_warn: "Luftqualität Warnung unter",
    aq_alarm: "Luftqualität Alarm unter",
    voc: "VOC-Sensor (optional)",
    pm25: "PM2.5-Sensor (optional)",
    pm10: "PM10-Sensor (optional)",
    presence: "Anwesenheit / Personenzahl (optional)",
    volume: "Raumvolumen (m³)",
    persons: "Personen (bei Anwesenheit)",
    ach: "Luftwechsel Fenster zu (1/h)",
    default_room: "Startraum (Nr.)",
    tap_action: "Tippen auf Werte",
    ta_more: "Details öffnen",
    ta_none: "Nichts",
    g_layout: "Aufbau & Bereiche",
    g_tiles: "Kacheln",
    g_details: "Details & Diagramme",
    g_vent: "Lüftung",
    g_format: "Zahlenformat",
    show_title: "Titel",
    show_outdoor: "Außenwerte oben",
    show_summary: "Zusammenfassung",
    show_tabs: "Raum-Tabs",
    tabs_mode: "Raum-Tabs bei vielen Räumen",
    tm_wrap: "Umbrechen (mehrzeilig)",
    tm_scroll: "Scrollen mit Pfeilen",
    blink: "Räume mit Warnung blinken",
    bl_warn: "Bei Warnung und Alarm",
    bl_alarm: "Nur bei Alarm",
    bl_off: "Aus",
    blink_speed: "Blinkdauer (Sekunden)",
    show_gauge: "Rundanzeige",
    show_dewpoint: "Taupunkt",
    show_abs_humidity: "Absolute Feuchte",
    show_wall: "Wandoberfläche",
    show_co2: "CO₂",
    show_window: "Fenster",
    show_target: "Solltemperatur",
    show_mold_sensor: "Schimmelsensor",
    show_reasons: "Begründungen",
    show_ah_compare: "Vergleich innen/außen (g/m³)",
    show_mold_hours: "Schimmelstunden",
    show_history_temp: "Verlauf Temperatur",
    show_history_hum: "Verlauf Luftfeuchte",
    show_comfort_others: "Andere Räume im Diagramm",
    show_outdoor_in_chart: "Außenwert im Diagramm",
    chart_temp_min: "Diagramm Temperatur von (°C)",
    chart_temp_max: "Diagramm Temperatur bis (°C)",
    font_scale: "Schriftgröße (%)",
    grid_min_width: "Raster: Kachelbreite min (px)",
    decimals_temp: "Nachkommastellen Temperatur",
    decimals_hum: "Nachkommastellen Feuchte",
    decimals_ah: "Nachkommastellen g/m³",
    vent_min_freezing: "Lüftdauer unter 0 °C (min)",
    vent_min_cold: "Lüftdauer 0–10 °C (min)",
    vent_min_cool: "Lüftdauer 10–15 °C (min)",
    vent_min_mild: "Lüftdauer 15–20 °C (min)",
    vent_min_warm: "Lüftdauer über 20 °C (min)",
    close_tolerance: "„Fenster schließen“ nach Lüftdauer + (min)",
    close_below: "Schließhinweis nur unter Außentemp. (°C)",
    heating_alarm: "Alarm: Heizung bei offenem Fenster",
    color_info: "Info",
    r_over: "Eigene Grenzwerte (leer = global)",
    layout: "Darstellung",
    l_tabs: "Raum-Tabs (Detail)",
    l_grid: "Raster (alle Räume)",
    language: "Sprache",
    lang_auto: "Automatisch",
    outdoor: "Außensensoren",
    outdoor_temperature: "Außentemperatur",
    outdoor_humidity: "Außenluftfeuchte",
    display: "Anzeige",
    show_ventilation: "Lüftungsempfehlung",
    show_mold: "Schimmelrisiko",
    show_comfort_chart: "Behaglichkeitsdiagramm",
    show_history: "Verlauf",
    history_hours: "Verlaufszeitraum (Stunden)",
    limits: "Grenzwerte",
    temp_min: "Temperatur min (°C)",
    temp_max: "Temperatur max (°C)",
    hum_min: "Luftfeuchte min (%)",
    hum_max: "Luftfeuchte max (%)",
    mold_warn: "Schimmel Warnung (% an der Wand)",
    mold_alarm: "Schimmel Alarm (% an der Wand)",
    co2_warn: "CO₂ Warnung (ppm)",
    co2_alarm: "CO₂ Alarm (ppm)",
    vent_threshold: "Lüften lohnt ab Differenz (g/m³)",
    frsi: "Temperaturfaktor Wand fRsi (0,7 = Mindestwärmeschutz)",
    colors: "Farben",
    color_temperature: "Temperatur",
    color_humidity: "Luftfeuchte",
    color_ok: "OK",
    color_warn: "Warnung",
    color_alarm: "Alarm",
    rooms: "Räume",
    add_room: "Raum hinzufügen",
    room: "Raum",
    name: "Name",
    icon: "Symbol (optional)",
    temperature: "Temperatur-Sensor",
    humidity: "Luftfeuchte-Sensor",
    window: "Fenster-Sensor (optional)",
    co2: "CO₂-Sensor (optional)",
    wall_temperature: "Wandtemperatur-Sensor (optional)",
    mold: "Schimmel-Sensor (optional)",
    climate: "Thermostate / Heizkörper (optional, mehrere möglich)",
    target_temperature: "Solltemperatur ohne Thermostat (optional)",
    up: "Nach oben",
    down: "Nach unten",
    remove: "Entfernen",
  },
  en: {
    title: "Title",
    g_forecast: "Weather forecast (best time to ventilate)",
    weather: "Weather entity (hourly forecast)",
    show_forecast: "Show best time to ventilate",
    show_trends: "Trend arrows",
    show_mold_week: "Mold balance (week)",
    show_devices: "De-/humidifier",
    show_vent_timer: "Ventilation timer (rooms without window sensor)",
    show_heat_loss: "Heat loss of open windows",
    heat_price: "Heat price (per kWh)",
    currency: "Currency",
    room_type: "Room type",
    rt_normal: "Living space",
    rt_cellar: "Cellar (dew point ventilation)",
    dehumidifier: "Dehumidifier (optional)",
    humidifier: "Humidifier (optional)",
    wall_learn: "Wall spot learning storage (input_text, optional)",
    wall_learn_help: "Create a helper: Settings → Devices & services → Helpers → Text, e.g. “Aura wall bedroom”. Then tap the wall surface tile and enter a measurement.",
    wall_temperature_help: "With learning storage the sensor can move on to the next room after a few days – the learned value stays.",
    g_air: "Air quality & CO₂ estimate",
    r_air: "Air quality & CO₂ estimate",
    show_air_quality: "Air quality",
    show_voc: "VOC",
    show_pm: "Particulates",
    co2_estimate: "Estimate CO₂ if no sensor",
    co2_estimate_vent: "Estimate triggers ventilation advice",
    default_volume: "Default room volume (m³)",
    default_persons: "Persons when present (default)",
    ach_closed: "Air change window closed (1/h)",
    ach_open: "Air change window open (1/h)",
    co2_outdoor: "Outdoor CO₂ (ppm)",
    aq_warn: "Air quality warning below",
    aq_alarm: "Air quality alarm below",
    voc: "VOC sensor (optional)",
    pm25: "PM2.5 sensor (optional)",
    pm10: "PM10 sensor (optional)",
    presence: "Presence / person count (optional)",
    volume: "Room volume (m³)",
    persons: "Persons (when present)",
    ach: "Air change window closed (1/h)",
    default_room: "Start room (no.)",
    tap_action: "Tap on values",
    ta_more: "Open details",
    ta_none: "Nothing",
    g_layout: "Layout & sections",
    g_tiles: "Tiles",
    g_details: "Details & charts",
    g_vent: "Ventilation",
    g_format: "Number format",
    show_title: "Title",
    show_outdoor: "Outdoor values in header",
    show_summary: "Summary",
    show_tabs: "Room tabs",
    tabs_mode: "Room tabs with many rooms",
    tm_wrap: "Wrap (multiple lines)",
    tm_scroll: "Scroll with arrows",
    blink: "Blink rooms with warnings",
    bl_warn: "On warning and alarm",
    bl_alarm: "Alarm only",
    bl_off: "Off",
    blink_speed: "Blink period (seconds)",
    show_gauge: "Gauge",
    show_dewpoint: "Dew point",
    show_abs_humidity: "Absolute humidity",
    show_wall: "Wall surface",
    show_co2: "CO₂",
    show_window: "Window",
    show_target: "Target temperature",
    show_mold_sensor: "Mold sensor",
    show_reasons: "Reasons",
    show_ah_compare: "Indoor/outdoor comparison (g/m³)",
    show_mold_hours: "Mold hours",
    show_history_temp: "History temperature",
    show_history_hum: "History humidity",
    show_comfort_others: "Other rooms in chart",
    show_outdoor_in_chart: "Outdoor value in chart",
    chart_temp_min: "Chart temperature from (°C)",
    chart_temp_max: "Chart temperature to (°C)",
    font_scale: "Font size (%)",
    grid_min_width: "Grid: min tile width (px)",
    decimals_temp: "Decimals temperature",
    decimals_hum: "Decimals humidity",
    decimals_ah: "Decimals g/m³",
    vent_min_freezing: "Duration below 0 °C (min)",
    vent_min_cold: "Duration 0–10 °C (min)",
    vent_min_cool: "Duration 10–15 °C (min)",
    vent_min_mild: "Duration 15–20 °C (min)",
    vent_min_warm: "Duration above 20 °C (min)",
    close_tolerance: "“Close window” after duration + (min)",
    close_below: "Close hint only below outdoor temp (°C)",
    heating_alarm: "Alarm: heating with open window",
    color_info: "Info",
    r_over: "Own thresholds (empty = global)",
    layout: "Layout",
    l_tabs: "Room tabs (detail)",
    l_grid: "Grid (all rooms)",
    language: "Language",
    lang_auto: "Automatic",
    outdoor: "Outdoor sensors",
    outdoor_temperature: "Outdoor temperature",
    outdoor_humidity: "Outdoor humidity",
    display: "Display",
    show_ventilation: "Ventilation advice",
    show_mold: "Mold risk",
    show_comfort_chart: "Comfort chart",
    show_history: "History",
    history_hours: "History period (hours)",
    limits: "Thresholds",
    temp_min: "Temperature min (°C)",
    temp_max: "Temperature max (°C)",
    hum_min: "Humidity min (%)",
    hum_max: "Humidity max (%)",
    mold_warn: "Mold warning (% at wall)",
    mold_alarm: "Mold alarm (% at wall)",
    co2_warn: "CO₂ warning (ppm)",
    co2_alarm: "CO₂ alarm (ppm)",
    vent_threshold: "Ventilate from difference (g/m³)",
    frsi: "Wall temperature factor fRsi (0.7 = minimum insulation)",
    colors: "Colors",
    color_temperature: "Temperature",
    color_humidity: "Humidity",
    color_ok: "OK",
    color_warn: "Warning",
    color_alarm: "Alarm",
    rooms: "Rooms",
    add_room: "Add room",
    room: "Room",
    name: "Name",
    icon: "Icon (optional)",
    temperature: "Temperature sensor",
    humidity: "Humidity sensor",
    window: "Window sensor (optional)",
    co2: "CO₂ sensor (optional)",
    wall_temperature: "Wall temperature sensor (optional)",
    mold: "Mold sensor (optional)",
    climate: "Thermostats / climate (optional, several allowed)",
    target_temperature: "Target temperature without thermostat (optional)",
    up: "Move up",
    down: "Move down",
    remove: "Remove",
  },
};

const AURA_COLOR_KEYS = ["color_temperature", "color_humidity", "color_ok", "color_warn", "color_alarm", "color_info"];

const hexToRgb = (v) => {
  if (Array.isArray(v)) return v;
  const m = /^#?([0-9a-f]{6})$/i.exec(String(v || ""));
  if (!m) return undefined;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const rgbToHex = (v) => (Array.isArray(v) ? "#" + v.map((x) => Number(x).toString(16).padStart(2, "0")).join("") : v);

class AuraClimateCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._open = new Set([0]);
  }

  setConfig(config) {
    this._config = JSON.parse(JSON.stringify(config || {}));
    if (!Array.isArray(this._config.rooms)) this._config.rooms = [];
    if (!this._built || this._roomCount !== this._config.rooms.length) this._render();
    else this._refreshData();
  }

  set hass(hass) {
    this._hass = hass;
    this.shadowRoot.querySelectorAll("ha-form").forEach((f) => (f.hass = hass));
  }

  async connectedCallback() {
    await this._ensureComponents();
    this._render();
  }

  async _ensureComponents() {
    if (customElements.get("ha-form") && customElements.get("ha-entity-picker")) return;
    try {
      const helpers = await window.loadCardHelpers?.();
      const card = await helpers?.createCardElement({ type: "entities", entities: [] });
      await card?.constructor?.getConfigElement?.();
    } catch (e) {
      /* ignore */
    }
  }

  get _l() {
    const l = (this._hass?.locale?.language || this._hass?.language || "en").slice(0, 2);
    return ED_I18N[l] || ED_I18N.en;
  }

  _generalSchema() {
    const l = this._l;
    const num = (name, min, max, step) => ({ name, selector: { number: { min, max, step, mode: "box" } } });
    const bools = (names) => ({ type: "grid", name: "", schema: names.map((n) => ({ name: n, selector: { boolean: {} } })) });
    const sec = (name, title, icon, schema) => ({ type: "expandable", name, flatten: true, title, icon, schema });
    return [
      { name: "title", selector: { text: {} } },
      {
        type: "grid",
        name: "",
        schema: [
          { name: "layout", selector: { select: { mode: "dropdown", options: [{ value: "tabs", label: l.l_tabs }, { value: "grid", label: l.l_grid }] } } },
          { name: "language", selector: { select: { mode: "dropdown", options: [{ value: "auto", label: l.lang_auto }, { value: "de", label: "Deutsch" }, { value: "en", label: "English" }] } } },
          num("default_room", 1, 50, 1),
          { name: "tap_action", selector: { select: { mode: "dropdown", options: [{ value: "more-info", label: l.ta_more }, { value: "none", label: l.ta_none }] } } },
        ],
      },
      sec("g_outdoor", l.outdoor, "mdi:home-thermometer-outline", [
        { name: "outdoor_temperature", selector: { entity: { domain: "sensor", device_class: "temperature" } } },
        { name: "outdoor_humidity", selector: { entity: { domain: "sensor", device_class: "humidity" } } },
      ]),
      sec("g_forecast", l.g_forecast, "mdi:weather-partly-cloudy", [
        { name: "weather", selector: { entity: { domain: "weather" } } },
        { name: "show_forecast", selector: { boolean: {} } },
      ]),
      sec("g_layout", l.g_layout, "mdi:view-dashboard-outline", [
        bools(["show_title", "show_outdoor", "show_summary", "show_tabs", "show_gauge", "show_ventilation", "show_mold", "show_comfort_chart", "show_history"]),
        { type: "grid", name: "", schema: [
          { name: "blink", selector: { select: { mode: "dropdown", options: [{ value: "warn", label: l.bl_warn }, { value: "alarm", label: l.bl_alarm }, { value: "off", label: l.bl_off }] } } },
          { name: "blink_speed", selector: { number: { min: 0.4, max: 5, step: 0.1, mode: "box", unit_of_measurement: "s" } } },
        ] },
        { name: "tabs_mode", selector: { select: { mode: "dropdown", options: [{ value: "wrap", label: l.tm_wrap }, { value: "scroll", label: l.tm_scroll }] } } },
        { type: "grid", name: "", schema: [num("font_scale", 60, 160, 5), num("grid_min_width", 100, 400, 10)] },
      ]),
      sec("g_tiles", l.g_tiles, "mdi:view-grid-outline", [
        bools(["show_air_quality", "show_dewpoint", "show_abs_humidity", "show_wall", "show_co2", "show_voc", "show_pm", "show_window", "show_target", "show_mold_sensor", "show_devices"]),
      ]),
      sec("g_details", l.g_details, "mdi:chart-bell-curve", [
        bools(["show_trends", "show_mold_week", "show_reasons", "show_ah_compare", "show_mold_hours", "show_history_temp", "show_history_hum", "show_comfort_others", "show_outdoor_in_chart"]),
        { type: "grid", name: "", schema: [num("history_hours", 1, 168, 1), num("chart_temp_min", 0, 30, 1), num("chart_temp_max", 15, 45, 1)] },
      ]),
      sec("g_limits", l.limits, "mdi:tune-variant", [
        { type: "grid", name: "", schema: [num("temp_min", 10, 30, 0.5), num("temp_max", 10, 35, 0.5), num("hum_min", 10, 90, 1), num("hum_max", 10, 95, 1)] },
        { type: "grid", name: "", schema: [num("mold_warn", 50, 100, 1), num("mold_alarm", 50, 100, 1), num("co2_warn", 400, 5000, 50), num("co2_alarm", 400, 5000, 50)] },
        num("frsi", 0.5, 0.95, 0.01),
      ]),
      sec("g_vent", l.g_vent, "mdi:weather-windy", [
        num("vent_threshold", 0, 5, 0.1),
        { type: "grid", name: "", schema: [num("vent_min_freezing", 1, 60, 1), num("vent_min_cold", 1, 60, 1), num("vent_min_cool", 1, 60, 1), num("vent_min_mild", 1, 90, 1), num("vent_min_warm", 1, 120, 1)] },
        { type: "grid", name: "", schema: [num("close_tolerance", 0, 60, 1), num("close_below", -10, 30, 1)] },
        { name: "heating_alarm", selector: { boolean: {} } },
        bools(["show_vent_timer", "show_heat_loss"]),
        { type: "grid", name: "", schema: [num("heat_price", 0, 2, 0.01), { name: "currency", selector: { text: {} } }] },
      ]),
      sec("g_air", l.g_air, "mdi:leaf", [
        bools(["co2_estimate", "co2_estimate_vent"]),
        { type: "grid", name: "", schema: [num("default_volume", 5, 500, 1), num("default_persons", 0, 20, 1), num("ach_closed", 0.05, 3, 0.05), num("ach_open", 1, 30, 0.5), num("co2_outdoor", 350, 600, 5)] },
        { type: "grid", name: "", schema: [num("aq_warn", 10, 100, 1), num("aq_alarm", 0, 100, 1)] },
      ]),
      sec("g_format", l.g_format, "mdi:decimal", [
        { type: "grid", name: "", schema: [num("decimals_temp", 0, 2, 1), num("decimals_hum", 0, 2, 1), num("decimals_ah", 0, 2, 1)] },
      ]),
      sec("g_colors", l.colors, "mdi:palette-outline", [
        {
          type: "grid",
          name: "",
          schema: AURA_COLOR_KEYS.map((n) => ({ name: n, selector: { color_rgb: {} } })),
        },
      ]),
    ];
  }

  _roomSchema() {
    const l = this._l;
    const ent = (name, domain, dc) => ({ name, selector: { entity: dc ? { domain, device_class: dc } : { domain } } });
    const num = (name, min, max, step) => ({ name, selector: { number: { min, max, step, mode: "box" } } });
    return [
      { type: "grid", name: "", schema: [{ name: "name", selector: { text: {} } }, { name: "icon", selector: { icon: {} } }] },
      ent("temperature", "sensor", "temperature"),
      ent("humidity", "sensor", "humidity"),
      ent("window", "binary_sensor"),
      ent("co2", "sensor", "carbon_dioxide"),
      {
        type: "expandable",
        name: "r_air",
        flatten: true,
        title: l.r_air,
        icon: "mdi:leaf",
        schema: [
          ent("voc", "sensor"),
          { type: "grid", name: "", schema: [ent("pm25", "sensor", "pm25"), ent("pm10", "sensor", "pm10")] },
          { name: "presence", selector: { entity: { domain: ["binary_sensor", "sensor", "input_number", "input_boolean"] } } },
          { type: "grid", name: "", schema: [num("volume", 5, 500, 1), num("persons", 0, 20, 1), num("ach", 0.05, 3, 0.05)] },
        ],
      },
      ent("wall_temperature", "sensor", "temperature"),
      ent("wall_learn", "input_text"),
      ent("mold", "sensor"),
      { name: "climate", selector: { entity: { domain: "climate", multiple: true } } },
      {
        name: "room_type",
        selector: { select: { mode: "dropdown", options: [{ value: "normal", label: l.rt_normal }, { value: "cellar", label: l.rt_cellar }] } },
      },
      {
        type: "grid",
        name: "",
        schema: [
          { name: "dehumidifier", selector: { entity: { domain: ["humidifier", "switch", "fan", "input_boolean"] } } },
          { name: "humidifier", selector: { entity: { domain: ["humidifier", "switch", "fan", "input_boolean"] } } },
        ],
      },
      num("target_temperature", 5, 30, 0.5),
      {
        type: "expandable",
        name: "r_over",
        flatten: true,
        title: l.r_over,
        icon: "mdi:tune-vertical",
        schema: [
          { type: "grid", name: "", schema: [num("temp_min", 10, 30, 0.5), num("temp_max", 10, 35, 0.5), num("hum_min", 10, 90, 1), num("hum_max", 10, 95, 1)] },
          { type: "grid", name: "", schema: [num("mold_warn", 50, 100, 1), num("mold_alarm", 50, 100, 1), num("co2_warn", 400, 5000, 50), num("co2_alarm", 400, 5000, 50)] },
          { type: "grid", name: "", schema: [num("frsi", 0.5, 0.95, 0.01), num("vent_threshold", 0, 5, 0.1)] },
        ],
      },
    ];
  }

  // ältere Konfigurationen: climate als Einzelwert → Liste für den Mehrfach-Picker
  _roomData(room) {
    return room && room.climate !== undefined ? { ...room, climate: toList(room.climate) } : room;
  }

  _generalData() {
    const d = { ...AURA_DEFAULTS, ...this._config };
    delete d.rooms;
    AURA_COLOR_KEYS.forEach((k) => (d[k] = hexToRgb(d[k])));
    return d;
  }

  _render() {
    if (!this._config) return;
    this._built = true;
    this._roomCount = this._config.rooms.length;
    const l = this._l;
    const label = (s) => l[s.name] ?? s.name;
    const root = this.shadowRoot;
    root.innerHTML = `
      <style>
        .sec{margin-top:20px;font-weight:600;font-size:1.05em;display:flex;align-items:center;justify-content:space-between}
        .room{border:1px solid var(--divider-color);border-radius:12px;margin-top:10px;overflow:hidden}
        .rh{display:flex;align-items:center;gap:6px;padding:8px 10px;cursor:pointer;background:var(--secondary-background-color)}
        .rh .n{flex:1;font-weight:600}
        .rb{padding:12px}
        button.i{border:0;background:none;color:var(--secondary-text-color);cursor:pointer;font-size:16px;padding:4px 6px;border-radius:6px}
        button.i:hover{background:var(--divider-color)}
        button.add{margin-top:12px;width:100%;padding:10px;border-radius:10px;border:1px dashed var(--primary-color);background:none;color:var(--primary-color);font:inherit;cursor:pointer}
        .chev{transition:transform .2s;display:inline-block}.open .chev{transform:rotate(90deg)}
        .ver{margin-top:16px;font-size:.75em;color:var(--secondary-text-color);text-align:right}
      </style>
      <div id="general"></div>
      <div class="sec">${l.rooms}</div>
      <div id="rooms"></div>
      <button class="add" id="add">＋ ${l.add_room}</button>
      <div class="ver">Aura Climate Card v${AURA_VERSION}</div>`;

    const g = document.createElement("ha-form");
    g.hass = this._hass;
    g.schema = this._generalSchema();
    g.data = this._generalData();
    g.computeLabel = label;
    g.addEventListener("value-changed", (ev) => {
      const v = { ...ev.detail.value };
      AURA_COLOR_KEYS.forEach((k) => {
        if (v[k] !== undefined) v[k] = rgbToHex(v[k]);
      });
      const rooms = this._config.rooms;
      this._config = { ...this._config, ...v, rooms };
      // nur Abweichungen vom Standard ins YAML schreiben
      Object.keys(this._config).forEach((k) => {
        const val = this._config[k];
        const def = AURA_DEFAULTS[k];
        const same = def !== undefined && String(val).toLowerCase() === String(def).toLowerCase();
        if (val === "" || val === undefined || val === null || same) delete this._config[k];
      });
      this._fire();
    });
    root.getElementById("general").appendChild(g);
    this._gForm = g;

    const wrap = root.getElementById("rooms");
    this._rForms = [];
    this._config.rooms.forEach((room, i) => {
      const box = document.createElement("div");
      box.className = "room" + (this._open.has(i) ? " open" : "");
      box.innerHTML = `<div class="rh"><span class="chev">›</span><span class="n">${esc(room.name || `${l.room} ${i + 1}`)}</span>
        <button class="i" data-a="up" title="${l.up}" ${i === 0 ? "disabled" : ""}>↑</button>
        <button class="i" data-a="down" title="${l.down}" ${i === this._config.rooms.length - 1 ? "disabled" : ""}>↓</button>
        <button class="i" data-a="del" title="${l.remove}">✕</button></div>`;
      const body = document.createElement("div");
      body.className = "rb";
      body.style.display = this._open.has(i) ? "" : "none";
      const f = document.createElement("ha-form");
      f.hass = this._hass;
      f.schema = this._roomSchema();
      f.data = this._roomData(room);
      f.computeLabel = label;
      f.computeHelper = (sc) => (sc.name === "wall_learn" ? l.wall_learn_help : sc.name === "wall_temperature" ? l.wall_temperature_help : undefined);
      f.addEventListener("value-changed", (ev) => {
        const v = { ...ev.detail.value };
        Object.keys(v).forEach((k) => (v[k] === "" || v[k] === undefined || v[k] === null || (Array.isArray(v[k]) && !v[k].length)) && delete v[k]);
        this._config.rooms = this._config.rooms.map((r, j) => (j === i ? v : r));
        box.querySelector(".n").textContent = v.name || `${l.room} ${i + 1}`;
        this._fire();
      });
      body.appendChild(f);
      box.appendChild(body);
      this._rForms.push(f);
      box.querySelector(".rh").addEventListener("click", (ev) => {
        const a = ev.target.closest("button")?.dataset.a;
        const rooms = [...this._config.rooms];
        if (a === "up" && i > 0) [rooms[i - 1], rooms[i]] = [rooms[i], rooms[i - 1]];
        else if (a === "down" && i < rooms.length - 1) [rooms[i + 1], rooms[i]] = [rooms[i], rooms[i + 1]];
        else if (a === "del") {
          rooms.splice(i, 1);
          this._open.delete(i);
        } else if (!a) {
          this._open.has(i) ? this._open.delete(i) : this._open.add(i);
          box.classList.toggle("open");
          body.style.display = this._open.has(i) ? "" : "none";
          return;
        } else return;
        this._config.rooms = rooms;
        this._fire();
        this._render();
      });
      wrap.appendChild(box);
    });

    root.getElementById("add").addEventListener("click", () => {
      this._config.rooms = [...this._config.rooms, { name: `${l.room} ${this._config.rooms.length + 1}` }];
      this._open.add(this._config.rooms.length - 1);
      this._fire();
      this._render();
    });
  }

  _refreshData() {
    if (this._gForm) this._gForm.data = this._generalData();
    (this._rForms || []).forEach((f, i) => (f.data = this._roomData(this._config.rooms[i])));
  }

  _fire() {
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
  }
}

if (!customElements.get("aura-climate-card")) customElements.define("aura-climate-card", AuraClimateCard);
if (!customElements.get("aura-climate-card-editor")) customElements.define("aura-climate-card-editor", AuraClimateCardEditor);

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "aura-climate-card")) {
  window.customCards.push({
    type: "aura-climate-card",
    name: "Aura Climate Card",
    description: "Raumklima: Temperatur, Luftfeuchte, Taupunkt, Schimmelrisiko & Lüftungsempfehlung",
    preview: true,
    documentationURL: "https://github.com/muhkuh666/Aura-Climate-Card",
  });
}

console.info(
  `%c AURA-CLIMATE-CARD %c v${AURA_VERSION} `,
  "color:#fff;background:#29b6f6;font-weight:700;border-radius:4px 0 0 4px;padding:2px 4px",
  "color:#29b6f6;background:#e1f5fe;font-weight:700;border-radius:0 4px 4px 0;padding:2px 4px"
);
