// Datos de Spotify (GDPR). Fuente: StreamingHistory, artist_evolution, monthly_artists, monthly_tracks, hours_by_month y el archivo «Mis datos de Spotify».

const $ = (sel) => document.querySelector(sel);

// Horas y reproducciones por mes
const MESES = [
  { label: "octubre 2025", horas: 17.1, plays: 432,
    artistas: [["CA7RIEL & Paco Amoroso",148],["MARCOS YTZ",34],["YSY A",31],["HAVEN.",19],["Kidwild",13],["Easykid",11],["Hotel Ugly",10],["Chris Grey",8]],
    canciones: [["Dalí","MARCOS YTZ",34],["MI DIOSA","CA7RIEL & Paco Amoroso",31],["RE FORRO","CA7RIEL & Paco Amoroso",21],["DUMBAI","CA7RIEL & Paco Amoroso",20],["DUMBAI - Live at NPR MUSIC's Tiny Desk","CA7RIEL & Paco Amoroso",19]] },
  { label: "noviembre 2025", horas: 112.2, plays: 2977,
    artistas: [["Young Miko",745],["CA7RIEL & Paco Amoroso",407],["YSY A",380],["Dillom",109],["MARCOS YTZ",105],["MC Tairon",85],["Jezzy",67],["HAVEN.",51]],
    canciones: [["Superglue","Dillom",95],["Plug (Type Shit)","Young Miko",94],["YORK","YSY A",85],["Baile no Morro","MC Tairon",83],["Ojalá","Young Miko",80]] },
  { label: "diciembre 2025", horas: 85.2, plays: 2099,
    artistas: [["Young Miko",315],["CA7RIEL & Paco Amoroso",226],["YSY A",208],["Lucho RK",120],["MARCOS YTZ",104],["Eladio Carrion",88],["La Pantera",62],["Leon Thomas",61]],
    canciones: [["PINKY PROMISE 2","La Pantera",62],["BANE","Lucho RK",61],["MUTT","Leon Thomas",61],["No Me Sirve Más","CA7RIEL & Paco Amoroso",60],["INESTABLE","Lucho RK",54]] },
  { label: "enero 2026", horas: 71.3, plays: 1782,
    artistas: [["Young Miko",220],["CA7RIEL & Paco Amoroso",144],["YSY A",108],["Lucho RK",56],["Vidal",50],["Lil Uzi Vert",43],["MARCOS YTZ",39],["Eladio Carrion",32]],
    canciones: [["Ta Acontecendo","Vidal",50],["What You Saying","Lil Uzi Vert",43],["BANE","Lucho RK",37],["Plug (Type Shit)","Young Miko",32],["Careless Whisper","George Michael",30]] },
  { label: "febrero 2026", horas: 105.6, plays: 2438,
    artistas: [["Young Miko",149],["Alejo",143],["OMAY",141],["Munic HB",127],["Yung Beef",91],["Mac Miller",86],["Lucho RK",85],["Eladio Carrion",83]],
    canciones: [["Konbini Wars","Yung Beef",87],["Figa De Guiné","Mari Froes",78],["Ladders","Mac Miller",77],["25 To Life","H33RA",77],["DALE STOP","Munic HB",76]] },
  { label: "marzo 2026", horas: 125.6, plays: 3112,
    artistas: [["Munic HB",185],["OMAY",181],["Eladio Carrion",158],["BigXthaPlug",133],["Aissa",115],["Alejo",112],["Young Miko",111],["Mari Froes",97]],
    canciones: [["Frontera","Munic HB",76],["JOSE","Munic HB",59],["si muero a tu lado","9Collazo9",59],["SEXO FM","OMAY",56],["Te Capie","Dei V",56]] },
  { label: "abril 2026", horas: 105.0, plays: 2922,
    artistas: [["Trueno",272],["ELENA ROSE",266],["BigXthaPlug",226],["Gsus lz",192],["Yan Block",123],["Milo j",92],["Mariodmir",86],["Clarent",83]],
    canciones: [["Ma belle","Mariodmir",86],["Roulin","ELENA ROSE",61],["COLAPINTO","Gsus lz",60],["ANAERÓBICO","Gsus lz",60],["CUPIDOxX","Juseph",54]] },
  { label: "mayo 2026", horas: 137.5, plays: 3408,
    artistas: [["Eladio Carrion",739],["Trueno",348],["Musibu",209],["Yan Block",132],["Duki",126],["Munic HB",125],["BigXthaPlug",118],["Gsus lz",103]],
    canciones: [["Tóxico","Munic HB",98],["MEDUSA REMIX","Neo Pistea",94],["Ricky Bobby","Eladio Carrion",91],["2Tonos","Duki",81],["Jacarandá Gris","Musibu",79]] },
  { label: "junio 2026", horas: 52.9, plays: 1421,
    artistas: [["Young Miko",270],["Eladio Carrion",159],["Trueno",127],["Musibu",63],["Topboy TGR",61],["Yan Block",54],["BigXthaPlug",44],["ELENA ROSE",42]],
    canciones: [["Aquel diciembre","Young Miko",66],["MÁS DE AHÍ - Remix","Topboy TGR",61],["Sexo de moteles","Young Miko",50],["no es normal","D.Valentino",39],["Dream Team","Young Miko",36]] },
  { label: "julio 2026", horas: 46.7, plays: 1331,
    artistas: [["Young Miko",224],["Conep",139],["Beny Jr",105],["Eladio Carrion",104],["Yan Block",100],["Trueno",97],["Gonzy",78],["Rvfv",35]],
    canciones: [["After","Conep",89],["Sexo de moteles","Young Miko",50],["Cri-Card","Conep",50],["Aquel diciembre","Young Miko",49],["Ushubaby","Beny Jr",43]] },
  { label: "agosto 2026", horas: 20.4, plays: 563,
    artistas: [["Conep",81],["FANTA ROSARIO",34],["El Bellaco",32],["La Pantera",30],["Djavan",26],["Gonzy",26],["Vitor Kley",26],["Jorge Vercillo",24]],
    canciones: [["Billie Eilish","Conep",40],["SI ME HICIERA EL DE LA LENGUA (REMIX)","FANTA ROSARIO",34],["Lo Lente","El Bellaco",32],["Quiero más","La Pantera",28],["Foreplay","Conep",27]] },
  { label: "septiembre 2026", horas: 36.2, plays: 964,
    artistas: [["Conep",81],["Vitor Kley",64],["Natiruts",53],["Daniela Garsal",45],["Young Miko",39],["Musibu",38],["El Bellaco",33],["Eladio Carrion",29]],
    canciones: [["Sorri, Sou Rei (feat. Claudia Leitte)","Natiruts",53],["8 COSITAS","Daniela Garsal",39],["Ainda Bem Que Chegou - Ao Vivo","Vitor Kley",36],["Este Adiós","Musibu",34],["Lo Lente","El Bellaco",33]] },
  { label: "octubre 2026", horas: 89.0, plays: 2326,
    artistas: [["Lucho RK",286],["Chucky73",228],["Conep",141],["Gonzy",130],["Aissa",101],["La Pantera",84],["Beny Jr",78],["Eladio Carrion",60]],
    canciones: [["GONZY MONTANA","Gonzy",76],["LE METE","Aissa",70],["After (feat. Young Miko)","Conep",66],["Wigi","Chucky73",64],["BbY WOW","KAROL G",59]] }
];

// Top artistas (horas acumuladas) y canciones (reproducciones) del historial
const TOP_ARTISTAS = [["Young Miko",91.6],["Eladio Carrion",63],["YSY A",43.5],["CA7RIEL & Paco Amoroso",42.6],["Trueno",35.6],["Lucho RK",22.5],["Munic HB",21.3],["Gonzy",19.5],["BigXthaPlug",17],["Yan Block",16.9]];
const TOP_CANCIONES = [
  ["What's Ur Vibe?","Young Miko",211],["BANE","Lucho RK",201],["Plug (Type Shit)","Young Miko",197],
  ["Traviesa feat. Eladio Carrion","Young Miko",194],["Superglue","Dillom",167],["TANTAS FOTOS","YSY A",163],
  ["Baile no Morro","MC Tairon",161],["YORK","YSY A",161],["JOSE","Munic HB",161],["POR QUÉ SE ENAMORAN?","YSY A",160]
];

// Evolución mensual de los 6 artistas más escuchados (oct 2025 – oct 2026)
const MESES_CORTOS = ["oct 25","nov 25","dic 25","ene 26","feb 26","mar 26","abr 26","may 26","jun 26","jul 26","ago 26","sep 26","oct 26"];
const EVOLUCION = {
  "Young Miko":            [0,745,315,220,149,111,82,49,270,224,16,39,44],
  "Eladio Carrion":        [3,25,88,32,83,158,73,739,159,104,15,29,60],
  "CA7RIEL & Paco Amoroso":[148,407,226,144,67,15,22,39,15,7,3,9,0],
  "Trueno":                [3,27,17,16,10,20,272,348,127,97,13,25,59],
  "YSY A":                 [31,380,208,108,77,34,40,19,8,12,19,14,46],
  "Lucho RK":              [0,0,120,56,85,40,11,6,1,2,0,1,286]
};
const COLORES_EVOLUCION = ["#E43D12","#2a1206","#D6536D","#EFB11D","#8a8178","#FFA2B6"];

const PODCASTS = [["Billions Club: The Series",4],["Tengo un Plan",2],["Línea de Cal",2],["La Fórmula Del Éxito con Uri Sabat",2],["Poco se Habla! Briten y Xuso Jones",1],["Besties con MTV",1],["Chisme Mitológico",1],["La Chica Bona",1]];
const BIBLIOTECA = [["Canciones",1346],["Álbumes",22],["Artistas",54]];
const PLAYLISTS = [["Trap",721],["Argentinos",344],["Mj",128],["Top",108],["Kd",72],["Young",71],["L",70],["val",67],["Trap (2)",61],["bzrp i mas",59]];
const BUSQUEDAS = [["jul 26",1],["ago 26",41],["sep 26",29],["oct 26",56]];
const WRAPPED = [
  ["571","Horas escuchadas 2025"],["1264","Artistas únicos"],["1853","Canciones únicas"],["311","Artistas descubiertos"],
  ["294","Días escuchando"],["43","Racha máxima (días)"],["24","Edad de escucha"],["34","% escucha de noche"],
  ["55","% canciones de fiesta"],["268","Géneros escuchados"],["6","Álbumes completados"]
];
const INFERENCIAS = [["Afinidad con artistas",27],["Intereses",27],["Afinidad con eventos",11],["Campañas publicitarias",7],["Intención de compra",6],["Dispositivo / idioma",6],["Ofertas contextuales",4],["Otros",3],["Wrapped",2]];
const MARQUEE = [["Previously Active Listeners",711],["Light listeners",69],["Super Listeners",65],["Moderate listeners",33]];
const CAPSULE_SEMANAS = [["28 sep",23.4],["5 oct",17.1],["12 oct",29.7],["19 oct",21.8],["26 oct",10.9]];
const CAPSULE_ARTISTAS = [["Lucho RK",9.9],["Chucky73",9],["Young Miko",7.3],["Conep",6.5],["Gonzy",4.4],["Eladio Carrion",4.2],["Aissa",3.6],["Fetti031",3.2],["KAROL G",3.2],["Beny Jr",2.5]];

// ---------- Utilidades ----------
function formatea(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1).replace(".", ",");
}

// Dibuja una lista de barras dentro de un contenedor
function pintaBarras(contenedor, filas, unidad = "") {
  const max = Math.max(...filas.map(f => f[1]));
  contenedor.innerHTML = "";
  for (const [etiqueta, valor] of filas) {
    const fila = document.createElement("div");
    fila.className = "barra";
    fila.innerHTML =
      `<span class="etiqueta"></span>` +
      `<span class="pista"><span class="relleno" style="width:${(valor / max) * 100}%"></span></span>` +
      `<span class="valor">${formatea(valor)}${unidad}</span>`;
    fila.querySelector(".etiqueta").textContent = etiqueta;
    contenedor.appendChild(fila);
  }
}

// ---------- Historial ----------
function pintaHistorial() {
  pintaBarras($("#horas-mes"), MESES.map(m => [m.label, m.horas]), " h");
  pintaBarras($("#top-artistas"), TOP_ARTISTAS, " h");
  const lista = $("#top-canciones");
  lista.innerHTML = "";
  for (const [cancion, artista, reproducciones] of TOP_CANCIONES) {
    const li = document.createElement("li");
    li.textContent = `${cancion} · ${artista} (${reproducciones})`;
    lista.appendChild(li);
  }
}

// ---------- Detalle por mes ----------
function pintaMes(i) {
  const m = MESES[i];
  $("#mes-horas").textContent = formatea(m.horas);
  $("#mes-plays").textContent = m.plays;
  pintaBarras($("#mes-artistas"), m.artistas);
  const tbody = $("#mes-canciones");
  tbody.innerHTML = "";
  for (const [cancion, artista, reproducciones] of m.canciones) {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td></td><td></td><td></td>";
    tr.children[0].textContent = cancion;
    tr.children[1].textContent = artista;
    tr.children[2].textContent = reproducciones;
    tbody.appendChild(tr);
  }
}

function pintaSelectorMes() {
  const select = $("#mes");
  MESES.forEach((m, i) => {
    const op = document.createElement("option");
    op.value = i;
    op.textContent = m.label;
    select.appendChild(op);
  });
  select.value = MESES.length - 1;
  select.addEventListener("change", () => pintaMes(Number(select.value)));
  pintaMes(MESES.length - 1);
}

// ---------- Evolución (SVG) ----------
function pintaEvolucion() {
  const svg = $("#grafica-evolucion");
  const W = 800, H = 340, L = 50, R = 780, T = 20, B = 290;
  const max = 750;
  const x = j => L + j * ((R - L) / (MESES_CORTOS.length - 1));
  const y = v => B - (v / max) * (B - T);
  const ns = "http://www.w3.org/2000/svg";
  const el = (tag, attrs) => {
    const node = document.createElementNS(ns, tag);
    for (const k in attrs) node.setAttribute(k, attrs[k]);
    return node;
  };
  svg.innerHTML = "";
  svg.appendChild(el("line", { x1: L, x2: R, y1: B, y2: B, stroke: "#8a8178" }));
  MESES_CORTOS.forEach((mes, j) => {
    const t = el("text", { x: x(j), y: B + 18, "text-anchor": "middle", "font-size": 11, fill: "#2a1206" });
    t.textContent = mes;
    svg.appendChild(t);
  });
  const leyenda = $("#leyenda-evolucion");
  leyenda.innerHTML = "";
  Object.entries(EVOLUCION).forEach(([nombre, valores], i) => {
    const d = valores.map((v, j) => `${j === 0 ? "M" : "L"} ${x(j).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
    svg.appendChild(el("path", { d, fill: "none", stroke: COLORES_EVOLUCION[i], "stroke-width": 3, "stroke-linejoin": "round" }));
    const li = document.createElement("li");
    li.style.setProperty("--color", COLORES_EVOLUCION[i]);
    li.textContent = nombre;
    leyenda.appendChild(li);
  });
}

// ---------- Resto de apartados ----------
function pintaResto() {
  pintaBarras($("#podcasts-barras"), PODCASTS);
  pintaBarras($("#biblioteca-barras"), BIBLIOTECA);
  pintaBarras($("#playlists-barras"), PLAYLISTS);
  pintaBarras($("#busquedas-barras"), BUSQUEDAS);
  const w = $("#wrapped");
  w.innerHTML = "";
  for (const [cifra, etiqueta] of WRAPPED) {
    const div = document.createElement("div");
    div.className = "tarjeta";
    div.innerHTML = `<span class="cifra"></span><span></span>`;
    div.children[0].textContent = cifra;
    div.children[1].textContent = etiqueta;
    w.appendChild(div);
  }
  pintaBarras($("#inferencias-barras"), INFERENCIAS);
  pintaBarras($("#marquee-barras"), MARQUEE);
  pintaBarras($("#capsule-semanas"), CAPSULE_SEMANAS, " h");
  pintaBarras($("#capsule-artistas"), CAPSULE_ARTISTAS, " h");
}

// ---------- Navegación entre secciones ----------
function muestraSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  let encontrada = false;
  secciones.forEach(s => {
    const activa = s.id === id;
    s.hidden = !activa;
    if (activa) encontrada = true;
  });
  if (!encontrada) muestraSeccion("intro");
  document.querySelectorAll(".menu a").forEach(a => {
    a.setAttribute("aria-current", a.dataset.sec === (encontrada ? id : "intro") ? "true" : "false");
  });
  window.scrollTo({ top: 0 });
}

function inicioNavegacion() {
  document.querySelectorAll(".menu a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      history.replaceState(null, "", `#${a.dataset.sec}`);
      muestraSeccion(a.dataset.sec);
    });
  });
  window.addEventListener("hashchange", () => muestraSeccion(location.hash.slice(1) || "intro"));
  muestraSeccion(location.hash.slice(1) || "intro");
}

// ---------- Loops de scroll ----------
function iniciaLoops() {
  // Con movimiento reducido no se animan las barras ni la gráfica
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Loop 1: las barras de Historial crecen al entrar en pantalla y vuelven a 0 al salir
  const historial = $("#historial");
  historial.classList.add("anima");
  const observador = new IntersectionObserver(
    ([entrada]) => historial.classList.toggle("en-vista", entrada.isIntersecting),
    { threshold: 0.25 }
  );
  observador.observe(historial);

  // Loop 2: la gráfica de evolución se dibuja según el scroll y se borra al subir
  const seccion = $("#evolucion");
  const trazos = $("#grafica-evolucion").querySelectorAll("path");
  trazos.forEach(p => {
    p.setAttribute("pathLength", "1");
    p.style.strokeDasharray = "1";
    p.style.strokeDashoffset = "1";
  });
  let pendiente = false;
  const dibuja = () => {
    pendiente = false;
    const r = seccion.getBoundingClientRect();
    const avance = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (r.height + window.innerHeight)));
    trazos.forEach(p => { p.style.strokeDashoffset = (1 - avance).toFixed(3); });
  };
  window.addEventListener("scroll", () => {
    if (!pendiente) { pendiente = true; requestAnimationFrame(dibuja); }
  }, { passive: true });
  dibuja();
}

// ---------- Arranque ----------
pintaHistorial();
pintaSelectorMes();
pintaEvolucion();
pintaResto();
inicioNavegacion();
iniciaLoops();
