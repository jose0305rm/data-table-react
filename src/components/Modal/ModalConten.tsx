export default function ModalConten() {
  const toolsItems = [
    { href: "#dashboard", icon: "bi-person-fill", label: "Ventas" },
    { href: "#perfil", icon: "bi-cart-dash-fill", label: "Negocios" },
    { href: "#configuracion", icon: "bi-envelope-fill", label: "Compras" },
    { href: "#ayuda", icon: "bi-people", label: "Clientes" },
    { href: "#dashboard", icon: "bi-person-vcard", label: "Proovedores" },
    { href: "#perfil", icon: "bi-pencil-square", label: "Equipo" },
    { href: "#configuracion", icon: "bi-image-fill", label: "Suscriptores" },
    { href: "#ayuda", icon: "bi-signpost-2-fill", label: "Productos" },
    { href: "#configuracion", icon: "bi-gear-fill", label: "Noticias" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Eventos" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Consultas" },
  ];

  return (
    <>
      <aside className="w-[85%] xl:w-80 mb-10 xl:mb-0 flex flex-col h-96 rounded-lg overflow-hidden xl:rounded-none overflow-y-auto">
        <nav>
          <p className="flex justify-center text-2xl font-bold text-white bg-[#a1c44f] p-3 sticky top-0 z-10"></p>
          <ul className="grid grid-cols-2 xl:grid-cols-1">
            {toolsItems.map((item, index) => (
              <li key={index} className="bg-[#b8e05a]">
                <a
                  href={item.href}
                  className="flex items-center gap-3 text-white text-lg p-3 hover:bg-[#a4cc50] transition"
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
