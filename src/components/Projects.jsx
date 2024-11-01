/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SJP0MdSDzSr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

const projects = [
  {
    name: "Life link",
    description:
      "Using react.js. I created a website for my projects.",
    url: "#",
    image: "p1.png",
  },
  {
    name: "Hanndy",
    description:
      "Using php and mysql. I created a website for my projects.",
    url: "#",
    image: "p2.png",
  },
  {
    name: "Weather app",
    description:
      "Using js. I created a website for my projects.",
    url: "#",
    image: "p3.png",
  },
  {
    name: "News",
    description:
      "Using html and css. I created a website for my projects.",
    url: "#",
    image: "p4.png",
  }
]

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="Projects">
   <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center gap-4 md:gap-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Discover the work we&apos;re most proud of. From stunning websites to powerful apps, we help bring your
          ideas to life.
        </p>
      </div>
      <ul className="grid gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <li key={project.name}>
            <Link
              href={project.url}
              className="group flex flex-col items-center gap-4 bg-white rounded-lg p-6 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"  >
              <img src={project.image} alt={project.name} className="w-100 h-200"  style={{ width: '100%', height: '200px' }}/>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
            </Link>
          </li>
        ))}
    </ul>

    </div>
  </div>
</section>

  )
}