import { sendEmailVerification, } from "firebase/auth";

function enviarEnlaceVerficacion(user) {
  const actionCodeSettings = {
    url: "http://localhost:5173/login",
    handleCodeInApp: true,
  };
  sendEmailVerification(user, actionCodeSettings).catch((error) => {
    console.log("error", error);
  });
}

export default enviarEnlaceVerficacion;
