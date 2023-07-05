import TechNiche from './assets/techniche.png';
import WorkoutApp from "./assets/WorkoutGif.gif";
import JournalApp from "./assets/JournalGif.gif";

const projects = [
    {
       id: 1,
       name: "Tech Niche",
       about: "This is a Full Stack app created with React and Express. Its a ecommerce app for tech with bids, bartering via chat, and negoitation via chat. It allows users to create, delete, and edit there post.",
       gitHub: "https://github.com/luismolinuevo/digitaldish",
       live: "https://digitaldish.vercel.app/",
       techStack: ["React.js", "Tailwind", "Redux", "Express", "Prisma", "MySQL", "Cloudinary", "Socket.io"],
       img: TechNiche
    },
    {
        id: 2,
        name: "Shopping Cart",
        about: "This app was created with React.js, TailwindCSS, and Redux Tool kit. This app allows user to add and remove items from a shopping cart. Users could also add or decrease the amount of items in a cart. You could also fully clear the cart.",
        gitHub: "https://github.com/luismolinuevo/shoppingcart",
        live: "https://shoppingcart-nu-liart.vercel.app/",
        techStack: ["React.js", "TailwindCSS", "Redux Tool Kit"],
        img: WorkoutApp
    },
    {
        id: 3,
        name: "Fitszy",
        about: "This app allows users to create a personal account, custom workouts, and custom exercises for specific workouts. It saves user information and allows users to delete, create, add, and edit their workouts and exercises.",
        gitHub: "https://github.com/luismolinuevo/workoutappv2",
        live: null,
        techStack: ["React.js", "CSS", "Express", "SequelizeORM", "PostgreSQL", ],
        img: JournalApp
    },
    // {

    // },
    // {
        
    // }
]

export default projects;

