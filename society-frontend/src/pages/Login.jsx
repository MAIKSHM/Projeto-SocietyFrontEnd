import { useState } from "react";
import { useNavigate } from "react-router-dom"; // import do hook
import axios from "axios";
import '../styles/Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate(); // inicialização do hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://localhost:7258/api/usuario/login", {
        email,
        senha,
      });

      // Se deu certo, redireciona para o dashboard
      setMensagem("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setMensagem("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="login-container">
      {/* marcações do campo */}
      <div className="mid-line"></div>
      <div className="center-circle"></div>
      <div className="penalty-box left"></div>
      <div className="penalty-box right"></div>
      <div className="goal-box left"></div>
      <div className="goal-box right"></div>

      {/* formulário central */}
      <form className="login-form" onSubmit={handleLogin}>
        <h2>LOGIN</h2>
        <input
          type="text"
          placeholder="👤 Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="🔒 Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar ⚽</button>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </form>
    </div>
  );
}
