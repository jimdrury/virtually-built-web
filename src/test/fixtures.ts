import { LuBoxes, LuSparkles } from "react-icons/lu";
import type { getEpisode } from "@/api/episodes";
import type { EpisodeSummary } from "@/components/content/episode-card";
import type { HeroTeaserProps } from "@/components/content/hero-teaser";
import type { HomeHeroProps } from "@/components/content/home-hero";
import type { PlatformLinkItem } from "@/components/content/platform-links";
import type { SpeakerItem } from "@/components/content/speaker-list";
import type { TopicItem } from "@/components/content/topics-section";
import type { EpisodeListItem } from "@/sanity/format-episode";

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

export const sampleEpisodeDetail: NonNullable<
  Awaited<ReturnType<typeof getEpisode>>
> = {
  _id: "episode-042",
  episodeNumber: 42,
  title: "Design systems at scale",
  slug: {
    _type: "slug",
    current: "episode-011-design-systems-at-scale",
  },
  guests: [{ _id: "guest-1", name: "Sam Rivera", role: null, avatar: null }],
  publishedAt: "2026-03-12T00:00:00.000Z",
  durationMinutes: 48,
  artwork: {
    asset: {
      _type: "reference",
      _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
    },
    alt: "Episode artwork",
    hotspot: null,
    crop: null,
  },
  showNotes: [
    {
      _type: "block",
      _key: "notes-1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "notes-1-span",
          text: "Sam joins us to explore token architecture.",
        },
      ],
    },
  ],
  showNotesExcerpt:
    "Sam joins us to explore token architecture.\n\nWe also discuss governance and rollout.",
  youtubeUrl: "https://www.youtube.com/watch?v=Bp2ai2MD4Mk",
  transcript: [
    {
      start: 0,
      speaker: "Alex Chen",
      text: "Welcome back to Virtually Built.",
    },
    {
      start: 45,
      speaker: "Sam Rivera",
      text: "Thanks for having me on the show.",
    },
  ],
  hosts: [{ _id: "host-1", name: "Alex Chen", role: "Host", avatar: null }],
};

export const sampleEpisodeListItem: EpisodeListItem = {
  _id: "episode-042",
  episodeNumber: 42,
  title: "Design systems at scale",
  slug: {
    _type: "slug",
    current: "episode-011-design-systems-at-scale",
  },
  guests: [{ _id: "guest-1", name: "Sam Rivera", role: null }],
  publishedAt: "2026-03-12T00:00:00.000Z",
  durationMinutes: 48,
  artwork: {
    asset: {
      _type: "reference",
      _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
    },
    alt: "Episode artwork",
    hotspot: null,
    crop: null,
  },
  showNotes:
    "Sam joins us to explore token architecture, component governance, and keeping design systems useful as products grow.",
};

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
