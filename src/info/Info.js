import self from "../img/self.png";
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mohamed Aziz",
    lastName: "LOUZIR",
    initials: "Aziz", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Java/React Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by Water and Coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in Tunisia'
        },
        {
            emoji: '🏋',
            text: 'Gym addict'
        },
        {
            emoji: "💼",
            text: "Software Programmer at VERMEG for banking and insurance"
        },
        {
            emoji: "📧",
            text: "medaziz.louzir@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/aziz.louzir/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/azizlouzir/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/LouzirMohamedAziz",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mohamed-aziz-louzir-728952193/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Aziz, Software Engineer with over 3 years of experience as Java Developer for the FinTech industry, I enjoy working out and meet people, and I believe that working smart and with consistency is the key to become a master of any situation being an eternal learner.",
    skills:
    {
        proficientWith: ['Java', 'JEE', 'SpringBoot','Palmyra Framework', 'SQL', 'NoSQL', 'Linux', 'Javascript', 'Git', 'Docker', 'Github', 'Oracle Databases', 'Jenkins', 'Nexus', 'SonarQube'],
        exposedTo: ['React', 'NodeJS', 'ExpressJS', 'Python', 'Kubernetes', 'Html', 'Azure', 'Css', 'Figma', 'AWS', 'CSS', 'JSX/TSX', 'TypeScript']
    }
    ,
    hobbies: [
        {
            label: 'Workout',
            emoji: '🏋'
        },
        {
            label: 'Music',
            emoji: '🎵'
        },
        {
            label: 'Travel',
            emoji: '✈️'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        // {
        //     title: "E-Shop CRUD using Spring Boot and MongoDB",
        //     live: "https://github.com/LouzirMohamedAziz/fithub", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/LouzirMohamedAziz/fithub", // this should be a link to the **repository** of the project, where the code is hosted.
        //     image: mock1
        // },
        // {
        //     title: "EVALIA: Flutter mobile application",
        //     live: "https://fancy-taffy-e7e323.netlify.app/",
        //     source: "https://github.com/LouzirMohamedAziz/PortfolioZay",
        //     image: mock2
        // }
        // //
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}