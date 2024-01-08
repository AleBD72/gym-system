

const AssistanceCounter = ({ asistencia }) => {
    const diasAsistidos = asistencia.filter((asistio) => asistio).length;

    return (
        <div>
            <h3 className="mt-10 text-lg">DÍAS ASISTIDOS: {diasAsistidos}</h3>
        </div>
    );
}

export default AssistanceCounter