import { LuBot, LuBoxes, LuLayers, LuSparkles } from "react-icons/lu";
import type { EpisodeSummary } from "@/components/content/episode-card";
import type { HomeHeroProps } from "@/components/content/home-hero";
import type { SpeakerItem } from "@/components/content/speaker-list";
import type { TopicItem } from "@/components/content/topics-section";

export const homeHero: HomeHeroProps = {
  badge: "Season 3 · Now streaming",
  headline: "Ideas that shape what we build next.",
  description:
    "A podcast on software, systems, and the people building the digital world — from architecture to craft, with guests who ship.",
  primaryCta: {
    label: "Listen to latest",
    href: "/watch/latest",
  },
  secondaryCta: {
    label: "View all episodes",
    href: "/episodes",
  },
  stats: [
    { label: "Episodes", value: "48" },
    { label: "Listeners", value: "12K+" },
    { label: "Avg length", value: "42 min" },
  ],
  featuredEpisode: {
    label: "Latest video episode",
    title: "Designing for durability in distributed systems",
    guestName: "Sarah Chen",
    publishedAt: "24 Jun 2026",
    duration: "47 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "Sarah Chen and guest recording a video podcast episode",
    episodeHref:
      "/watch/episode-010-designing-for-durability-in-distributed-systems",
  },
};

export const recentEpisodes: EpisodeSummary[] = [
  {
    number: "047",
    title: "Why local-first still matters",
    guestName: "Marcus Webb",
    publishedAt: "17 Jun 2026",
    duration: "38 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "Marcus Webb recording a podcast episode",
    href: "/watch/episode-006-why-local-first-still-matters",
    showVideoBadge: false,
  },
  {
    number: "046",
    title: "The craft of incremental delivery",
    guestName: "",
    publishedAt: "10 Jun 2026",
    duration: "52 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "Elena Torres recording a podcast episode",
    href: "/watch/episode-007-the-craft-of-incremental-delivery",
    showVideoBadge: false,
  },
  {
    number: "045",
    title: "Platform teams without bottlenecks",
    guestName: "",
    publishedAt: "3 Jun 2026",
    duration: "44 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "James Okonkwo recording a podcast episode",
    href: "/watch/episode-008-platform-teams-without-bottlenecks",
    showVideoBadge: false,
  },
  {
    number: "044",
    title: "Observability without the overhead",
    guestName: "",
    publishedAt: "27 May 2026",
    duration: "41 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "Priya Sharma recording a podcast episode",
    href: "/watch/episode-009-observability-without-the-overhead",
    showVideoBadge: true,
  },
];

export const homeTopics: TopicItem[] = [
  {
    label: "Building with AI",
    icon: LuSparkles,
  },
  {
    label: "Agent Frameworks",
    icon: LuBot,
  },
  {
    label: "Google's Agentic Offerings",
    icon: LuLayers,
  },
  {
    label: "Different Models and Modalities",
    icon: LuBoxes,
  },
];

export const homeSpeakers: SpeakerItem[] = [
  {
    name: "Jim Drury",
    role: "Co-host & builder",
  },
  {
    name: "Matthew Law",
    role: "Co-host & builder",
  },
];
