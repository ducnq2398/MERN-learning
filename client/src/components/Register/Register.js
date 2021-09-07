import React, { useRef } from "react";
import desIcon from "../../assets/img/streamline-icon-designer@400x400.png";
import { useForm } from "react-hook-form";
import { authenticationService } from "../../services";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  async function handleRegister(data) {
    const body = {
      username: data.username,
      password: data.password,
    };
    await authenticationService
      .register(body)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container-fluid bg">
      <div className="logo">
        <img className="_desIcon" src={desIcon} alt="" />
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="login">
          <h3>MERN LEARNING</h3>
          <div className="login-field">
            <i className="fas fa-user login-icon"></i>
            <input
              name="username"
              type="text"
              className="login-input"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
                minLength: { value: 4, message: "Min 4 characters" },
                maxLength: { value: 100, message: "Max 100 character" },
              })}
            />
          </div>
          {errors.username && (
            <p style={{ color: "white" }}>{errors.username.message}</p>
          )}

          <div className="login-field">
            <i className="fas fa-lock login-icon"></i>
            <input
              name="password"
              type="password"
              className="login-input"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password has min 6 characters",
                },
              })}
            />
          </div>
          {errors.password && (
            <p style={{ color: "white" }}>{errors.password.message}</p>
          )}

          <div className="login-field">
            <i className="fas fa-lock login-icon"></i>
            <input
              name="confirm_password"
              type="password"
              className="login-input"
              placeholder="Confirm password"
              required
              {...register("confirm_password", {
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
          </div>
          {errors.confirm_password && (
            <p style={{ color: "white" }}>{errors.confirm_password.message}</p>
          )}

          <button className="btn-login" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
