import AppTextField from '../../ui/AppTextField';
import { Button } from '../../components/ui/button';
import { useForm } from 'react-hook-form';

const index = () => {
  const { control, handleSubmit } = useForm();
  return (
    <>
      <div className="min-h-screen w-full bg-zinc-800 flex justify-center items-center">
        <form className="xl:w-1/3 lg:w-1/3 py-4 bg-zinc-500  h-auto flex flex-col gap-6 px-3 rounded-lg items-center text-white sm:w-2/3 xs:w-full">
          <h1 className="text-4xl text-white text-center">Sign up</h1>
          <div className="flex justify-between w-full gap-2">
            <AppTextField
              name="firstName"
              control={control}
              placeholder="First Name"
              type="text"
            />
            <AppTextField
              name="lastName"
              control={control}
              placeholder="Last Name"
              type="text"
            />
          </div>
          <AppTextField
            name="email"
            control={control}
            placeholder="Email"
            type="text"
          />

          <AppTextField
            name="password"
            control={control}
            placeholder="Password"
            type="password"
          />
          <AppTextField
            name="confirmPassword"
            control={control}
            placeholder="confirm Password"
            type="password"
          />
          <Button size="lg" variant="secondary" className="w-1/4 ">
            Sign up
          </Button>
          <div className="w-full">
            <p className="justify-end text-end text-xs">
              Already have an account? <a href="/register">Login</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
