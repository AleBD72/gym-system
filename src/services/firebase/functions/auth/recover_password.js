import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config_firebase";

function enviarCorreoRecuperacionContrasena(email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Correo de recuperación de contraseña enviado exitosamente.");
      // Puedes hacer más acciones después de enviar el correo si es necesario.
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(
        `Error al enviar el correo de recuperación: ${errorCode} - ${errorMessage}`
      );
      // Puedes manejar el error de manera más específica o mostrar un mensaje al usuario.
    });
}

// No necesitas exportar sendPasswordResetEmail si no lo estás utilizando en otros archivos.
export { enviarCorreoRecuperacionContrasena };
