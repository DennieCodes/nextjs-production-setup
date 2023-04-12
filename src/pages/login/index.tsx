import type {
  // GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../api/auth/[...nextauth]';

const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();

  if (session && session.user) {
    console.log("Session data: ", session.user);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => void signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>

      {session && session.user && (
        <div>
          Signed in as {session.user.email} <br />
          <button onClick={() => void signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  // export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const session = await getServerSession(context.req, context.res, authOptions);

  // if (session) {
  // 	void signOut();
  // 	console.log('LOG OUT');

  // 	return {};
  // 	// return { redirect: { destination: '/' } };
  // }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}

export default Login;

// import { useSession, signIn, signOut } from 'next-auth/react';

// import { getServerSession } from 'next-auth';

// const Login = () => {
// 	const { data: session } = useSession();
// const [formData, setFormData] = useState({
// 	name: '',
// 	password: '',
// });

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 	e.preventDefault();
// };

// // Control input components
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 	const { name, value } = e.target;
// 	setFormData({ ...formData, [name]: value });
// };

// if (session && session.user) {
// 	console.log('Session data: ', session);
// 	return (
// 		<>
// 			Signed in as {session.user.email} <br />
// 			<button onClick={() => void signOut()}>Sign out</button>
// 		</>
// 	);
// }

// return (
// 	<>
// 		Not signed in <br />
// 		<button onClick={() => void signIn()}>Sign in</button>
// 	</>
// );

// return <div className="flex justify-center items-center h-screen"></div>;
// 	<div className="flex justify-center items-center h-screen">
// 		<form
// 			onSubmit={handleSubmit}
// 			className="bg-white p-10 rounded-lg shadow-md"
// 		>
// 			<h2 className="text-xl font-medium mb-5">Login</h2>
// 			<div className="mb-5">
// 				<label htmlFor="name" className="block font-medium mb-2">
// 					Name
// 				</label>
// 				<input
// 					type="text"
// 					name="name"
// 					id="name"
// 					value={formData.name}
// 					onChange={handleChange}
// 					className="w-full border border-gray-400 rounded-md p-2"
// 				/>
// 			</div>
// 			<div className="mb-5">
// 				<label htmlFor="password" className="block font-medium mb-2">
// 					Password
// 				</label>
// 				<input
// 					type="password"
// 					name="password"
// 					id="password"
// 					value={formData.password}
// 					onChange={handleChange}
// 					className="w-full border border-gray-400 rounded-md p-2"
// 				/>
// 			</div>
// 			<button
// 				type="submit"
// 				className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
// 			>
// 				Login
// 			</button>
// 		</form>
// 	</div>
// );
// };
