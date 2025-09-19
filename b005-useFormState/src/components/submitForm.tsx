
// Función del lado servidor (puede ir en el mismo archivo o en uno separado)
export async function submitForm(_: string, formData: FormData) {
  const name = formData.get("name")?.toString() ?? "";
  await new Promise((r) => setTimeout(r, 1000));
  return `Gracias, ${name}`;
}
