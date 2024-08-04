import React, { KeyboardEvent, useState } from "react";

const UserNameInput: React.FC = () => {
  // Estado para armazenar o nome digitado
  const [userName, setUserName] = useState("");
  // Estado para armazenar o histórico de nomes
  const [namesList, setNamesList] = useState<string[]>([]);
  // Estado para controlar a visibilidade do conteúdo
  const [showContent, setShowContent] = useState(false);

  // Função para lidar com mudanças no campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Atualiza o estado com o novo valor do campo de entrada
    setUserName(event.target.value);
  };

  // Função para lidar com o clique no botão
  const handleClick = () => {
    if (userName.trim()) {
      // Adiciona o nome atual ao histórico de nomes
      setNamesList([...namesList, userName]);
      setShowContent(true);
      // Limpa o campo de entrada
      setUserName("");
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      // Impede a ação padrão (por exemplo, enviar um formulário)
      event.preventDefault();
      // Adiciona o nome à lista
      handleClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Digite seu nome"
      />
      <button onClick={handleClick} onKeyDown={handleClick}>Mostrar Nome</button>
      {showContent && namesList.map((name, index) => (
        <p key={index}>O nome de usuário digitado é: {name}</p>
      ))}
    </div>
  );
};

export default UserNameInput;
