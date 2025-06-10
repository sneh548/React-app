// import Login from "../../auth/Login";
import { useForm } from "react-hook-form";
import { login } from "../../API/Auth";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log(errors);
  function submitForm(data) {
    login(data)
      .then((response) => {
        console.log("Login successful:", response.data);
        // You can add redirect or token storage here
      })
      .catch((error) => {
        if (error.response) {
          console.log("Login error:", error.response.data);
          // Show notification or alert with error.response.data.message if you have one
        } else {
          console.log("Network or unexpected error:", error.message);
        }
      });
  }

  return (
    <form
      className="bg-slate-100 py-1o px-8 shadow w-full"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="py-1">
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          className="w-full mt-1 py-2 p-2 rounded"
          {...register("email", { required: "Email addresss is required" })}
        />
        <p className="text-red-500 text-sm mx-1 mt-2">
          {errors.email?.message}
        </p>
      </div>
      <div className="py-2">
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          className="w-full mt-1 py-2 p-2 rounded"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        <p className="text-red-500 text-sm mx-1 mt-2">
          {errors.password?.message}
        </p>
      </div>
      <div className="mt-5 text-center">
        <input
          type="submit"
          value="Login"
          className="bg-teal-600 text-white rounded px-2 py-2 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default LoginForm;
