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
    showNotes,
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
    guests[]->{
      name
    }
  }`,
);

export const LATEST_EPISODE_SLUG_QUERY = defineQuery(
  `*[_type == "episode" && defined(slug.current)] | order(publishedAt desc)[0].slug.current`,
);

export const EPISODES_COUNT_QUERY = defineQuery(
  `count(*[_type == "episode" && defined(slug.current)])`,
);
