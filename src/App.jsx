import "./App.css";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationUser } from "./utils/validations";
import { useCountries } from "./helpers/useCountries";
import { useCities } from "./helpers/useCities";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HiOutlineUserCircle,
  HiOutlinePhone,
  HiOutlineIdentification,
} from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { normalizePhoneNumber, normalizeCpfNumber } from "./utils/masks"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationUser),
  });

  const phoneValue = watch('phone');
  const cpfValue = watch('cpf');

  useEffect(() => {
    setValue('phone', normalizePhoneNumber(phoneValue))
  }, [phoneValue])

  useEffect(() => {
    setValue('cpf', normalizeCpfNumber(cpfValue))
  }, [cpfValue])

  const { countries } = useCountries();
  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: country.name_ptbr,
  }));
  const [selectedCountries, setSelectedCountries] = useState([]);

  const { citiesByCountry } = useCities(selectedCountries);
  const cityOptions = citiesByCountry.map((city) => ({
    value: city.code,
    label: city.name_ptbr,
  }));
  
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCountriesChange = (e) => {
    setSelectedCountries(e);
  };

  const addUser = (data) => {
    data.countries = selectedCountries;
    data.cities = selectedCities;
    console.log(JSON.stringify(data));
    notify();
  };

  const notify = () => {
    toast.success("Dados enviados com sucesso!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(addUser)}>
        <div className="forms">
          <div className="personal-infos">
            <h3 id="personal">Dados pessoais</h3>
            <div className="input-field">
              <div className="input-icon">
                <span className="icon">
                  <HiOutlineUserCircle />
                </span>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  className="form-input"
                  placeholder="Nome"
                />
              </div>
              <span className="error-message">{errors.name?.message}</span>
            </div>
            <div className="input-field">
              <div className="input-icon">
                <span className="icon">
                  <HiOutlineMail />
                </span>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  className="form-input"
                  placeholder="E-mail"
                />
              </div>
              <span className="error-message">{errors.email?.message}</span>
            </div>
            <div className="input-field">
              <div className="input-icon">
                <span className="icon">
                  <HiOutlinePhone />
                </span>
                <input
                  type="phone"
                  name="phone"
                  {...register("phone")}
                  className="form-input"
                  placeholder="Telefone"
                />
              </div>
              <span className="error-message">{errors.phone?.message}</span>
            </div>
            <div className="input-field">
              <div className="input-icon">
                <span className="icon">
                  <HiOutlineIdentification />
                </span>
                <input
                  type="text"
                  name="cpf"
                  {...register("cpf")}
                  className="form-input"
                  placeholder="CPF"
                />
              </div>
              <span className="error-message">{errors.cpf?.message}</span>
            </div>
          </div>
          <div className="interests">
            <h3>Destinos de interesse</h3>
            <div className="interests-wrapper">
              <div className="select-wrapper-container">
                <Select
                  name="countries"
                  className="countries-select"
                  isMulti
                  placeholder="Selecione os países..."
                  options={countryOptions}
                  isClearable={true}
                  isSearchable={true}
                  onChange={handleCountriesChange}
                  value={selectedCountries}
                />
                <input
                  className="input-required"
                  value={selectedCountries}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  required
                />
              </div>
              <span className="error-message">{errors.coutries?.message}</span>
              {selectedCountries.length > 0 && cityOptions.length > 0 ? (
                <div className="select-wrapper-container">
                  <Select
                    className="cities-select"
                    name="cities"
                    isMulti
                    placeholder="Selecione as cidades..."
                    options={cityOptions}
                    isClearable={true}
                    isSearchable={true}
                    onChange={(item) => setSelectedCities(item)}
                    value={selectedCities}
                  />
                  <input
                    className="input-required"
                    value={selectedCities}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    required
                  />
                </div>
              ) : (
                ""
              )}
              <button type="submit">Enviar</button>
            </div>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
