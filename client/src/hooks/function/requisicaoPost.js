const requisicaoPost = async (url, corpo) => {
    const requisicao = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(corpo),
    });
    const resposta = await requisicao.json();
  
    return resposta;
};

export default requisicaoPost
  