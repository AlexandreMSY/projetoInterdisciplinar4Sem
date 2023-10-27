import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FiCalendar } from "react-icons/fi";
import requisicaoGet from "../../utils/apiFetch/requisicaoGet";
import { useAuthUser } from "react-auth-kit";

const ProximasConsultasSemana = (props) => {
  const auth = useAuthUser();
  const [consultas, setConsultas] = useState([]);

  const dataSemanaQueVem = () => {
    const data = new Date();
    data.setDate(data.getDate() + ((1 + 7 - data.getDay()) % 7 || 7));

    return data;
  };

  const pegarDados = async () => {
    const idUsuarioLogado = auth().usuario_id;
    const dados = await requisicaoGet(
      `http://localhost:8000/api/consulta/${idUsuarioLogado}`
    );
    const dadosConsulta = dados.consultas;

    setConsultas(
      dadosConsulta.filter((item) => {
        const timeStamp = new Date(item.data_hora)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        const data = new Date(timeStamp);
        const dataSemHoras = new Date(
          data.getFullYear(),
          data.getMonth(),
          data.getDate()
        );

        return new Date(dataSemHoras) <= dataSemanaQueVem();
      })
    );
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <>
      <div>
        <h5>Suas Próximas Consultas até a Proxima Semana</h5>
        <table className="table border table-striped table-bordered border">
          <thead>
            <tr>
              <th scope="col" className="text-white bg-primary fs-5">
                Especialidade
              </th>
              <th scope="col" className="text-white bg-primary fs-5">
                Data
              </th>
              <th scope="col" className="text-white bg-primary fs-5">
                Hora
              </th>
            </tr>
          </thead>
          <tbody>
            {consultas.map((item) => {
              const data = new Date(item.data_hora);
              const dataIsoString = data
                .toISOString()
                .slice(0, 19)
                .replace("T", " ");
              const hora = dataIsoString.slice(11);
              const dia = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;

              return (
                <tr>
                  <td>{item.especialidade}</td>
                  <td>{dia}</td>
                  <td>{hora}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProximasConsultasSemana;
