"use client";

import NextImage, { type ImageProps as NextImageProps } from "next/image";
import {
  Image as SanityNextImage,
  type ImageProps as SanityNextImageProps,
} from "next-sanity/image";
import type { FC } from "react";

type SanityImageProps = Omit<NextImageProps, "src"> & {
  src: string;
};

const isSanityCdnUrl = (src: string) =>
  src.startsWith("https://cdn.sanity.io/");

export const SanityImage: FC<SanityImageProps> = ({ src, ...props }) => {
  if (isSanityCdnUrl(src)) {
    const sanityProps = props as Omit<SanityNextImageProps, "src">;
    return <SanityNextImage src={src} {...sanityProps} />;
  }

  return <NextImage src={src} {...props} />;
};
