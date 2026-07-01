const YOUTUBE_HOSTS = new Set(["youtube.com", "youtu.be", "m.youtube.com"]);

export const parseVideoId = (youtubeUrl: string): string | null => {
  try {
    const url = new URL(youtubeUrl);
    const hostname = url.hostname.replace(/^www\./, "");

    if (!YOUTUBE_HOSTS.has(hostname)) {
      return null;
    }

    if (hostname === "youtu.be") {
      const id = url.pathname.slice(1).split("/")[0];
      return id || null;
    }

    if (url.pathname.startsWith("/embed/")) {
      const id = url.pathname.split("/")[2];
      return id || null;
    }

    const id = url.searchParams.get("v");
    return id || null;
  } catch {
    return null;
  }
};

export const toYoutubeEmbedUrl = (youtubeUrl: string): string | null => {
  const videoId = parseVideoId(youtubeUrl);

  if (!videoId) {
    return null;
  }

  return `https://www.youtube.com/embed/${videoId}`;
};
