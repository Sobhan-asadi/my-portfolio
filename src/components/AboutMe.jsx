import { Briefcase, Code, User } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="md-12 text-center text-3xl font-bold md:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="my-7 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              Front-End Developer & Creative Technologist
            </h3>

            <p className="text-muted-foreground">
              I'm Sobhan Asadi — a Front-End Developer who enjoys creating
              clean, responsive, and user-friendly web interfaces. I’m
              passionate about modern web technologies and always eager to learn
              new tools and improve my skills. My goal is to build digital
              products that not only look good but also deliver a smooth and
              meaningful experience for users.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a
                href="https://github.com/Sobhan-asadi"
                target="_blank"
                className="cosmic-button"
              >
                Get In touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="border-primary rounded-md border p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Code className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="">
                    Crearing responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-primary rounded-md border p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-bold text-lg">Web Development</h4>
                  <p className="">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-primary rounded-md border p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <User className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-semibold text-lg">UI/UX Design</h4>
                  <p className="">
                    Designing intuitive user interfaces and seamless user
                    experiendes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
