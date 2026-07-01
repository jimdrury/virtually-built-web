import clsx from "clsx";
import Link from "next/link";
import type { FC } from "react";
import styles from "./episodes-pagination.module.css";

export interface EpisodesPaginationProps {
  currentPage: number;
  totalPages: number;
}

type PaginationItem = number | "ellipsis";

const pageHref = (page: number) =>
  page <= 1 ? "/episodes" : `/episodes?page=${page}`;

const buildPaginationItems = (
  currentPage: number,
  totalPages: number,
): PaginationItem[] => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const items: PaginationItem[] = [1];

  if (currentPage > 3) {
    items.push("ellipsis");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let page = start; page <= end; page += 1) {
    items.push(page);
  }

  if (currentPage < totalPages - 2) {
    items.push("ellipsis");
  }

  items.push(totalPages);

  return items;
};

export const EpisodesPagination: FC<EpisodesPaginationProps> = ({
  currentPage,
  totalPages,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const items = buildPaginationItems(currentPage, totalPages);

  return (
    <nav aria-label="Episodes pagination">
      <ol className={styles["episodes-pagination"]}>
        {items.map((item, index) => (
          <li
            key={item === "ellipsis" ? `ellipsis-${index}` : item}
            className={styles["episodes-pagination__item"]}
          >
            {item === "ellipsis" ? (
              <span
                aria-hidden
                className={styles["episodes-pagination__ellipsis"]}
              >
                …
              </span>
            ) : item === currentPage ? (
              <span
                aria-current="page"
                className={clsx(
                  styles["episodes-pagination__page"],
                  styles["episodes-pagination__page--current"],
                )}
              >
                {item}
              </span>
            ) : (
              <Link
                className={styles["episodes-pagination__page"]}
                href={pageHref(item)}
                rel={
                  item === currentPage - 1
                    ? "prev"
                    : item === currentPage + 1
                      ? "next"
                      : undefined
                }
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
