import { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
interface LoginFormProps {
  formData: LoginData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

interface LoginData {
  email: string;
  password: string;
}

const LoginForm = ({
  formData,
  handleChange,
  handleSubmit,
}: LoginFormProps): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-[80vh] py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-3/4 sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          로그인
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-3/4 sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { id: "email", label: "이메일 주소", type: "email" },
              { id: "password", label: "비밀번호", type: "password" },
            ].map(({ id, label, type }) => (
              <div key={id} className="flex flex-col items-center">
                <label
                  htmlFor={id}
                  className="block text-sm text-h4 text-gray-700 text-left w-full"
                >
                  {label}
                </label>
                <div className="mt-1 w-full flex justify-center">
                  <input
                    id={id}
                    name={id}
                    type={type}
                    required
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="w-1/3 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm text-h4 text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                로그인
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              회원이 아니신가요?
              <Link to="/signup" className="text-blue-600 hover:underline">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
