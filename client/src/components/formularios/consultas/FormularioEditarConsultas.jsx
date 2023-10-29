import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import consultaContext from "../../../context/ConsultaContext";
import requisicaoGet from "../../../utils/apiFetch/requisicaoGet";

const FormularioEditarConsulta = ({
  onChange,
  especialidade,
  data,
  hora,
  observacoes,
  dataAtual,
  senha
}) => {
  return (
    <>
      <div className="d-flex flex-column gap-3 m-2">
        <div>
          <label htmlFor="basic-url" className="form-label fw-semibold">
            Especialidade
          </label>
          <select
            name="especialidade"
            className="form-select"
            value={especialidade}
            onChange={onChange}
          >
            <option selected>Selecionar Especialidade</option>
            <option value="pediatria">Pediatria</option>
            <option value="geriatria">Geriatria</option>
            <option value="neurologista">Neurologista</option>
          </select>
        </div>
        <div className="d-flex flex-row gap-4">
          <div className="w-50">
            <label htmlFor="data" className="form-label fw-semibold">
              Data
            </label>
            <div className="input-group">
              <input
                type="date"
                name="data"
                id="data"
                className="form-control"
                value={data}
                min={dataAtual}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="w-50">
            <label htmlFor="hora" className="form-label fw-semibold">
              Hora
            </label>
            <div>
              <input
                type="time"
                name="hora"
                id="hora"
                className="form-control"
                value={hora}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="observacoes" className="form-label fw-semibold">
            Observacões
          </label>
          <textarea
            name="observacoes"
            id="observacoes"
            cols="30"
            rows="10"
            className="form-control"
            value={observacoes}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="senha" className="form-label fw-semibold">
            Senha
          </label>
          <input
            type="password"
            name="senha"
            id="senha"
            className="form-control"
            defaultValue=""
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default FormularioEditarConsulta;
