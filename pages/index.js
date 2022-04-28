import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs-1',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10'
  }
];


function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

//1) hero => present OuerSelves
// 2)featured posts
