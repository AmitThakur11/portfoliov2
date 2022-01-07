import SageMindPic from "./media/sagemind.png";
import VideoLibPic from "./media/videoproject.png";
import SoulMadePic from "./media/soulmade.png";
import CssstonePic from "./media/cssstone.png";
import MeetYourPic from "./media/meetyourHome.png";

const techData = [
  {
    id: 1,
    tech: "HTML",
    img: "https://cdn.iconscout.com/icon/free/png-64/html5-40-1175193.png",
    proficiency: 0
  },
  {
    id: 2,
    tech: "CSS",
    img: "https://cdn.iconscout.com/icon/free/png-64/css-131-722685.png",
    proficiency: 0
  },
  {
    id: 3,
    tech: "JavaScript",
    img:
      "https://cdn.iconscout.com/icon/free/png-64/javascript-2752148-2284965.png",
    proficiency: 0
  },
  {
    id: 4,
    tech: "React",
    img: "https://cdn.iconscout.com/icon/free/png-64/react-3521666-2945110.png",
    proficiency: 0
  },
  {
    id: 5,
    tech: "Mongo",
    img:
      "https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+mongo-1324451391614529822.png",
    proficiency: 0
  },
  {
    id: 6,
    tech: "NodeJS",
    img:
      "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png",
    proficiency: 0
  },
  {
    id: 7,
    tech: "Express",
    img:
      "https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F359%2Ffull%2Fexpressjslogo.png&w=256&q=75",
    proficiency: 0
  },
  {
    id: 8,
    tech: "TypeScript",
    img: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
    proficiency: 0
  },
  {
    id: 9,
    tech: "Git",
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png",
    proficiency: 0
  },
  {
    id: 10,
    tech: "Jest",
    img: "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
    proficiency: 0
  }
];

const ProjectData = [
  {
    id: 18,
    name: "MeetYour",
    img: MeetYourPic,
    projectDescription:
      "It's a social media web app , user can upload post , like and comment on posts and much more",
    techUsed: [
      {
        id: 1,
        name: "Mongo",
        img:
          "https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+mongo-1324451391614529822.png"
      },
      {
        id: 2,
        name: "Express",
        img:
          "https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F359%2Ffull%2Fexpressjslogo.png&w=256&q=75"
      },
      {
        id: 3,
        name: "React",
        img:
          "https://cdn.iconscout.com/icon/free/png-64/react-3521666-2945110.png"
      },
      {
        id: 4,
        name: "NodeJs",
        img:
          "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png"
      },
      {
        id: 5,
        name: "CSS",
        img: "https://cdn.iconscout.com/icon/free/png-64/css-131-722685.png"
      },
      {
        id: 6,
        name: "Redux toolkit",
        img:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
      }
    ],
    live: "https://meetyour.netlify.app",
    source: "https://github.com/AmitThakur11/meetyour/tree/development2",
    logo: "https://i.ibb.co/bBkDx7v/asteroid-1.png"
  },
  {
    id: 1,
    name: "SageMind",
    img: SageMindPic,
    projectDescription:
      "It's a quiz app  with  variety of questions , user can choose one category and cn check its knowledge ",
    techUsed: [
      {
        id: 1,
        name: "React",
        img:
          "https://cdn.iconscout.com/icon/free/png-64/react-3521666-2945110.png"
      },
      {
        id: 2,
        name: "TypeScript",
        img: "https://iconape.com/wp-content/png_logo_vector/typescript.png"
      },
      {
        id: 3,
        name: "CSS",
        img: "https://cdn.iconscout.com/icon/free/png-64/css-131-722685.png"
      }
    ],
    live: "https://sagemind.netlify.app/",
    source: "https://github.com/AmitThakur11/SageMind",
    logo: "https://cdn-icons-png.flaticon.com/512/974/974779.png"
  },
  {
    id: 2,
    name: "ViideoActive",
    img: VideoLibPic,
    projectDescription:
      "It's a video library web, user can watch videos , create playlist and do much more",
    techUsed: [
      {
        id: 1,
        name: "Mongo",
        img:
          "https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+mongo-1324451391614529822.png"
      },
      {
        id: 2,
        name: "Express",
        img:
          "https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F359%2Ffull%2Fexpressjslogo.png&w=256&q=75"
      },
      {
        id: 3,
        name: "React",
        img:
          "https://cdn.iconscout.com/icon/free/png-64/react-3521666-2945110.png"
      },
      {
        id: 4,
        name: "NodeJs",
        img:
          "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png"
      },
      {
        id: 5,
        name: "CSS",
        img: "https://cdn.iconscout.com/icon/free/png-64/css-131-722685.png"
      },
      {
        id: 10,
        name: "Jest",
        img:
          "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"
      }
    ],
    live: "https://viideoactive.netlify.app/",
    source: "https://github.com/AmitThakur11/video-active-project",
    logo: "https://cdn-icons-png.flaticon.com/512/1593/1593563.png"
  },
  {
    id: 3,
    name: "Soulmade",
    img: SoulMadePic,
    projectDescription:
      "It's an eCommerce web app , user can create there account and add products to cart , wishlist ,place order and much more.",
    techUsed: [
      {
        id: 1,
        name: "Mongo",
        img:
          "https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+mongo-1324451391614529822.png"
      },
      {
        id: 2,
        name: "Express",
        img:
          "https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F359%2Ffull%2Fexpressjslogo.png&w=256&q=75"
      },
      {
        id: 3,
        name: "React",
        img:
          "https://cdn.iconscout.com/icon/free/png-64/react-3521666-2945110.png"
      },
      {
        id: 4,
        name: "NodeJs",
        img:
          "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png"
      },
      {
        id: 5,
        name: "CSS",
        img: "https://cdn.iconscout.com/icon/free/png-64/css-131-722685.png"
      },
      {
        id: 10,
        name: "Jest",
        img:
          "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"
      }
    ],
    live: "https://soulmade.netlify.app/",
    source: "https://github.com/AmitThakur11/e-com",
    logo: "https://cdn-icons-png.flaticon.com/128/1149/1149380.png"
  },
  {
    id: 4,
    name: "CssStone",
    img: CssstonePic,
    projectDescription:
      "It's a component library site , developer can import the link to there projects and use the components.",
    techUsed: [
      {
        id: 1,
        name: "HTML",
        img: "https://cdn.iconscout.com/icon/free/png-64/html5-40-1175193.png"
      },
      {
        id: 2,
        name: "CSS",
        img: "https://cdn.iconscout.com/icon/free/png-64/css-131-722685.png"
      }
    ],
    live: "https://cssstonelive.netlify.app/",
    source: "https://github.com/AmitThakur11/cssStoneLive",
    logo: "https://i.ibb.co/gjr7DSt/stone.png"
  }
];

const BlogData = [
  {
    id: 1,
    name: "Hoisting ..........",
    body: `Some common synonyms of hoist are boost, elevate, heave, lift, raise, and rear. While all these words mean "to move from a lower to a higher place or position," hoist implies lifting something heavy especially by mechanical means.`,
    topic:
      "https://cdn.iconscout.com/icon/free/png-64/javascript-2752148-2284965.png",
    link: "https://codewaala.hashnode.dev/hoisting"
  },
  {
    id: 2,
    name: `what is "this"`,
    body: `this" is very confusing i know , but we will try our best to grab "this" .so what is "this" actually means .`,
    topic:
      "https://cdn.iconscout.com/icon/free/png-64/javascript-2752148-2284965.png",
    link: "https://dev.to/amitthakur11/what-is-this-3lko"
  },
  {
    id: 3,
    name: "Call , Apply , Bind",
    body:
      "Method borrowing, also known as function borrowing, as its name tells, it is a way of using member function of one object to another object",
    topic:
      "https://cdn.iconscout.com/icon/free/png-64/javascript-2752148-2284965.png",
    link: "https://codewaala.hashnode.dev/call-apply-bind"
  },
  {
    id: 4,
    name: "How to add a pre-loader in your website.",
    body:
      "A preloader — or what some call a loading screen — is the what you see on some sites before the main content of the web page is loaded.Their main purpose is to entertain site visitors while the actual content of the page is still loading in the background.",
    topic: "https://cdn.iconscout.com/icon/free/png-64/html5-40-1175193.png",
    link:
      "https://dev.to/amitthakur11/how-to-add-a-pre-loader-in-your-website-140i"
  }
];

export { techData, ProjectData, BlogData };
