import type { FC } from "react";

import { AboutSection } from "@/components/content/about-section";
import { HomeHero } from "@/components/content/home-hero";
import { RecentConversationsSection } from "@/components/content/recent-conversations-section";
import { SubscribeSection } from "@/components/content/subscribe-section";
import { TopicsSection } from "@/components/content/topics-section";

import {
  homeHero,
  homeSpeakers,
  homeTopics,
  recentEpisodes,
} from "./_lib/home-content";

const Page: FC<PageProps<"/">> = () => (
  <main className="flex-1">
    <HomeHero {...homeHero} />
    <RecentConversationsSection episodes={recentEpisodes} />
    <TopicsSection topics={homeTopics} />
    <AboutSection speakers={homeSpeakers} />
    <SubscribeSection />
  </main>
);

export default Page;
