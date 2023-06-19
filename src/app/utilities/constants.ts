export const sampleForms: {[x: string]: unknown} = {
  'sintomas': {
    title: "Reporte de sintomas",
    fields: [
      {
        label: "Dolor de cabeza",
        type: "checkbox",
        optional: false
      },
      {
        label: "Tos",
        type: "checkbox",
        optional: false
      },
      {
        label: "Dificultad para respirar",
        type: "checkbox",
        optional: false
      },
      {
        label: "Malestar general",
        type: "checkbox",
        optional: false
      },
      {
        label: "Dolor de garganta",
        type: "checkbox",
        optional: false
      }
    ],
    author: "usertest",
    creationDate: new Date("2023-06-19T01:36:28.205Z"),
    allowed: ["Administrador", "Empleado"],
    url: "/sintomas",
  },
  'lavado-de-manos': {
    title: "Lavado de manos",
    fields: [
      {
        label: "",
        type: "radio",
        optional: false,
        options: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ]
      },
      {
        label: "Uso EFP",
        type: "checkbox",
        optional: false
      },
      {
        label: "Cumplimiento distanciamiento",
        type: "checkbox",
        optional: false
      }
    ],
    author: "usertest",
    creationDate: new Date("2023-06-19T01:43:06.534Z"),
    allowed: ["Administrador", "Empleado"],
    url: "/lavado-de-manos",
  }
};
