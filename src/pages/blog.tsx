import { allPosts } from "@/contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Container from "../components/Container";
import BlogPost from "../components/BlogPost";


const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {posts.map((post) => (
          <BlogPost
            date={post.createdAt}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
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

export default Blog;