export default function TableOptions() {
   const menuItems = [
    { href: "#dashboard", icon: "bi-person-fill", label: "Mi Cuenta" },
    { href: "#perfil", icon: "bi-cart-dash-fill", label: "Mi Carrito" },
    { href: "#configuracion", icon: "bi-envelope-fill", label: "Mis Mensajes" },
    { href: "#ayuda", icon: "bi-people", label: "Mis Reuniones" },
    { href: "#dashboard", icon: "bi-person-vcard", label: "Ver Perfil" },
    { href: "#perfil", icon: "bi-pencil-square", label: "Editar Perfil" },
    { href: "#configuracion", icon: "bi-image-fill", label: "Editar Fotos" },
    { href: "#ayuda", icon: "bi-signpost-2-fill", label: "Mis Direcciones" },
    { href: "#configuracion", icon: "bi-gear-fill", label: "Cambiar clave" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Cerrar Sesión" },
  ];

  return (
    <aside className="w-80 flex flex-col h-full bg-[#b8e05a]">
      <nav>
        <p className="flex justify-center text-2xl font-">Mis herramientas</p>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="bg-[#b8e05a]">
              <a
                href={item.href}
                className="flex items-center gap-3 text-white text-xl p-3 hover:bg-[#a4cc50] transition"
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
