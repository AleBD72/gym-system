import { sendEmailVerification } from "firebase/auth";

function enviarEnlaceVerficacion(user) {
  const actionCodeSettings = {
    url: "https://gym-system-fitnesshub.vercel.app/login",
    handleCodeInApp: true,
  };
  sendEmailVerification(user, actionCodeSettings).catch((error) => {
    console.log("error", error);
  });
}

export default enviarEnlaceVerficacion;
