
"use strict";

/* ========================================
   THE ODYSSEY (2026) — WEBSITE JAVASCRIPT
   English / Dutch
======================================== */

/* ---------- 1. TRANSLATIONS ---------- */

const translations = {
  en: {
    navHome: "Home",
    navDetails: "Film details",
    navStory: "The story",
    navGallery: "Gallery",
    navWatch: "Watch / Buy",
    navSupport: "Support",

    heroEyebrow: "A FILM BY CHRISTOPHER NOLAN",
    heroSub: "Every journey has a price. Every homecoming, a story.",
    genre: "MYTHIC ACTION EPIC",
    explore: "Explore the film",
    trailer: "Official trailer",
    heroFoot: "HOMER'S LEGENDARY SAGA · REIMAGINED FOR THE BIG SCREEN",

    detailsKicker: "THE FILM",
    detailsTitle: "A myth that<br><em>travels through time.</em>",
    detailsLead:
      "A sweeping cinematic adventure inspired by one of humanity's oldest and most enduring stories.",

    labelDirector: "Director",
    labelWriter: "Written by",
    labelYear: "Release year",
    labelRuntime: "Runtime",
    labelGenre: "Genre",
    labelProduction: "Production",
    genreFull: "Mythic action epic, adventure",
    castLabel: "PRINCIPAL CAST",

    storyKicker: "THE STORY",
    storyTitle: "The long way<br><em>back home.</em>",

    synopsis1:
      "After the Trojan War, Odysseus, the king of Ithaca, begins a perilous journey home to reunite with his wife, Penelope, and his son, Telemachus.",

    synopsis2:
      "What should have been a return voyage becomes an extraordinary struggle for survival. Odysseus and his companions encounter dangerous seas, mysterious beings and challenges that test their courage, loyalty and judgment.",

    synopsis3:
      "Meanwhile, in Ithaca, Penelope and Telemachus face their own trials as they wait for the missing king and fight to protect their home and future.",

    editorial:
      "This is an editorial synopsis, not an official script or transcript.",

    officialSynopsis: "Read official film information",

    galleryKicker: "VISUAL JOURNAL",
    galleryTitle: "Sea, myth <em>&amp; destiny.</em>",
    galleryIntro:
      "Explore six visual perspectives inspired by the scale and mystery of the voyage.",

    galleryCaption1: "Into the unknown",
    galleryCaption2: "Beyond the horizon",
    galleryCaption3: "A light to follow",
    galleryCaption4: "Across the unknown",
    galleryCaption5: "A timeless legend",
    galleryCaption6: "Destiny awaits",

    watchKicker: "EXPERIENCE THE FILM",
    watchTitle: "The journey<br><em>continues.</em>",
    watchCopy:
      "Watch the authorized trailer or visit official sources for current digital and physical editions. Availability varies by region.",
    watchTrailer: "Watch official trailer",
    findEditions: "Find official editions",
    noDownloads:
      "This independent guide does not host or distribute the copyrighted film.",

    quote:
      "The hardest distance is the one between who you were and who you become.",
    quoteCredit: "A STORY INSPIRED BY HOMER'S EPIC",

    supportKicker: "KEEP THE CULTURE ALIVE",
    supportTitle: "Support independent<br><em>film culture.</em>",
    supportCopy:
      "If you enjoy this independent film guide, you can support future editorial work and site maintenance. Donations are entirely voluntary.",

    donationTitle: "Crypto donations",
    donationSubtitle: "Wallet details will be added by the site owner.",
    chooseCoin: "Choose cryptocurrency",
    walletMissing: "Wallet address not configured",
    copy: "Copy",
    copied: "Wallet address copied.",
    copyFailed: "Unable to copy. Please copy the address manually.",
    walletWarning:
      "Do not send funds until the owner has added and verified the correct wallet address and network.",

    disclaimer:
      "Independent film information website. Not affiliated with or endorsed by Universal Pictures, Christopher Nolan, or the cast.",

    officialSite: "Official film site ↗",
    privacy: "Privacy notice",
    footerLine: "An independent editorial project",

    privacyMessage:
      "The privacy notice page has not been configured yet.",

    walletUnavailable:
      "No verified wallet address is available for this cryptocurrency.",

    menuOpen: "Open navigation",
    menuClose: "Close navigation"
  },

  nl: {
    navHome: "Home",
    navDetails: "Filmdetails",
    navStory: "Het verhaal",
    navGallery: "Galerij",
    navWatch: "Kijken / Kopen",
    navSupport: "Steunen",

    heroEyebrow: "EEN FILM VAN CHRISTOPHER NOLAN",
    heroSub: "Elke reis heeft een prijs. Elke thuiskomst een verhaal.",
    genre: "MYTHOLOGISCH ACTIE-EPOS",
    explore: "Ontdek de film",
    trailer: "Officiële trailer",
    heroFoot: "HOMERUS' LEGENDARISCHE VERHAAL · OPNIEUW VERTELD VOOR HET WITTE DOEK",

    detailsKicker: "DE FILM",
    detailsTitle: "Een mythe die<br><em>door de tijd reist.</em>",
    detailsLead:
      "Een groots filmavontuur geïnspireerd door een van de oudste en meest blijvende verhalen van de mensheid.",

    labelDirector: "Regisseur",
    labelWriter: "Scenario",
    labelYear: "Jaar van uitgave",
    labelRuntime: "Speelduur",
    labelGenre: "Genre",
    labelProduction: "Productie",
    genreFull: "Mythologisch actie-epos, avontuur",
    castLabel: "BELANGRIJKSTE CAST",

    storyKicker: "HET VERHAAL",
    storyTitle: "De lange weg<br><em>naar huis.</em>",

    synopsis1:
      "Na de Trojaanse Oorlog begint Odysseus, koning van Ithaka, aan een gevaarlijke reis naar huis om zich te herenigen met zijn vrouw Penelope en zijn zoon Telemachos.",

    synopsis2:
      "Wat een terugreis had moeten zijn, verandert in een buitengewone strijd om te overleven. Odysseus en zijn metgezellen trotseren gevaarlijke zeeën, mysterieuze wezens en uitdagingen die hun moed, trouw en oordeel op de proef stellen.",

    synopsis3:
      "Ondertussen worden Penelope en Telemachos op Ithaka met hun eigen beproevingen geconfronteerd. Ze wachten op de vermiste koning en proberen hun thuis en toekomst te beschermen.",

    editorial:
      "Dit is een redactionele samenvatting, geen officieel script of transcript.",

    officialSynopsis: "Bekijk de officiële filminformatie",

    galleryKicker: "VISUEEL DAGBOEK",
    galleryTitle: "Zee, mythe <em>&amp; lotsbestemming.</em>",
    galleryIntro:
      "Ontdek zes visuele perspectieven, geïnspireerd door de omvang en het mysterie van de reis.",

    galleryCaption1: "Het onbekende tegemoet",
    galleryCaption2: "Voorbij de horizon",
    galleryCaption3: "Een licht om te volgen",
    galleryCaption4: "Door het onbekende",
    galleryCaption5: "Een tijdloze legende",
    galleryCaption6: "Het lot wacht",

    watchKicker: "BELEEF DE FILM",
    watchTitle: "De reis<br><em>gaat verder.</em>",
    watchCopy:
      "Bekijk de geautoriseerde trailer of bezoek officiële bronnen voor actuele digitale en fysieke edities. De beschikbaarheid verschilt per regio.",
    watchTrailer: "Bekijk de officiële trailer",
    findEditions: "Bekijk officiële edities",
    noDownloads:
      "Deze onafhankelijke gids host of verspreidt de auteursrechtelijk beschermde film niet.",

    quote:
      "De moeilijkste afstand is die tussen wie je was en wie je wordt.",
    quoteCredit: "EEN VERHAAL GEÏNSPIREERD DOOR HOMERUS' EPOS",

    supportKicker: "HOUD DE FILMCULTUUR LEVEND",
    supportTitle: "Steun onafhankelijke<br><em>filmcultuur.</em>",
    supportCopy:
      "Geniet je van deze onafhankelijke filmgids? Dan kun je toekomstig redactiewerk en het onderhoud van de website steunen. Donaties zijn volledig vrijwillig.",

    donationTitle: "Crypto-donaties",
    donationSubtitle: "De eigenaar voegt de walletgegevens later toe.",
    chooseCoin: "Kies een cryptovaluta",
    walletMissing: "Walletadres niet ingesteld",
    copy: "Kopiëren",
    copied: "Walletadres gekopieerd.",
    copyFailed: "Kopiëren is niet gelukt. Kopieer het adres handmatig.",
    walletWarning:
      "Verstuur geen geld voordat de eigenaar het juiste walletadres en netwerk heeft toegevoegd en gecontroleerd.",

    disclaimer:
      "Onafhankelijke website met filminformatie. Niet verbonden aan en niet goedgekeurd door Universal Pictures, Christopher Nolan of de cast.",

    officialSite: "Officiële filmwebsite ↗",
    privacy: "Privacyverklaring",
    footerLine: "Een onafhankelijk redactioneel project",

    privacyMessage:
      "De privacyverklaring is nog niet ingesteld.",

    walletUnavailable:
      "Er is geen geverifieerd walletadres beschikbaar voor deze cryptovaluta.",

    menuOpen: "Navigatie openen",
    menuClose: "Navigatie sluiten"
  }
};


/* ---------- 2. LANGUAGE SWITCHER ---------- */

let currentLanguage = "en";

function setLanguage(language) {
  if (!translations[language]) {
    return;
  }

  currentLanguage = language;

  const dictionary = translations[language];

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll(".lang").forEach((button) => {
    const isActive = button.dataset.lang === language;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateWallet();

  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle) {
    menuToggle.setAttribute(
      "aria-label",
      document.querySelector(".nav")?.classList.contains("open")
        ? dictionary.menuClose
        : dictionary.menuOpen
    );
  }
}

document.querySelectorAll(".lang").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});


/* ---------- 3. MOBILE NAVIGATION ---------- */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

function closeMenu() {
  if (!menuToggle || !navigation) {
    return;
  }

  navigation.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute(
    "aria-label",
    translations[currentLanguage].menuOpen
  );
}

function openMenu() {
  if (!menuToggle || !navigation) {
    return;
  }

  navigation.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute(
    "aria-label",
    translations[currentLanguage].menuClose
  );
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.contains("open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      navigation.classList.contains("open") &&
      !navigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });
}


/* ---------- 4. FOOTER YEAR ---------- */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* ---------- 5. TOAST MESSAGE ---------- */

let toastTimeout;

function showToast(message) {
  const toast = document.querySelector(".toast");

  if (!toast) {
    window.alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(toastTimeout);

  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}


/* ---------- 6. PRIVACY NOTICE LINK ---------- */

const privacyLink = document.getElementById("privacyLink");

if (privacyLink) {
  privacyLink.addEventListener("click", (event) => {
    const href = privacyLink.getAttribute("href");

    // Keep this message until a real privacy page is connected.
    if (href === "#privacy") {
      event.preventDefault();

      showToast(
        translations[currentLanguage].privacyMessage
      );
    }
  });
}


/* ---------- 7. CRYPTO WALLET SETTINGS ---------- */

/*
  IMPORTANT:
  Wallet addresses are intentionally empty.
  The site owner must add and verify the correct
  addresses and networks before accepting donations.
*/

const walletAddresses = {
  btc: "",
  eth: "",
  usdc: ""
};

const coinSelect = document.getElementById("coin");
const walletText = document.getElementById("walletText");
const copyWalletButton = document.getElementById("copyWallet");

function updateWallet() {
  if (!coinSelect || !walletText || !copyWalletButton) {
    return;
  }

  const selectedCoin = coinSelect.value;
  const walletAddress = walletAddresses[selectedCoin] || "";

  if (walletAddress.trim() !== "") {
    walletText.textContent = walletAddress;
    copyWalletButton.disabled = false;
  } else {
    walletText.textContent =
      translations[currentLanguage].walletMissing;

    copyWalletButton.disabled = true;
  }
}

if (coinSelect) {
  coinSelect.addEventListener("change", updateWallet);
}

if (copyWalletButton) {
  copyWalletButton.addEventListener("click", async () => {
    if (!coinSelect) {
      return;
    }

    const selectedCoin = coinSelect.value;
    const walletAddress = walletAddresses[selectedCoin] || "";

    if (!walletAddress.trim()) {
      showToast(
        translations[currentLanguage].walletUnavailable
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(walletAddress);

      showToast(translations[currentLanguage].copied);
    } catch (error) {
      // Fallback for browsers where Clipboard API is unavailable.
      try {
        const temporaryInput = document.createElement("textarea");

        temporaryInput.value = walletAddress;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);
        temporaryInput.select();

        const copied = document.execCommand("copy");

        temporaryInput.remove();

        if (copied) {
          showToast(translations[currentLanguage].copied);
        } else {
          showToast(translations[currentLanguage].copyFailed);
        }
      } catch (fallbackError) {
        showToast(translations[currentLanguage].copyFailed);
      }
    }
  });
}


/* ---------- 8. INITIALIZE WEBSITE ---------- */

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
  updateWallet();
});
