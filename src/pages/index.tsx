// '/' 페이지
import Container from "../components/Container";
import RecentPosts from "../components/RecentPosts";

const Home = () => {
  return (
    <Container>
      <span className="">SOL의 블로그</span>
      <RecentPosts />
    </Container>
  );
};

export default Home;
