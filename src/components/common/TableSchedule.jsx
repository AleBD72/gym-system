import styles from "../../style";

const TableSchedule = ({ horarios }) => {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    // Agrupar eventos por día
    const eventosPorDia = horarios.reduce((acumulador, horario) => {
        if (!acumulador[horario.dia]) {
            acumulador[horario.dia] = [];
        }
        acumulador[horario.dia].push(horario);
        return acumulador;
    }, {});

    const hayEventos = Object.values(eventosPorDia).flat().length > 0

    if(!hayEventos){
        return <p className={`${styles.paragraph} text-center`}>No hay ningún evento programado</p>;
    }

    return (
        <div className="font-poppins text-white w-full">
            <h2 className={`${styles.heading2Col}`}>Tabla de Horarios</h2>
            <table className="table-fixed w-full border border-slate-400">
                <thead className={`${styles.paragraph}`}>
                    <tr>
                        {diasSemana.map((dia) => (
                            <th key={dia} className="border border-slate-400">{dia}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="w-full">
                    <tr>
                        {diasSemana.map((dia) => {
                            const eventosDia = eventosPorDia[dia] || [];
                            return (
                                <td key={dia} className="border border-slate-400">
                                    {eventosDia.map((evento, index) => (
                                        <div key={index} className="text-center">
                                            <p>{evento.name}</p>
                                            <p className="text-fifthCol">Entrenador: {evento.entrenador}</p>
                                            <p>{`${evento.horaInicio} - ${evento.horaFin}`}</p>
                                            <br />
                                        </div>
                                    ))}
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default TableSchedule