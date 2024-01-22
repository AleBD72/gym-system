import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config_firebase";

async function iniciar_sesion_normal(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (!user.emailVerified) {
      console.log("Correo electrónico no confirmado.");
      return false;
    }

    localStorage.setItem("token", user.accessToken);
    console.log("Inicio de sesión exitoso:", user);
    return true;
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    return false;
  }
}

export { iniciar_sesion_normal };
