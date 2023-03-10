import React from "react";
import Head from "next/head";
import style from "../../../styles/pages/registerstyle.module.scss";
import { reactStrictMode } from "@/next.config";
import Link from "next/link";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Recruiter() {
  const router = useRouter();
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone_number, setPhone_number] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let checkIsLogin = getCookie("token") && getCookie("profile");

    if (checkIsLogin) {
      router.replace("/jobs/list");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const connect = await axios.post("/api/registerGeneral", {
        fullname,
        email,
        phone_number,
        password,
      });

      setIsLoading(false);
      setError(null);
      router.replace("/auth/login");
    } catch (error) {
      setError(
        error?.response?.data?.messages ?? "Something wrong in our server"
      );
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Register | Hire Job app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`body ${style.main}`}>
        <div className="container-fluid">
          <div className="row">
            {/* SIDE-LEFT */}
            <div className={`col-6 ${style.colLeft}`}>
              <div className={style.overlay} />

              <div className={style.content}>
                <h1>
                  Temukan developer berbakat & terbaik
                  <br />
                  di berbagai bidang keahlian
                </h1>
              </div>
            </div>
            {/* SIDE-RIGHT */}
            <div className={`col-6 ${style.colRight}`}>
              <div className="mt-4 mb-0">
                <div className={style.title}>
                  <h2>Halo, Pewpeople</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                  {/* ALERT ERROR HANDLING */}
                  <div className="alert-error">
                    {error ? (
                      <div
                        class="alert alert-danger text-center"
                        role="alert"
                        style={{
                          fontSize: "14px",
                          border: "0",
                          borderRadius: "15px",
                          marginBottom: "-15px",
                        }}
                      >
                        {error}
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* FORM LOGIN */}
                <div className={style.form}>
                  <form>
                    <div className="mb-3">
                      <label for="name" class="form-label">
                        Nama
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Masukan nama panjang"
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Masukan alamat email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="phone" class="form-label">
                        No handphone
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                        placeholder="Masukan no handphone"
                        onChange={(e) => setPhone_number(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label for="exampleInputPassword1" className="form-label">
                        Kata Sandi
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Masukan kata sandi"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label for="exampleInputPassword1" className="form-label">
                        Konfirmasi kata sandi
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Masukan konfirmasi kata sandi"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {/* BUTTON LOGIN */}
                    <div className={`d-grid gap-2 mb-4 ${style.btnLogin}`}>
                      <button
                        className="btn btn-warning"
                        type="button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Masuk"}
                      </button>
                    </div>
                    {/* REGISTER */}
                    <div className={`mt-3 register ${style.register}`}>
                      <p className="text-center">
                        Anda sudah punya akun?{" "}
                        <Link
                          href={"/auth/login/recruiter"}
                          className="text-warning"
                        >
                          Masuk disini
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
