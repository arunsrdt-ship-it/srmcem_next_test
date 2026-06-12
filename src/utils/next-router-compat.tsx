"use client";

import React, { createContext, useContext } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export type Params<Key extends string = string> = Record<Key, string | undefined>;

export type RuntimeRouteMatch = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
  element?: React.ReactNode;
};

type RouterRuntimeContextValue = {
  matches: RuntimeRouteMatch[];
  outlet: React.ReactNode;
};

const RouterRuntimeContext = createContext<RouterRuntimeContextValue>({
  matches: [],
  outlet: null,
});

export function RouterRuntimeProvider({
  children,
  matches,
  outlet,
}: {
  children: React.ReactNode;
  matches: RuntimeRouteMatch[];
  outlet: React.ReactNode;
}) {
  return (
    <RouterRuntimeContext.Provider value={{ matches, outlet }}>
      {children}
    </RouterRuntimeContext.Provider>
  );
}

export function Outlet() {
  return <>{useContext(RouterRuntimeContext).outlet}</>;
}

export function useMatches() {
  return useContext(RouterRuntimeContext).matches;
}

export function useLocation() {
  const router = useRouter();
  const asPath = router.asPath || "/";
  const [pathnameWithSearch = "/", hash = ""] = asPath.split("#");
  const [pathname = "/", search = ""] = pathnameWithSearch.split("?");

  return {
    pathname,
    search: search ? `?${search}` : "",
    hash: hash ? `#${hash}` : "",
    state: null,
    key: "",
  };
}

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  replace?: boolean;
  reloadDocument?: boolean;
  state?: unknown;
  preventScrollReset?: boolean;
  relative?: string;
};

const isNativeAnchorHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("#");

export function Link({ to, children, ...props }: LinkProps) {
  if (isNativeAnchorHref(to)) {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={to} {...props}>
      {children}
    </NextLink>
  );
}

export function createBrowserRouter() {
  throw new Error("createBrowserRouter is not used in the Next.js runtime.");
}

export function RouterProvider() {
  throw new Error("RouterProvider is not used in the Next.js runtime.");
}
