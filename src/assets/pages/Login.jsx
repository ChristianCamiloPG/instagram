function Login() {
  return (
    <div className="p-4 mt-4">
      <h1 className="text-xl font-bold">Iniciar Sesión</h1>
      <form className="flex flex-col gap-2 mt-4">
        <input type="email" placeholder="Correo" className="border p-2" />
        <input type="password" placeholder="Contraseña" className="border p-2" />
        <button className="bg-blue-500 text-white p-2 rounded">Entrar</button>
      </form>
    </div>
  )
}

export default Login