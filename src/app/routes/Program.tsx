import { ExternalLink, FileText, Video } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import programData from "../../data/program.json";

function Program() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          {programData.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {programData.subtitle}
        </p>
      </section>

      {/* Keynote Speakers */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Keynote Speakers
          </h2>
          <p className="text-muted-foreground">
            Distinguished researchers and industry leaders
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programData.keynoteSpeakers.map((speaker, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{speaker.name}</CardTitle>
                <CardDescription>{speaker.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">Speaker Photo</span>
                  </div>
                  <h3 className="font-semibold">{speaker.title}</h3>
                  <p className="text-sm text-muted-foreground">{speaker.bio}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noreferrer">
                    View Profile <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Accepted Papers */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Accepted Papers
          </h2>
          <p className="text-muted-foreground">
            Research papers accepted for presentation at the workshop
          </p>
        </div>
        <div className="flex-col justify-items-center w-full">
          <Tabs defaultValue="oral" className="w-[90dvw] sm:w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="oral">Oral Presentations</TabsTrigger>
              <TabsTrigger value="poster">Poster Presentations</TabsTrigger>
            </TabsList>
            <TabsContent value="oral" className="space-y-4 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paper Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Authors
                    </TableHead>
                    <TableHead className="w-[100px]">Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programData.acceptedPapers.oral.map((paper) => (
                    <TableRow key={paper.id}>
                      <TableCell className="font-medium">
                        {paper.title}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {paper.authors}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {paper.links.paper && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.paper}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Paper</span>
                              </a>
                            </Button>
                          )}
                          {paper.links.video && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.video}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Video className="h-4 w-4" />
                                <span className="sr-only">Video</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="poster" className="space-y-4 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paper Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Authors
                    </TableHead>
                    <TableHead className="w-[100px]">Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programData.acceptedPapers.poster.map((paper, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {paper.title}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {paper.authors}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {paper.links.paper && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.paper}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Paper</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Panel Discussion */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Panel Discussion
          </h2>
          <p className="text-muted-foreground">
            Challenges and Opportunities in ML
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{programData.panelDiscussion.title}</CardTitle>
            <CardDescription>
              {programData.panelDiscussion.time}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>{programData.panelDiscussion.description}</p>
              <h3 className="font-semibold">Panelists</h3>
              <ul className="list-disc pl-5 space-y-2">
                {programData.panelDiscussion.panelists.map(
                  (panelist, index) => (
                    <li key={index}>{panelist}</li>
                  ),
                )}
              </ul>
              <h3 className="font-semibold">Moderator</h3>
              <p>{programData.panelDiscussion.moderator}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Session Structure */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Session Structure
          </h2>
          <p className="text-muted-foreground">
            Organization of paper presentations by topic
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programData.sessionStructure.map((session, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{session.title}</CardTitle>
                <CardDescription>{session.time}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {session.description}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {session.papers.map((paper, paperIndex) => (
                    <li key={paperIndex}>{paper}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Program;
