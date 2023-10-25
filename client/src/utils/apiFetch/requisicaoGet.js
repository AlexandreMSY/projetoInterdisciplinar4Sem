const requisicaoGet = async (url) => {
  try {
    const requisicao = await fetch(url);
    const resposta = await requisicao.json();

    return resposta;
  } catch (erro) {
    throw erro;
  }
};

export default requisicaoGet