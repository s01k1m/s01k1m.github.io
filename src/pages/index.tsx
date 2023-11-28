// '/' 페이지
import { allPosts } from "@/contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Container from "../components/Container";
import RecentPosts from "../components/RecentPosts";


const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <span className="">SOL의 블로그</span>
      <RecentPosts posts={posts} />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;
