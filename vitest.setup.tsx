import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import type { ImgHTMLAttributes, ReactNode } from "react";
import { afterEach, vi } from "vitest";

import "./src/app/globals.css";

afterEach(() => {
  cleanup();
});

vi.mock("next/link", () => ({
  default: function MockLink({
    children,
    href,
    ...props
  }: {
    children?: ReactNode;
    href?: string;
    className?: string;
  }) {
    return (
      <a href={href ?? "#"} {...props}>
        {children}
      </a>
    );
  },
}));

vi.mock("next/image", () => ({
  default: function MockImage({
    fill: _fill,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) {
    // biome-ignore lint/performance/noImgElement: lightweight Next.js image stub for tests
    return <img alt="" {...props} />;
  },
}));

vi.mock("next-sanity/image", () => ({
  Image: function MockSanityImage({
    fill: _fill,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) {
    // biome-ignore lint/performance/noImgElement: lightweight Sanity image stub for tests
    return <img alt="" {...props} />;
  },
  imageLoader: ({ src }: { src: string }) => src,
}));

vi.mock("next/font/google", () => ({
  Geist: () => ({
    variable: "--font-geist-sans",
    className: "geist-sans",
  }),
  Geist_Mono: () => ({
    variable: "--font-geist-mono",
    className: "geist-mono",
  }),
}));
