/*!
 * Aura Climate Card – Raumklima, Schimmelrisiko & Lüftungsempfehlung für Home Assistant
 * MIT © muhkuh666 – https://github.com/muhkuh666/Aura-Climate-Card
 */
const AURA_VERSION = "1.0.0";

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
  show_ventilation: true,
  show_mold: true,
  show_comfort_chart: true,
  show_history: true,
  history_hours: 24,
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
};

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
  ventMinutes: (tout) => (tout < 0 ? 5 : tout < 10 ? 10 : tout < 15 ? 15 : tout < 20 ? 20 : 25),
};

const LEVEL = { ok: 0, info: 1, warn: 2, alarm: 3 };

/* ------------------------------------------------------------------ */
/*  Hilfsfunktionen                                                    */
/* ------------------------------------------------------------------ */
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

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
    if (this._sel >= this._rooms.length) this._sel = 0;
    this._sig = "";
    this._hist = null;
    this._histAt = 0;
    if (this._hass) this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  connectedCallback() {
    this._timer = setInterval(() => {
      this._sig = "";
      this._update();
    }, 60000);
    if (this._hass) this._update();
  }
  disconnectedCallback() {
    clearInterval(this._timer);
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

  _outdoor() {
    const c = this._config;
    const t = this._num(c.outdoor_temperature);
    const rh = this._num(c.outdoor_humidity);
    const ok = t != null && rh != null;
    return { t, rh, ah: ok ? Phys.ah(t, rh) : null, ok, hasT: t != null };
  }

  _analyze(room, out) {
    const c = this._config;
    const t = this._num(room.temperature);
    const rh = this._num(room.humidity);
    const a = { room, t, rh, valid: t != null && rh != null, level: "ok", reasons: [] };
    a.co2 = this._num(room.co2);
    a.moldSensor = this._num(room.mold);
    const climate = this._st(room.climate);
    a.target = climate?.attributes?.temperature ?? (room.target_temperature != null ? Number(room.target_temperature) : null);
    a.heating =
      !!climate && (climate.attributes?.hvac_action === "heating" || (climate.attributes?.hvac_action == null && climate.state === "heat"));
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
      a.wallEst = true;
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

    this._ventilation(a, out);

    const moldLvl = a.mold === "high" ? "alarm" : a.mold === "medium" ? "warn" : "ok";
    a.level = LEVEL[moldLvl] > LEVEL[a.vLevel] ? moldLvl : a.vLevel;
    return a;
  }

  _ventilation(a, out) {
    const c = this._config;
    const R = a.reasons;
    const needs = [];
    if (a.rh > c.hum_max) needs.push("humid");
    if (a.mold !== "low") needs.push("mold");
    if (a.co2 != null && a.co2 >= c.co2_warn) needs.push("co2");

    a.duration = out.hasT ? Phys.ventMinutes(out.t) : 10;
    if (out.ok) {
      a.drier = out.ah < a.ah - Number(c.vent_threshold);
      // Außenluft auf Raumtemperatur erwärmt → rel. Feuchte nach dem Lüften
      a.rhAfter = Phys.rhAt((out.ah * (273.15 + a.t)) / 216.7, a.t);
    }
    const cooling = out.hasT && a.t > c.temp_max && out.t < a.t - 2;
    const hotOut = out.hasT && out.t > a.t + 1 && a.t >= c.temp_max - 1;
    const ahTxt = () => ({ o: this._n(out.ah, 1), i: this._n(a.ah, 1) });

    let key = "v_ok",
      lvl = "ok";

    if (a.windowOpen) {
      R.push(this._t("r_open", { m: a.openMin }));
      if (a.heating && out.hasT && out.t < 15) {
        key = "v_heat";
        lvl = "alarm";
        R.push(this._t("r_heat"));
      } else if (hotOut) {
        key = "v_close";
        lvl = "warn";
        R.push(this._t("r_hot"));
      } else if (out.hasT && out.t < 15 && a.openMin > a.duration + 5 && !needs.includes("co2")) {
        key = "v_close";
        lvl = "warn";
      } else {
        key = "v_open";
        lvl = "info";
        const left = a.duration - a.openMin;
        if (left > 0 && out.hasT && out.t < 15) R.push(this._t("dur_left", { m: left }));
      }
    } else if (needs.length) {
      if (needs.includes("humid")) R.push(this._t("r_humid", { v: c.hum_max }));
      if (needs.includes("mold")) R.push(this._t("r_mold"));
      if (needs.includes("co2")) R.push(this._t("r_co2", { v: c.co2_warn }));
      const co2Only = needs.length === 1 && needs[0] === "co2";
      if (!out.ok) {
        key = "v_now";
        lvl = "warn";
        if (!co2Only) R.push(this._t("r_nooutdoor"));
      } else if (a.drier || co2Only) {
        key = "v_now";
        lvl = a.mold === "high" || (a.co2 ?? 0) >= c.co2_alarm ? "alarm" : "warn";
        if (a.drier) {
          R.push(this._t("r_drier", ahTxt()));
          R.push(this._t("r_after", { v: this._n(a.rhAfter, 0) }));
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
      R.push(this._t("r_cooler", { o: this._n(out.t, 1) }));
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

  /* ---------- Verlauf ---------- */
  async _loadHistory() {
    const c = this._config;
    if (!this._hass || (!c.show_history && !c.show_mold)) return;
    if (this._histLoading || Date.now() - this._histAt < 10 * 60 * 1000) return;
    const ids = new Set([c.outdoor_temperature]);
    this._rooms.forEach((r) => [r.temperature, r.humidity, r.wall_temperature].forEach((i) => ids.add(i)));
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
      const map = {};
      (res || []).forEach((arr) => {
        if (!arr?.length) return;
        const id = arr[0].entity_id;
        map[id] = arr
          .map((p) => ({ t: new Date(p.last_changed || p.last_updated).getTime(), v: parseFloat(p.state) }))
          .filter((p) => isFinite(p.v) && isFinite(p.t));
      });
      this._hist = { map, hours, from: Date.now() - hours * 3600e3, to: Date.now() };
      this._histAt = Date.now();
      this._sig = "";
      this._update();
    } catch (e) {
      this._histAt = Date.now();
      console.warn("aura-climate-card: history", e);
    } finally {
      this._histLoading = false;
    }
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

  _moldHours(room) {
    const h = this._hist;
    if (!h) return null;
    const T = h.map[room.temperature],
      H = h.map[room.humidity];
    if (!T?.length || !H?.length) return null;
    const W = h.map[room.wall_temperature];
    const O = h.map[this._config.outdoor_temperature];
    const step = 5 * 60e3;
    let above = 0;
    for (let ts = h.from + step / 2; ts < h.to; ts += step) {
      const t = this._at(T, ts),
        rh = this._at(H, ts);
      if (t == null || rh == null) continue;
      let wall;
      const wv = W ? this._at(W, ts) : null;
      const ov = O ? this._at(O, ts) : null;
      if (wv != null) wall = wv;
      else if (ov != null) wall = Phys.wall(t, ov, Number(this._config.frsi));
      else wall = t - 3;
      if (Phys.rhAt(Phys.vapor(t, rh), wall) >= this._config.mold_alarm) above += step;
    }
    return above / 3600e3;
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
    const c = this._config;
    const ids = [c.outdoor_temperature, c.outdoor_humidity];
    this._rooms.forEach((r) => ids.push(r.temperature, r.humidity, r.window, r.co2, r.wall_temperature, r.mold, r.climate));
    const sig = ids
      .map((i) => {
        const s = this._st(i);
        return s ? s.state + "|" + (s.attributes?.temperature ?? "") + "|" + (s.attributes?.hvac_action ?? "") + "|" + s.last_changed : "";
      })
      .join(";") + `#${this._sel}#${this._detail}#${this._lang}`;
    if (sig === this._sig) return;
    this._sig = sig;
    this._render();
    this._loadHistory();
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
    col.info = col.hum;
    this._col = col;
    const out = this._outdoor();
    const all = this._rooms.map((r) => this._analyze(r, out));
    this._all = all;

    let body;
    if (!this._rooms.length) body = `<div class="empty">${this._t("no_rooms")}</div>`;
    else if (c.layout === "grid" && this._detail == null) body = this._renderGrid(all, out);
    else {
      const idx = c.layout === "grid" ? this._detail : this._sel;
      body = this._renderTabs(all, idx) + this._renderRoom(all[idx] || all[0], out, all);
    }

    const title = c.title ?? this._t("title");
    this.shadowRoot.innerHTML = `
      <style>${this._css(col)}</style>
      <ha-card>
        <div class="head">
          <div class="title">${title ? esc(title) : ""}</div>
          ${this._renderOutdoor(out)}
        </div>
        ${this._rooms.length ? this._renderSummary(all) : ""}
        ${body}
      </ha-card>`;
    this._bind();
  }

  _renderOutdoor(out) {
    const c = this._config;
    if (!c.outdoor_temperature && !c.outdoor_humidity) return "";
    return `<button class="out" data-entity="${esc(c.outdoor_temperature || c.outdoor_humidity)}" title="${this._t("outdoor")}">
      ${icon("home", "dim")}<span class="lbl">${this._t("outdoor")}</span>
      <b>${this._n(out.t, 1)} °C</b><span>${this._n(out.rh, 0)} %</span>
      ${out.ok ? `<span class="dim">${this._n(out.ah, 1)} g/m³</span>` : ""}
    </button>`;
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

  _renderTabs(all, idx) {
    const c = this._config;
    if (c.layout === "grid") {
      return `<div class="tabs"><button class="tab back" data-back="1">${icon("back")}${this._t("back")}</button>
        <span class="tab sel"><i class="dot lv-${all[idx].level}"></i>${esc(all[idx].room.name || "–")}</span></div>`;
    }
    if (all.length < 2) return "";
    return `<div class="tabs">${all
      .map(
        (a, i) => `<button class="tab ${i === idx ? "sel" : ""}" data-room="${i}">
          ${a.room.icon ? `<ha-icon icon="${esc(a.room.icon)}"></ha-icon>` : `<i class="dot lv-${a.level}"></i>`}
          ${esc(a.room.name || `#${i + 1}`)}
          ${a.room.icon && a.level !== "ok" ? `<i class="dot lv-${a.level}"></i>` : ""}
        </button>`
      )
      .join("")}</div>`;
  }

  _renderGrid(all) {
    return `<div class="grid">${all
      .map((a, i) => {
        const v = a.valid;
        return `<button class="gtile lv-${a.level}" data-detail="${i}">
          <div class="gname">${a.room.icon ? `<ha-icon icon="${esc(a.room.icon)}"></ha-icon>` : ""}<span>${esc(a.room.name || `#${i + 1}`)}</span><i class="dot lv-${a.level}"></i></div>
          <div class="gvals"><span class="gt">${v ? this._n(a.t, 1) : "–"}<small>°C</small></span>
          <span class="gh">${icon("drop")}${v ? this._n(a.rh, 0) : "–"}<small>%</small></span></div>
          <div class="gfoot">
            ${v ? `<span class="chip lv-${a.vLevel}">${icon(a.windowOpen ? "windowOpen" : "wind")}${this._t(a.vKey)}</span>` : `<span class="dim">${this._t("unavailable")}</span>`}
            ${v && a.mold !== "low" ? `<span class="chip lv-${a.mold === "high" ? "alarm" : "warn"}">${icon("mold")}${this._t("risk_" + a.mold)}</span>` : ""}
            ${a.co2 != null ? `<span class="chip">${this._n(a.co2, 0)} ppm</span>` : ""}
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
    const tiles = [
      { ic: "dew", label: this._t("dewpoint"), val: `${this._n(a.dew, 1)} °C`, ent: r.humidity },
      { ic: "drop", label: this._t("abs_humidity"), val: `${this._n(a.ah, 1)} g/m³`, ent: r.humidity },
      {
        ic: "wall",
        label: this._t("wall"),
        val: `${this._n(a.wall, 1)} °C`,
        sub: this._t(a.wallEst ? "wall_est" : "wall_meas"),
        ent: r.wall_temperature || c.outdoor_temperature,
        cls: a.condensation ? "lv-alarm" : "",
      },
    ];
    if (a.co2 != null) {
      const lv = a.co2 >= c.co2_alarm ? "alarm" : a.co2 >= c.co2_warn ? "warn" : "";
      tiles.push({ ic: "co2", label: this._t("co2"), val: `${this._n(a.co2, 0)} ppm`, ent: r.co2, cls: lv ? "lv-" + lv : "" });
    }
    if (a.hasWindow)
      tiles.push({
        ic: a.windowOpen ? "windowOpen" : "window",
        label: this._t("window"),
        val: a.windowOpen ? `${this._t("open")} · ${a.openMin} min` : this._t("closed"),
        ent: r.window,
        cls: a.windowOpen ? "lv-info" : "",
      });
    if (a.target != null)
      tiles.push({
        ic: a.heating ? "flame" : "target",
        label: this._t("target"),
        val: `${this._n(a.target, 1)} °C`,
        ent: r.climate,
        cls: a.heating ? "lv-warn" : "",
      });
    if (a.moldSensor != null)
      tiles.push({ ic: "mold", label: this._t("mold_sensor"), val: `${this._n(a.moldSensor, 0)}${esc(this._st(r.mold)?.attributes?.unit_of_measurement ? " " + this._st(r.mold).attributes.unit_of_measurement : "")}`, ent: r.mold });

    const sections = [];
    if (c.show_ventilation) sections.push(this._renderVent(a));
    if (c.show_mold) sections.push(this._renderMold(a));
    const charts = [];
    if (c.show_comfort_chart) charts.push(this._renderComfort(a, all));
    if (c.show_history) charts.push(this._renderHistory(a));

    return `
      <div class="main">
        ${this._renderGauge(a)}
        <div class="tiles">${tiles
          .map(
            (t) => `<button class="tile ${t.cls || ""}" data-entity="${esc(t.ent || "")}">
              ${icon(t.ic)}<div><div class="tl">${t.label}</div><div class="tv">${t.val}</div>${t.sub ? `<div class="ts">${t.sub}</div>` : ""}</div>
            </button>`
          )
          .join("")}</div>
      </div>
      ${sections.join("")}
      ${charts.length ? `<div class="charts">${charts.join("")}</div>` : ""}`;
  }

  _renderGauge(a) {
    const c = this._config,
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
        <div class="gtemp" style="color:${tOk ? "var(--primary-text-color)" : col.temp}">${this._n(a.t, 1)}<small>°C</small></div>
        <div class="ghum" data-entity="${esc(a.room.humidity)}">${icon("drop")}${this._n(a.rh, 0)} %</div>
        <div class="gcomf ${a.comfort.length ? "bad" : ""}">${comfort}</div>
      </button>
    </div>`;
  }

  _renderVent(a) {
    const out = this._outdoor();
    const ic = a.vKey === "v_heat" ? "flame" : a.windowOpen ? "windowOpen" : a.vKey === "v_ok" ? "check" : a.vKey === "v_keep" ? "sun" : "wind";
    return `<div class="vent lv-${a.vLevel}">
      <div class="vic">${icon(ic)}</div>
      <div class="vtx">
        <div class="vh">${this._t(a.vKey)}${a.showDuration ? `<span class="vdur">${this._t("dur", { m: a.duration })}</span>` : ""}</div>
        ${a.reasons.length ? `<ul>${a.reasons.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
      </div>
      ${out.ok ? `<div class="vcmp" title="${this._t("abs_humidity")}">
        <div><span>${this._n(a.ah, 1)}</span><small>${this._t("inside")}</small></div>
        <div class="arr ${a.drier ? "good" : ""}">${a.drier ? "›" : "‹"}</div>
        <div><span>${this._n(out.ah, 1)}</span><small>${this._t("outside")}</small></div>
        <em>g/m³</em>
      </div>` : ""}
    </div>`;
  }

  _renderMold(a) {
    const c = this._config,
      col = this._col;
    const lv = a.mold === "high" ? "alarm" : a.mold === "medium" ? "warn" : "ok";
    const pos = Math.max(0, Math.min(100, a.surfRh));
    const span = 100 - 40; // Skala 40–100 %
    const p = (v) => ((Math.max(40, Math.min(100, v)) - 40) / span) * 100;
    const mh = this._moldHours(a.room);
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
    const c = this._config,
      col = this._col;
    const W = 260,
      H = 170,
      L = 30,
      B = 22,
      T = 8,
      Rr = 8;
    const tx = [14, 30],
      hy = [10, 90];
    const X = (t) => L + ((Math.max(tx[0], Math.min(tx[1], t)) - tx[0]) / (tx[1] - tx[0])) * (W - L - Rr);
    const Y = (h) => T + (1 - (Math.max(hy[0], Math.min(hy[1], h)) - hy[0]) / (hy[1] - hy[0])) * (H - T - B);
    const rect = (t1, t2, h1, h2, fill, op) =>
      `<rect x="${X(t1)}" y="${Y(h2)}" width="${X(t2) - X(t1)}" height="${Y(h1) - Y(h2)}" rx="6" fill="${fill}" opacity="${op}"/>`;
    let g = "";
    for (let t = 16; t <= 28; t += 4) g += `<line x1="${X(t)}" x2="${X(t)}" y1="${T}" y2="${H - B}" class="gl"/><text x="${X(t)}" y="${H - 6}" class="ax" text-anchor="middle">${t}°</text>`;
    for (let h = 20; h <= 80; h += 20) g += `<line x1="${L}" x2="${W - Rr}" y1="${Y(h)}" y2="${Y(h)}" class="gl"/><text x="${L - 4}" y="${Y(h) + 3}" class="ax" text-anchor="end">${h}%</text>`;
    const dots = all
      .filter((a) => a.valid)
      .map((a) => {
        const me = a === cur;
        return `<circle cx="${X(a.t)}" cy="${Y(a.rh)}" r="${me ? 6.5 : 4}" fill="${me ? col.hum : "var(--secondary-text-color)"}" opacity="${me ? 1 : 0.55}" ${me ? `stroke="var(--card-bg)" stroke-width="2"` : ""}><title>${esc(a.room.name || "")}: ${this._n(a.t, 1)} °C / ${this._n(a.rh, 0)} %</title></circle>`;
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
        ${out.ok && out.t >= tx[0] && out.t <= tx[1] ? `<circle cx="${X(out.t)}" cy="${Y(out.rh)}" r="4" fill="none" stroke="var(--secondary-text-color)" stroke-dasharray="2 2"/>` : ""}
      </svg></div>`;
  }

  _renderHistory(a) {
    const col = this._col;
    const hours = this._config.history_hours;
    const h = this._hist;
    const head = `<div class="ch">${this._t("history", { h: hours })}
      <span class="lg"><i style="background:${col.temp}"></i>°C <i style="background:${col.hum}"></i>%</span></div>`;
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
    const lt = line(T, col.temp, a.t),
      lh = line(Hm, col.hum, a.rh);
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
    ha-card{padding:16px;overflow:hidden;color:var(--primary-text-color)}
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
    .tabs{display:flex;gap:6px;margin-top:12px;overflow-x:auto;scrollbar-width:none}
    .tab{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:var(--soft);white-space:nowrap;font-size:.9em}
    .tab.sel{background:color-mix(in srgb,var(--hum) 22%,transparent);font-weight:600}
    .tab ha-icon{--mdc-icon-size:18px}
    .main{display:grid;grid-template-columns:minmax(170px,210px) 1fr;gap:14px;align-items:center;margin-top:12px}
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
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin-top:12px}
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
    climate: "Thermostat / Klima (optional)",
    target_temperature: "Solltemperatur ohne Thermostat (optional)",
    up: "Nach oben",
    down: "Nach unten",
    remove: "Entfernen",
  },
  en: {
    title: "Title",
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
    climate: "Thermostat / climate (optional)",
    target_temperature: "Target temperature without thermostat (optional)",
    up: "Move up",
    down: "Move down",
    remove: "Remove",
  },
};

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
    return [
      { name: "title", selector: { text: {} } },
      {
        type: "grid",
        name: "",
        schema: [
          { name: "layout", selector: { select: { mode: "dropdown", options: [{ value: "tabs", label: l.l_tabs }, { value: "grid", label: l.l_grid }] } } },
          { name: "language", selector: { select: { mode: "dropdown", options: [{ value: "auto", label: l.lang_auto }, { value: "de", label: "Deutsch" }, { value: "en", label: "English" }] } } },
        ],
      },
      {
        type: "expandable",
        name: "g_outdoor",
        flatten: true,
        title: l.outdoor,
        icon: "mdi:home-thermometer-outline",
        schema: [
          { name: "outdoor_temperature", selector: { entity: { domain: "sensor", device_class: "temperature" } } },
          { name: "outdoor_humidity", selector: { entity: { domain: "sensor", device_class: "humidity" } } },
        ],
      },
      {
        type: "expandable",
        name: "g_display",
        flatten: true,
        title: l.display,
        icon: "mdi:eye-outline",
        schema: [
          { type: "grid", name: "", schema: ["show_ventilation", "show_mold", "show_comfort_chart", "show_history"].map((n) => ({ name: n, selector: { boolean: {} } })) },
          num("history_hours", 1, 168, 1),
        ],
      },
      {
        type: "expandable",
        name: "g_limits",
        flatten: true,
        title: l.limits,
        icon: "mdi:tune-variant",
        schema: [
          { type: "grid", name: "", schema: [num("temp_min", 10, 30, 0.5), num("temp_max", 10, 35, 0.5), num("hum_min", 10, 90, 1), num("hum_max", 10, 95, 1)] },
          { type: "grid", name: "", schema: [num("mold_warn", 50, 100, 1), num("mold_alarm", 50, 100, 1), num("co2_warn", 400, 5000, 50), num("co2_alarm", 400, 5000, 50)] },
          { type: "grid", name: "", schema: [num("vent_threshold", 0, 5, 0.1), num("frsi", 0.5, 0.95, 0.01)] },
        ],
      },
      {
        type: "expandable",
        name: "g_colors",
        flatten: true,
        title: l.colors,
        icon: "mdi:palette-outline",
        schema: [
          {
            type: "grid",
            name: "",
            schema: ["color_temperature", "color_humidity", "color_ok", "color_warn", "color_alarm"].map((n) => ({ name: n, selector: { color_rgb: {} } })),
          },
        ],
      },
    ];
  }

  _roomSchema() {
    const ent = (name, domain, dc) => ({ name, selector: { entity: dc ? { domain, device_class: dc } : { domain } } });
    return [
      { type: "grid", name: "", schema: [{ name: "name", selector: { text: {} } }, { name: "icon", selector: { icon: {} } }] },
      ent("temperature", "sensor", "temperature"),
      ent("humidity", "sensor", "humidity"),
      ent("window", "binary_sensor"),
      ent("co2", "sensor", "carbon_dioxide"),
      ent("wall_temperature", "sensor", "temperature"),
      ent("mold", "sensor"),
      ent("climate", "climate"),
      { name: "target_temperature", selector: { number: { min: 5, max: 30, step: 0.5, mode: "box" } } },
    ];
  }

  _generalData() {
    const d = { ...AURA_DEFAULTS, ...this._config };
    delete d.rooms;
    ["color_temperature", "color_humidity", "color_ok", "color_warn", "color_alarm"].forEach((k) => (d[k] = hexToRgb(d[k])));
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
      ["color_temperature", "color_humidity", "color_ok", "color_warn", "color_alarm"].forEach((k) => {
        if (v[k] !== undefined) v[k] = rgbToHex(v[k]);
      });
      const rooms = this._config.rooms;
      this._config = { ...this._config, ...v, rooms };
      Object.keys(this._config).forEach((k) => {
        if (this._config[k] === "" || this._config[k] === undefined) delete this._config[k];
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
      f.data = room;
      f.computeLabel = label;
      f.addEventListener("value-changed", (ev) => {
        const v = { ...ev.detail.value };
        Object.keys(v).forEach((k) => (v[k] === "" || v[k] === undefined || v[k] === null) && delete v[k]);
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
    (this._rForms || []).forEach((f, i) => (f.data = this._config.rooms[i]));
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
