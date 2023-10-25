const requisicaoPut = async (url, corpo) => {
  try {
    const requisicao = await fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(corpo),
    });
    const resposta = await requisicao.json();

    return resposta;
  } catch (erro) {
    throw erro;
  }
};

export default requisicaoPut;
