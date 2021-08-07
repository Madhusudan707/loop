const host = window.location.hostname;
    const localDomain = "http://localhost:";
    const port = "3003";
    const local = `${localDomain}${port}`;
    const remote = "https://loop-backend.madhusudandas.repl.co";
  
export    const baseURL = host === "localhost" ? local : remote;