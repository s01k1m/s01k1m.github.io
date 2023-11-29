import Container from "src/components/Container";
import GuestbookForm from "src/components/GuestbookForm";

const Guestbook = () => {
  return (
    <Container>
      <div className="title">guestbook</div>
      <div className="mt-4">안녕하세요👋 만나서 반가워요!</div>
      <GuestbookForm />
    </Container>
  );
};

export default Guestbook;
