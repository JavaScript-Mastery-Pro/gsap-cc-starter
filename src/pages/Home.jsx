import { Link } from "react-router-dom";

const animations = [
  {
    title: "GSAP To",
    description:
      "The to() method is used to animate a single element from a starting state to an ending state.",
    path: "/gsapto",
  },
  {
    title: "GSAP From",
    description:
      "The from() method is used to animate a single element from an ending state to a starting state.",
    path: "/gsapfrom",
  },
  {
    title: "GSAP FromTo",
    description:
      "The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.",
    path: "/gsapfromto",
  },
  {
    title: "GSAP Timeline",
    description:
      "The timeline() method is used to create a timeline to manage multiple animations.",
    path: "/gsaptimeline",
  },
  {
    title: "GSAP Stagger",
    description:
      "The stagger() method is used to animate multiple elements with a stagger effect.",
    path: "/gsapstagger",
  },
  {
    title: "GSAP ScrollTrigger",
    description:
      "The ScrollTrigger plugin is used to trigger animations based on the scroll position.",
    path: "/gsapscrolltrigger",
  },
  {
    title: "GSAP Text",
    description: "Learn how to animate text with GSAP.",
    path: "/gsaptext",
  },
];

const Home = () => {
  return (
    <main className="container">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-zinc-50">GSAP Animations</h1>
        <ol className="flex flex-col mt-10">
          {animations.map((animation, index) => (
            <li
              key={index}
              className="flex flex-row gap-2 p-5 hover:bg-zinc-800/50 rounded-lg"
            >
              <p>
                <span className="text-sm font-bold text-zinc-50">
                  {index + 1}.
                </span>
              </p>
              <div className="flex flex-col gap-2 flex-1">
                <Link
                  to={animation.path}
                  className="text-md font-semibold text-blue-600"
                >
                  {animation.title}
                </Link>
                <p className="text-gray-400 text-xs">{animation.description}</p>
              </div>

              <svg
                className="size-6 text-gray-600 -rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
                />
              </svg>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Home;
