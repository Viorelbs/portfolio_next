// Tech import
import reactIcon from "../public/assets/svg_icons/react-logo-programming-svgrepo-com.svg";
import cssIcon from "../public/assets/svg_icons/css-file-format-document-extension-file-format-svgrepo-com.svg";
import htmlIcon from "../public/assets/svg_icons/html5-svgrepo-com.svg";
import figmaIcon from "../public/assets/svg_icons/figma-svgrepo-com.svg";
import phpIcon from "../public/assets/svg_icons/php-svgrepo-com.svg";
import javaScriptIcon from "../public/assets/svg_icons/JavaScript-fill-svgrepo-com.svg";
import reduxIcon from "../public/assets/svg_icons/redux.svg";
import tailwind from "../public/assets/svg_icons/tailwind.svg";
import mui from "../public/assets/svg_icons/mui.svg";
import tsIcon from "../public/assets/svg_icons/ts.svg";
import bootstrap from "../public/assets/svg_icons/bootstrap.svg";
import nextIcon from "../public/assets/svg_icons/next.svg";
import firebaseIcon from "../public/assets/svg_icons/firebase.svg";
import stripeIcon from "../public/assets/svg_icons/stripe.svg";
import git from "../public/assets/svg_icons/git.svg";
import recoil from "../public/assets/svg_icons/recoil.svg";

// Pages import
import castingMac from "../public/assets/images/casting/CastingMac.webp";
import castingPhone from "../public/assets/images/casting/CastingPhone.webp";

import recoMac from "../public/assets/images/reco/recoMac.webp";
import recoPhone from "../public/assets/images/reco/recoPhone.webp";

import noteMac from "../public/assets/images/note/noteMac.webp";
import notePhone from "../public/assets/images/note/notePhone.webp";

import lantaniaMac from "../public/assets/images/2lafel/2lafelMac.webp";
import lantaniaPhone from "../public/assets/images/2lafel/2lafelPhone.webp";

import portfolioMac from "../public/assets/images/portfolio/portfolioMac.webp";
import portfolioPhone from "../public/assets/images/portfolio/portfolioPhone.webp";

import cabanaMac from "../public/assets/images/cabana/cabanaMac.webp";
import cabanaPhone from "../public/assets/images/cabana/cabanaPhone.webp";

import mmcMac from "../public/assets/images/Mmc/mmcMac.webp";
import mmcPhone from "../public/assets/images/Mmc/mmcPhone.webp";

import constructionMac from "../public/assets/images/v3Construction/constructionMac.webp";
import constructionPhone from "../public/assets/images/v3Construction/constructionPhone.webp";

import netflixMac from "../public/assets/images/netflix/netflixDesktop.webp";
import netflixMobile from "../public/assets/images/netflix/NetflixMobile.webp";

import instaMac from "../public/assets/images/insta/instaDesktop.webp";
import instaMobile from "../public/assets/images/insta/instaMobile.webp";

export const ProjectsImages = [
  {
    macFrame: netflixMac,
    phoneFrame: netflixMobile,
    personalProject: true,
    title: "Netflix Clone",
    link: "https://netflix-tau-seven.vercel.app/",
    roles: ["Front-end development"],
    contribution: 100,
    gitLink: "https://github.com/ViorelMG5/netflix",
    description:
      "When you create an account it's gonna ask you for card details, just use a test card (ex:  4242 4242 4242 4242). Stripe is on test mode",
    technologies: [
      { Git: git },
      { Firebase: firebaseIcon },
      { stripe: stripeIcon },
      { TypeScript: tsIcon },
      { React: reactIcon },
      { NextJS: nextIcon },
      { JavaScript: javaScriptIcon },
      { Recoil: recoil },
      { TailwindCSS: tailwind },
      { MUI: mui },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
  {
    macFrame: instaMac,
    phoneFrame: instaMobile,
    personalProject: true,

    title: "Instagram Clone",
    link: "https://instagram-clone-beta-red.vercel.app/",
    roles: ["Front-end development"],
    contribution: 100,
    gitLink: "https://github.com/ViorelMG5/instagram_clone",
    description:
      "IN PROGRESS || Functionalities: Dark/light mode, Create user using email/password or facebook login, Custom username and profile picture,  Add posts, Add comments to posts,Like comments,  Like the posts,Getting recomandation to follow,  See own profile (See followers and following nr). Working on other features, will update it soon! ",
    technologies: [
      { Git: git },
      { Firebase: firebaseIcon },
      { TypeScript: tsIcon },
      { React: reactIcon },
      { NextJS: nextIcon },
      { JavaScript: javaScriptIcon },
      { Recoil: recoil },
      { TailwindCSS: tailwind },
      { MUI: mui },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
  {
    macFrame: castingMac,
    phoneFrame: castingPhone,
    title: "Agentia de Casting",
    link: "https://agentiadecasting.ro/",
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 41,
    technologies: [
      { Figma: figmaIcon },
      { JavaScript: javaScriptIcon },
      { PHP: phpIcon },
      { Boostrap: bootstrap },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
  {
    macFrame: recoMac,
    phoneFrame: recoPhone,
    title: "Tv recommendation",
    personalProject: true,
    gitLink: "https://github.com/ViorelMG5/recommended_tv_shows",

    link: "https://recommended-tv-shows.vercel.app/",
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 100,
    technologies: [
      { Git: git },

      { React: reactIcon },
      { JavaScript: javaScriptIcon },
      { MUI: mui },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },

  {
    title: "2LaFel",
    macFrame: lantaniaMac,
    link: "https://2lafel.ro/",
    phoneFrame: lantaniaPhone,
    roles: ["Front-end development"],
    contribution: 43,
    technologies: [
      { JavaScript: javaScriptIcon },
      { PHP: phpIcon },
      { Boostrap: bootstrap },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
  {
    macFrame: noteMac,
    phoneFrame: notePhone,
    personalProject: true,
    title: "Note Manager",
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 100,
    gitLink: "https://github.com/ViorelMG5/react-notes-manager",
    technologies: [
      // { Figma: figmaIcon },
      { Git: git },

      { React: reactIcon },
      { redux: reduxIcon },
      { JavaScript: javaScriptIcon },
      { MUI: mui },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
  {
    title: "Portfolio Website",
    macFrame: portfolioMac,
    phoneFrame: portfolioPhone,
    personalProject: true,
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 100,
    technologies: [
      { Git: git },

      { Figma: figmaIcon },
      { React: reactIcon },
      { JavaScript: javaScriptIcon },
      { MUI: mui },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
  {
    title: "Millionaire Cats Club",
    macFrame: mmcMac,
    phoneFrame: mmcPhone,
    link: "https://millionairecatsclub.io/",
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 100,
    technologies: [
      { Figma: figmaIcon },
      { JavaScript: javaScriptIcon },
      { PHP: phpIcon },
      { Boostrap: bootstrap },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
  {
    title: "Cabana Supporter",
    link: "https://cabanasupporter.ro/",
    macFrame: cabanaMac,
    phoneFrame: cabanaPhone,
    contribution: 67,
    roles: ["Front-end development"],
    technologies: [
      { JavaScript: javaScriptIcon },
      { PHP: phpIcon },
      { Boostrap: bootstrap },

      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
  {
    title: "V3 Construction",
    // link: "https://cabanasupporter.ro/",
    macFrame: constructionMac,
    phoneFrame: constructionPhone,
    contribution: 95,
    roles: ["Front-end development"],
    technologies: [
      { JavaScript: javaScriptIcon },
      { PHP: phpIcon },
      { Boostrap: bootstrap },
      { HTML: htmlIcon },
      { CSS: cssIcon },
    ],
  },
];
