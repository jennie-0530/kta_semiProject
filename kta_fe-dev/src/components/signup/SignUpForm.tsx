import { ChangeEvent, FormEvent } from "react";

interface SignupData {
  username: string;
  email: string;
  password: string;
  checkPassword: string;
}

interface SignupFormProps {
  formData: SignupData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const SignupForm = ({
  formData,
  handleChange,
  handleSubmit,
}: SignupFormProps): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-3/4 sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          회원가입
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-3/4 sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { id: "username", label: "사용자 이름", type: "text" },
              { id: "email", label: "이메일 주소", type: "email" },
              { id: "password", label: "비밀번호", type: "password" },
              { id: "checkPassword", label: "비밀번호 확인", type: "password" },
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
                    value={formData[id as keyof SignupData]}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="w-1/3 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm text-h4 text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
