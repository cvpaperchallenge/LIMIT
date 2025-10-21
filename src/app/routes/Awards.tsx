import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import awardsData from "../../data/awards.json";
import type { Route } from "./+types/Awards";
import { buildMeta } from "@/lib/seo";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "Awards | LIMIT Workshop @ ICCV 2025",
    description:
      "Celebrate the LIMIT Workshop award recipients, honoring outstanding contributions across accepted papers at ICCV 2025.",
    path: "/awards",
    keywords: [
      "LIMIT Workshop awards",
      "Best Paper LIMIT",
      "ICCV 2025 workshop awards",
      "LIMIT accepted papers",
    ],
  });

function Awards() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      <section className="space-y-4 text-center">
        {/* <div className="flex justify-center">
          <AwardIcon className="h-12 w-12 text-primary" />
        </div> */}
        <h1 className="text-3xl sm:text-4xl tracking-tighter">
          {awardsData.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {awardsData.subtitle}
        </p>
        {/* <p className="text-muted-foreground max-w-3xl mx-auto">
          {awardsData.intro}
        </p> */}
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Best Paper Award
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-1">
          {awardsData.awards.map((award) => (
            <Card key={award.paperTitle} className="flex flex-col w-full">
              <CardHeader className="space-y-3">
                {/* <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                  <AwardIcon className="h-4 w-4" />
                  <span>{award.category}</span>
                </div> */}
                <CardTitle className="text-xl leading-tight">
                  {award.paperTitle}
                </CardTitle>
                <CardDescription className="text-base sm:text-md">
                  {award.authors}
                </CardDescription>
              </CardHeader>
              {/* <CardContent>
                <p className="text-sm text-muted-foreground">
                  {award.summary}
                </p>
              </CardContent> */}
              <CardFooter className="mt-auto flex flex-col gap-4 items-center">
                {/* <Button variant="outline" size="sm" asChild>
                  <a href={award.paperLink} target="_blank" rel="noreferrer">
                    Read paper
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button> */}
                <div className="flex justify-center w-full">
                  <img
                    src="/limit-logo-black-wide.png"
                    alt="LIMIT Workshop logo"
                    className="h-30 w-auto dark:hidden"
                    loading="lazy"
                  />
                  <img
                    src="/limit-logo-white-wide.png"
                    alt="LIMIT Workshop logo"
                    className="h-30 w-auto hidden dark:block"
                    loading="lazy"
                  />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Awards;
