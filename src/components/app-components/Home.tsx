import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Home = () => {
  return (
    <>
      <div className="flex justify-around">
        <div>
          <Avatar className="size-80">
            <AvatarImage src="/public/avatar.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <h1>Hi I'm Tạ Minh Trang, a student from Hanoi University of Law.</h1>
      </div>
    </>
  );
};

export default Home;
