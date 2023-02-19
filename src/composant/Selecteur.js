const Selecteur = ({ setSkip, setName, setTitle, skip, setLimit, tab }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input
        style={{ width: "400px" }}
        type="text"
        onChange={(event) => {
          setName ? setName(event.target.value) : setTitle(event.target.value);
        }}
        placeholder="Recherche"
      ></input>
      {skip === 0 ? (
        <button
          className="selec"
          onClick={() => {
            setSkip(skip + 100);
          }}
        >
          Pages suivante...
        </button>
      ) : (
        <div>
          {tab.length === 0 ? (
            <button
              className="selec"
              onClick={() => {
                setSkip(skip - 100);
              }}
            >
              Pages précédente.
            </button>
          ) : (
            <div>
              <button
                className="selec"
                onClick={() => {
                  setSkip(skip - 100);
                }}
              >
                Pages précédente.
              </button>
              <span> || </span>
              <button
                className="selec"
                onClick={() => {
                  setSkip(skip + 100);
                }}
              >
                Pages suivante...
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Selecteur;
