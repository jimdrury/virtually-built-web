import { defineQuery } from "next-sanity";

export const EPISODE_QUERY = defineQuery(
  `*[_type == "episode" && slug.current == $slug][0]{
    _id,
    episodeNumber,
    title,
    slug,
    guests[]->{
      _id,
      name,
      role,
      avatar {
        asset,
        alt,
        hotspot,
        crop
      }
    },
    publishedAt,
    durationMinutes,
    artwork {
      asset,
      alt,
      hotspot,
      crop
    },
    showNotes,
    "showNotesExcerpt": pt::text(showNotes),
    youtubeUrl,
    transcript[]{
      start,
      speaker,
      text
    },
    hosts[]->{
      _id,
      name,
      role,
      avatar {
        asset,
        alt,
        hotspot,
        crop
      }
    }
  }`,
);

export const EPISODE_METADATA_QUERY = defineQuery(
  `*[_type == "episode" && slug.current == $slug][0]{
    title,
    episodeNumber,
    publishedAt,
    durationMinutes,
    youtubeUrl,
    "showNotesExcerpt": pt::text(showNotes),
    artwork {
      asset,
      alt,
      hotspot,
      crop
    },
    guests[]->{
      name
    }
  }`,
);

export const RELATED_EPISODES_QUERY = defineQuery(
  `*[_type == "episode" && slug.current != $slug && episodeNumber in $numbers] | order(episodeNumber desc) {
    _id,
    episodeNumber,
    title,
    slug,
    guests[]->{
      _id,
      name,
      role
    },
    publishedAt,
    durationMinutes,
    artwork {
      asset,
      alt,
      hotspot,
      crop
    },
    "showNotes": pt::text(showNotes)
  }`,
);

export const LATEST_EPISODE_SLUG_QUERY = defineQuery(
  `*[_type == "episode" && defined(slug.current)] | order(publishedAt desc)[0].slug.current`,
);

export const EPISODES_COUNT_QUERY = defineQuery(
  `count(*[_type == "episode" && defined(slug.current)])`,
);
