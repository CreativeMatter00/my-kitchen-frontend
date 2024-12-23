import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left Content */}
      <div className="flex-1 flex justify-center items-center bg-white relative z-10">
        <LoginForm />

      </div>
      {/* Right Content */}
      <div
        className="hidden xl:flex flex-1 justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/login/login-page.png')" }}
      >
        <div className="absolute bg-black top-0 left-0 right-0 bottom-0 w-full h-full opacity-70 z-10"></div>
        <div className="flex flex-col gap-8 z-[100]">
          <p className="text-center text-7xl leading-10 text-primary font-bold text-opacity-80">
            MY Kitchen
          </p>
          <p className="text-lg text-white text-center">MY KITCHEN is available in a wide <br /> selection of designs, colors <br /> and finishes in both customized <br /> and modular systems.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
