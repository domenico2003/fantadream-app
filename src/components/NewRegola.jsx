const NewRegola = ({ regola }) => {
  return (
    <>
      <div className="mb-5 p-3 shadow">
        <p className="fs-4">
          📢 <span className="fw-bold">{regola?.titolo}</span>
        </p>
        <p>{regola?.messaggio}</p>
      </div>
    </>
  );
};
export default NewRegola;
