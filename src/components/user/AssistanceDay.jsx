

const AssistanceDay = ({ dia, asistio, onChange }) => {
  return (
    <div className={`day ${asistio ? 'attended' : ''}`} onClick={() => onChange(dia)}>
      {dia}
    </div>
  );
}

export default AssistanceDay