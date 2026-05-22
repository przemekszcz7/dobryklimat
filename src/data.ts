/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuCategory, ReviewItem, DailySpecial, PillarItem } from "./types";

export const BAR_INFO = {
  name: "Dobry Klimat",
  tagline: "Domowe Obiady · Swojski Bar Obiadowy",
  description: "Swojski bar obiadowy, serwujący dania będące częścią tradycji kulinarnej kraju. Zapraszamy do miejsca, gdzie smak dzieciństwa spotyka się z autentyczną, polską gościnnością i uśmiechem.",
  address: "Topolowa 46A, Lubin 59-300",
  phone: "797 796 399",
  email: "barmlecznydobryklimat@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61586127606213",
  facebookReviewsUrl: "https://www.facebook.com/profile.php?id=61586127606213&sk=reviews",
  mapsIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39827.046322191054!2d16.152742364629262!3d51.399556231391145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f6f45a70cac23%3A0x9c193949b33c2682!2sDobry%20Klimat%20Domowe%20Obiady!5e0!3m2!1spl!2spl!4v1779431383454!5m2!1spl!2spl",
  logoUrl: "https://i.ibb.co/CpdYHjK3/704167237-122121932109204253-7299035729522455851-n.jpg",
  photoInterior: "https://i.ibb.co/dx6B9Xk/706003227-122121932715204253-3518737662744761602-n.jpg",
  photoFood: "https://i.ibb.co/gFhRFMLj/677975505-122118894471204253-7334378579529410411-n.jpg",
};

export const PILLARS: PillarItem[] = [
  {
    title: "Świeżość każdego dnia",
    text: "Zasada jest u nas prosta – nie uznajemy drogi na skróty. Codziennie o świcie zaczynamy krojenie, obieranie i gotowanie od nowa. Rosół pyrczy powoli, a dymiące pyzy pachną majerankiem.",
    badge: "Swojskość"
  },
  {
    title: "Smak tradycyjnej receptury",
    text: "Nasze przepisy przeszły długą drogę, zanim trafiły na talerze w Lubinie. To receptury naszych babć i mam. Pierogi lepimy własnoręcznie, a kotlety rozbijamy dopiero tuż przed wrzuceniem na patelnię.",
    badge: "Od Serca"
  },
  {
    title: "Obfite porcje i uczciwe ceny",
    text: "W Dobrym Klimacie nikt nie wyjdzie głodny. Wierzymy, że pyszny, pożywny polski obiad powinien być dostępny dla każdego. Serwujemy solidne, uczciwe porcje bez ukrytych kosztów.",
    badge: "Na Talerzu"
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "zupy",
    name: "Rozgrzewające Zupy",
    iconName: "Soup",
    items: [
      {
        id: "z1",
        name: "Rosół domowy z makaronem",
        description: "Tradycyjny, klarowny wywar drobiowo-wołowy, gotowany z pasją, z mnóstwem włoszczyzny i domowym makaronem.",
        price: "11.00 zł",
        isPopular: true
      },
      {
        id: "z2",
        name: "Żurek staropolski",
        description: "Na naturalnym zakwasie żytnim, podawany ze swojską kiełbasą, jajkiem od kury z wolnego wybiegu i majerankiem.",
        price: "14.50 zł",
        isPopular: true
      },
      {
        id: "z3",
        name: "Zupa pomidorowa z kluseczkami",
        description: "Słodko-kwaśna zupa ze świeżych pomidorów, zabielana śmietaną, podawana z lanym ciastem lub makaronem.",
        price: "12.00 zł"
      },
      {
        id: "z4",
        name: "Barszcz czerwony z uszkami",
        description: "Czysty, aromatyczny wywar z pieczonych buraków, doprawiony czosnkiem i majerankiem z ręcznie lepionymi uszkami.",
        price: "13.00 zł",
        isVegetarian: true
      }
    ]
  },
  {
    id: "główne",
    name: "Pożywne Dania Główne",
    iconName: "Utensils",
    items: [
      {
        id: "d1",
        name: "Swojski Kotlet Schabowy",
        description: "Chrupiący schab panierowany w tartej bułce, smażony na złoty kolor według tradycyjnej metody, ziemniaki z koperkiem i kapusta zasmażana.",
        price: "24.50 zł",
        isPopular: true
      },
      {
        id: "d2",
        name: "Puszyste Gołąbki w sosie pomidorowym",
        description: "Tradycyjna mieszanka mięsa mielonego i ryżu zawinięta w liście kapusty, duszona do miękkości, polana sosem pomidorowym.",
        price: "19.00 zł"
      },
      {
        id: "d3",
        name: "Kotlet Mielony jak u Mamy",
        description: "Soczysty kotlet z mięsa wieprzowo-wołowego ze smażoną cebulką, ugniecione ziemniaki z masłem i glazurowane buraczki.",
        price: "22.50 zł"
      },
      {
        id: "d4",
        name: "Placek po Węgiersku",
        description: "Duży, chrupiący placki ziemniaczany, z sytym, lekko pikantnym gulaszem wieprzowym z papryką, zwieńczony kleksem gęstej śmietany.",
        price: "26.00 zł",
        isPopular: true
      }
    ]
  },
  {
    id: "maczne",
    name: "Ręcznie Lepione i Słodkie",
    iconName: "ChefHat",
    items: [
      {
        id: "m1",
        name: "Pierogi Ruskie z okrasą",
        description: "Farsz z aksamitnego twarogu, ugniecionych ziemniaków i rumianej cebulki, polane skwarkami lub złocistą cebulą.",
        price: "16.00 / 10 szt.",
        isVegetarian: true,
        isPopular: true
      },
      {
        id: "m2",
        name: "Kluski Leniwe z masełkiem",
        description: "Delikatne kluseczki twarogowe podawane z roztopionym masłem, cukrem i chrupiącą bułką tartą. Smak beztroskich lat dzieciństwa.",
        price: "15.00 zł",
        isVegetarian: true
      },
      {
        id: "m3",
        name: "Pierogi z mięsem drobiowo-wieprzowym",
        description: "Z cienkiego, elastycznego ciasta, pełne soczystego, gotowanego nadzienia mięsnego z lubczykiem i podsmażanym boczkiem.",
        price: "18.00 / 10 szt."
      },
      {
        id: "m4",
        name: "Naleśniki ze słodkim serem i śmietaną",
        description: "Dwa cienkie naleśniki nadziewane delikatną masą twarogową z nutą wanilii, ozdobione cukrem pudrem i owocowym sosem.",
        price: "15.50 zł",
        isVegetarian: true
      }
    ]
  },
  {
    id: "dodatki",
    name: "Swojskie Dodatki i Napoje",
    iconName: "CupSoda",
    items: [
      {
        id: "s1",
        name: "Domowy Kompot wieloowocowy",
        description: "Gotowany na miejscu z sezonowych i suszonych owoców – orzeźwiający, niezbyt słodki, podawany schłodzony.",
        price: "4.00 zł",
        isPopular: true,
        isVegetarian: true
      },
      {
        id: "s2",
        name: "Zasmażana kapusta buraczkami",
        description: "Kwaśna kapusta przygotowana na ciepło z odrobiną kminku i podsmażaną cebulą.",
        price: "6.00 zł",
        isVegetarian: true
      },
      {
        id: "s3",
        name: "Chrupiąca Mizeria ze śmietaną",
        description: "Świeże ogórki w plasterkach, delikatny koperek, odrobina cytryny oraz nasza swojska gęsta śmietana.",
        price: "6.00 zł",
        isVegetarian: true
      }
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev1",
    author: "Karolina K.",
    text: "Polecam z całego serca ! ☺️ Smaczne i domowe jedzenie. Obsługa fenomenalna , ceny bardzo fajne. Każdemu kto chce zjeść smacznie , świeżo i domowo to tylko w Dobry Klimat ☺️",
    rating: 5,
    date: "Facebook Review",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    isVerifiedFacebook: true
  },
  {
    id: "rev2",
    author: "Dariusz M.",
    text: "Bardzo Fajne Miejsce Dobre jedzenie tanie Duże porcje miła obsługa wszystko na 5 gwiazdek",
    rating: 5,
    date: "Facebook Review",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    isVerifiedFacebook: true
  },
  {
    id: "rev3",
    author: "Maciej S.",
    text: "Bardzo miłe zaskoczenie! Nowo otwarty bar mleczny oferuje smaczne, domowe jedzenie w naprawdę niskich cenach. Porcje są solidne, a atmosfera przyjemna i swojska. Idealne miejsce na szybki i niedrogi obiad — na pewno będę tu wracać!",
    rating: 5,
    date: "Facebook Review",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    isVerifiedFacebook: true
  }
];

export const DAILY_SPECIALS: DailySpecial[] = [
  {
    dayName: "Danie Dnia: Poniedziałek - Sobota",
    soup: { name: "Zupa Pomidorowa lub Rosół Domowy", price: "9.50 zł" },
    mainCourse: { name: "Pieczeń rzymska w sosie cebulowym + kasza jęczmienna + kapusta zasmażana", price: "18.50 zł" },
    comboPrice: "24.00 zł",
  }
];

export const OPENING_HOURS = [
  { day: "Poniedziałek - Piątek", hours: "11:00 - 18:00" },
  { day: "Sobota", hours: "11:00 - 16:00" },
  { day: "Niedziela", hours: "Zamknięte (Odpoczywamy)" }
];
