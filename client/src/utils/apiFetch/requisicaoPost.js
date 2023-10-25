const requisicaoPost = async (url, corpo) => {
  try {
    const requisicao = await fetch(url, {
      method: "post",
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

export default requisicaoPost;
