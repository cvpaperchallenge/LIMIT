import { Link } from "react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

import { Button } from "../../components/ui/button";
import homeData from "../../data/home.json";

function Home() {
  return (
    <main className="container px-6 py-8 space-y-16 xl:w-6xl">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-6 py-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {homeData.title}
          </h1>
          <p className="text-xl text-muted-foreground">{homeData.subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>{homeData.eventInfo.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{homeData.eventInfo.location}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link to="/iccv2025/call-for-papers">Submit Paper</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/iccv2025/schedule">Join Workshop</Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Overview</h2>
          <p className="text-muted-foreground">
            About our workshop and its objectives
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>{homeData.overview.mission}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc pl-5 space-y-2">
              {homeData.overview.keyTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">
            Important Dates
          </h2>
          <p className="text-muted-foreground">
            Key deadlines for your calendar
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {homeData.importantDates.map((date, index) => (
            <div key={index} className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">{date.title}</h3>
              <p className="text-muted-foreground">{date.date}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/iccv2025/schedule" className="flex items-center gap-2">
              View Full Schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Latest News</h2>
          <p className="text-muted-foreground">Updates and announcements</p>
        </div>
        <div className="space-y-4">
          {homeData.latestNews.map((news, index) => (
            <div key={index} className="rounded-lg border bg-card p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-semibold">{news.title}</h3>
                  <p className="text-sm text-muted-foreground">{news.date}</p>
                </div>
              </div>
              <p className="mt-2">{news.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
