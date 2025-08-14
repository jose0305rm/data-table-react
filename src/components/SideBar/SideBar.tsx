import "bootstrap-icons/font/bootstrap-icons.css";

export default function SideBar() {
  const menuItems = [
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
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Tareas" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Campañas" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Descuentos" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Marcas" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Sliders" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Avisos" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Atributos" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Comentarios" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Configuraciones" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Cotenidos" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Imagenes" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Categorias" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Reportes" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Configurtacion" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Usuarios" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Clientes" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Palabras" },
    { href: "#ayuda", icon: "bi-door-open-fill", label: "Estados" },

  ];

  return (
    <aside className="w-[85%] xl:w-80 mb-10 xl:mb-0 flex flex-col h-96 xl:h-screen bg-[#b8e05a] rounded-lg overflow-hidden xl:rounded-none overflow-y-auto">
      <nav>

        <ul className="grid grid-cols-2 xl:grid-cols-1">
          {menuItems.map((item, index) => (
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
  );
}
