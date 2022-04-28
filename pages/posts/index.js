import AllPosts from "../../components/posts/all-posts";


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


function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />;
}
  
  export default AllPostsPage;