import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FiCalendar } from "react-icons/fi";
import requisicaoGet from "../../utils/apiFetch/requisicaoGet";
import { useAuthUser } from "react-auth-kit";
import configData from "../../../configData.json"

const ProximasConsultasSemana = (props) => {
  const auth = useAuthUser();
  const [consultas, setConsultas] = useState([]);

  const dataSemanaQueVem = () => {
    const data = new Date();
    const nextweek = new Date(data.getFullYear(), data.getMonth(), data.getDate() + 7);

    return nextweek;
  };

  const pegarDados = async () => {
    const idUsuarioLogado = auth().usuario_id;
    const dados = await requisicaoGet(
      `${configData.API_URL}api/consulta/${idUsuarioLogado}`
    );
    const dadosConsulta = dados.consultas;

    console.log(dadosConsulta);

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
              const dia = data.toISOString().slice(0, 10);

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
