import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui/button';
import AppTextField from '../../ui/AppTextField';

const index = () => {
  const { control, handleSubmit } = useForm({});
  return (
    <>
      <div className="min-h-screen w-full bg-zinc-800 flex justify-center items-center">
        <form className=" w-96 py-4 bg-zinc-500  h-96 flex flex-col gap-6 px-3 rounded-lg items-center text-white">
          <h1 className="text-4xl text-white text-center">Login</h1>

          <AppTextField
            name="username"
            control={control}
            placeholder="Username"
            type="text"
          />
          <AppTextField
            name="password"
            control={control}
            placeholder="Password"
            type="password"
          />
          <Button size="lg" variant="secondary" className="w-1/4 ">
            Login
          </Button>
          <div className="w-full">
            <p className="justify-end text-end text-xs">
              Dont have a account? <a href=".register">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
