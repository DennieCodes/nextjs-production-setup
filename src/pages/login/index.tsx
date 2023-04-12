import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
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

  const handleSignIn = () => {
    () => signIn().then(() => console.log("Sign in success"));
  };

  const handleSignOut = () => {
    () => signOut().then(() => console.log("Sign out success"));
  };

  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={handleSignOut}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={handleSignIn}>Sign in</button>
    </>
  );

  // return (
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
};

export default Login;
