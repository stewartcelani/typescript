/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as BlogPostIdImport } from './routes/blog/$postId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const BlogIndexRoute = BlogIndexImport.update({
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blog/index.lazy').then((d) => d.Route))

const AboutIndexRoute = AboutIndexImport.update({
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about/index.lazy').then((d) => d.Route))

const BlogPostIdRoute = BlogPostIdImport.update({
  path: '/blog/$postId',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blog/$postId.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/$postId': {
      preLoaderRoute: typeof BlogPostIdImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  BlogPostIdRoute,
  AboutIndexRoute,
  BlogIndexRoute,
])

/* prettier-ignore-end */
