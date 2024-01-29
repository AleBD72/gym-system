

const Suscription = ({user}) => {
    return (
        <div className="container mx-auto p-4">
          <div className="bg-principalCol p-8 shadow-lg shadow-fifthCol rounded-md">
            <h2 className="text-3xl font-bold mb-4 font-poppins text-fifthCol">Detalles de tu Suscripción</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="font-poppins">
                <p className="text-dimWhite my-3">Tú estado actual: <span className="text-fifthCol">{user.status}</span> </p>
                <p className="text-dimWhite mb-3">Membresía: <span className="text-fifthCol">{user.membresia}</span></p>
                <p className="text-dimWhite my-3">Método de pago: {user.metodo_pago}</p>
              </div>
              <div className="font-poppins">
                <p className="text-dimWhite my-3">Valor a pagar (por mes o año): </p>
                <p className="text-dimWhite mb-3">Tipo de membresía: </p>
                <p className="text-dimWhite my-3">Detalles de membresía: </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Suscription