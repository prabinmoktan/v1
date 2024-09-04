import { Control, Controller } from 'react-hook-form';
import { Input } from '../components/ui/input';

interface InputTypesProps {
  name: string;
  control: Control<any>;
  placeholder: string;
  type: string;
  errorMessage?: string;
}

const AppTextField: React.FC<InputTypesProps> = ({
  name,
  control,
  placeholder,
  type = 'text',
  errorMessage,
  ...rest
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            type={type}
            className={`bg-zinc-400 h-10 ${errorMessage ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
          />
        )}
      />
    </>
  );
};

export default AppTextField;
