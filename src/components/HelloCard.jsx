import React, { useState } from "react";

const HelloCard = ({ text, onNext }) => {
  const [name, setName] = useState("");
  const [name1, setValue] = useState("");
  const [showData, setShowData] = useState(false);
  const handleSubmit = () => {
    setShowData(!showData);
  };

  return (
    <div className="hello-card">
      <h2 className="hello-card__title">{text}</h2>
      <button className="btn-outline" onClick={onNext}>
        Сменить текст
      </button>
      <br></br>
      <br></br>
      {showData && (
        <div className="data-display">
          <h3>Введенные данные:</h3>
          <p>
            <strong>Логин:</strong> {name}
          </p>
          <p>
            <strong>Пароль:</strong> {name1}
          </p>
        </div>
      )}
      <div className="demo-row">
        <label className="demo-label" htmlFor="name">
          Логин:
        </label>
        <input
          id="name"
          type="password"
          className="input"
          placeholder="введи текст"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br></br>
      <div className="demo-row">
        <label className="demo-label" htmlFor="name">
          Пароль:
        </label>
        <input
          id="name"
          type="password"
          className="input"
          placeholder="введи текст"
          value={name1}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button className="btn-outline1" onClick={handleSubmit}>
        Отправить
      </button>
    </div>
  );
};

export default HelloCard;
