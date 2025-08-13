export function currentDay() {
  const fecha = new Date();

  const opciones: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  // Convierte la fecha al formato en español y en minúsculas
  return fecha.toLocaleDateString('es-ES', opciones);
}
