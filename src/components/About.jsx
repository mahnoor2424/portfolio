/**
 * v0 by Vercel.
 * @see https://v0.dev/t/igXM4kknkJD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <section className="bg-muted py-12 md:py-16 lg:py-20 mt-10" id="About">
       <div className="container mx-auto px-4 md:px-6">
  <div className="max-w-3xl mx-auto space-y-6">
    <div className="space-y-5 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">About Me</h2>
      <p className="text-muted-foreground md:text-xl text-gray-400 mt-4">
        Hi, I'm a passionate software developer with a strong background in building modern, scalable, and
        user-friendly web applications. I'm constantly exploring new technologies and techniques to enhance my
        skills and deliver exceptional results.
      </p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg bg-background p-4 shadow-sm mt-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 text-primary">
            <CodeIcon className="h-5 w-5" />
          </div>
          <h4 className="text-lg font- font-medium">Languages</h4>
        </div>
        <p className="mt-2 text-muted-foreground">JavaScript | Html | CSS | php</p>
      </div>
      <div className="rounded-lg bg-background p-4 shadow-sm mt-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 text-primary">
            <LayersIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium">Frameworks</h3>
        </div>
        <p className="mt-2 text-muted-foreground">React | laravel</p>
      </div>
      <div className="rounded-lg bg-background p-4 shadow-sm mt-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 text-primary">
            <DatabaseIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium">Databases</h3>
        </div>
        <p className="mt-2 text-muted-foreground">MySQL</p>
      </div>
    </div>
  </div>
</div>

      </section>
      
    )
  }
  
  function CloudIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  }
  
  
  function CodeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  
  
  function DatabaseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    )
  }
  
  
  function LayersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    )
  }
  
  
  function PenToolIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
        <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
        <path d="m2.3 2.3 7.286 7.286" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    )
  }
  
  
  function RocketIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }