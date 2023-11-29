// '/' 페이지
import { allPosts } from "@/contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import Container from "../components/Container";
import RecentPosts from "../components/RecentPosts";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <span className="text-[60px] font-bol">SOL KIM</span>
      <div className="contact flex mt-4">
        <FaLinkedin size="24" />
        <FaGithubSquare size="24" className="ml-2" />
        <FaEnvelopeSquare size="24" className="ml-2" />
      </div>
      <div className="text-[20px] mt-4">Frontend developer</div>
      <div className="text-[16px] text-[#989898] mt-4">
        More about me
        <RiArrowRightUpLine className="inline" />
      </div>
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
