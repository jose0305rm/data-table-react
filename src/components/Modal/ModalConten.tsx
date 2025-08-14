export default function ModalConten() {
  const toolsItems = [
    { href: "#dashboard", icon: "bi-person-fill", label: "Mi Cuenta" },
    { href: "#perfil", icon: "bi-cart-dash-fill", label: "Mi carrito" },
    { href: "#configuracion", icon: "bi-envelope-fill", label: "Mis Mensajes" },
    { href: "#ayuda", icon: "bi-people", label: "Mis Reuniones" },
    { href: "#dashboard", icon: "bi-person-vcard", label: "Ver Perfil" },
    { href: "#perfil", icon: "bi-pencil-square", label: "Editar Perfil" },
    { href: "#configuracion", icon: "bi-image-fill", label: "Editar Fotos" },
    { href: "#ayuda", icon: "bi-signpost-2-fill", label: "Mis Direcciones" },
    { href: "#configuracion", icon: "bi-gear-fill", label: "Cambiar Clave" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Cerrar Sesión" },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <aside className="w-[85%] xl:w-[500px] mb-10 xl:mb-0 flex flex-col h-62 rounded-lg overflow-hidden overflow-y-auto">
        <nav>
          <ul className="grid grid-cols-2 gap-4 justify-items-center">
            {toolsItems.map((item, index) => (
              <li key={index} className="w-full">
                <a
                  href={item.href}
                  className="flex items-center gap-3 text-gray-600 text-lg p-3 hover:bg-gray-300 transition rounded-lg w-full"
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
