import { LuBoxes, LuSparkles } from "react-icons/lu";
import type { EpisodeSummary } from "@/components/content/episode-card";
import type { HeroTeaserProps } from "@/components/content/hero-teaser";
import type { HomeHeroProps } from "@/components/content/home-hero";
import type { PlatformLinkItem } from "@/components/content/platform-links";
import type { SpeakerItem } from "@/components/content/speaker-list";
import type { TopicItem } from "@/components/content/topics-section";

export const sampleSpeakers: SpeakerItem[] = [
  {
    name: "Alex Chen",
    role: "Host",
    avatarSrc: "/images/featured-episode-art.png",
    avatarAlt: "Alex Chen",
  },
  {
    name: "Jordan Lee",
    role: "Co-host",
  },
];

export const sampleEpisode: EpisodeSummary = {
  number: "042",
  title: "Design systems at scale",
  guestName: "With Sam Rivera",
  showNotes:
    "Sam joins us to explore token architecture, component governance, and keeping design systems useful as products grow.",
  publishedAt: "Mar 12, 2026",
  duration: "48 min",
  imageSrc: "/images/featured-episode-art.png",
  imageAlt: "Episode artwork",
  href: "/watch/episode-011-design-systems-at-scale",
};

export const sampleFeaturedEpisode: HeroTeaserProps = {
  title: "Design systems at scale",
  guestName: "Sam Rivera",
  publishedAt: "Mar 12, 2026",
  duration: "48 min",
  imageSrc: "/images/featured-episode-art.png",
  imageAlt: "Episode artwork",
  episodeHref: "/watch/episode-011-design-systems-at-scale",
};

export const sampleHomeHeroProps: HomeHeroProps = {
  headline: "Conversations for builders shipping with AI",
  description:
    "Deep dives with practitioners on tradeoffs, tooling, and craft.",
  primaryCta: { label: "Listen to latest", href: "/episodes/latest" },
  secondaryCta: { label: "View all episodes", href: "/episodes" },
  stats: [
    { label: "Episodes", value: "42" },
    { label: "Guests", value: "38" },
  ],
  featuredEpisode: sampleFeaturedEpisode,
};

export const samplePlatformLinks: PlatformLinkItem[] = [
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com",
    variant: "primary",
  },
  { label: "Spotify", href: "https://open.spotify.com" },
];

export const sampleTopics: TopicItem[] = [
  { label: "AI tooling", icon: LuSparkles },
  { label: "Design systems", icon: LuBoxes },
];
