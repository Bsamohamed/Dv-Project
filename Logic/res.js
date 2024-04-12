const tableElement = document.getElementById('tbody');
const res = [
    {
        année : "L1-L2",
        Semstre: "Semestre 1",
        modules: "ASD",
        NomLogiciel: `Langage C`,
    },
    {
        année : "L1",
        Semstre: "Semestre 2",
        modules: "OPM",
        NomLogiciel: `Matlab`,
    },
    {
        année : "L2",
        Semstre: "Semestre 3",
        modules: "Archi",
        NomLogiciel: `Mips`,
    },
    {
        année : "L2",
        Semstre: "Semestre 4",
        modules: "Base de Donnée",
        NomLogiciel: `SQL`,
    },
    {
        année : "L2",
        Semstre: "Semestre 4",
        modules: "Réseaux",
        NomLogiciel: `Packet Tracer`,
    },
    {
        année : "L2",
        Semstre: "Semestre 4",
        modules: "Système",
        NomLogiciel: `Linux`,
    },
    {
        année : "L2",
        Semstre: "Semestre 4",
        modules: "DevWeb",
        NomLogiciel: `PHP`,
    },
    {
        année : "L2",
        Semstre: "Semestre 4",
        modules: "POO",
        NomLogiciel: `Java`,
    },
    {
        année : "L3",
        Semstre: "Semestre 5",
        modules: "Interaction Homme-Machine",
        NomLogiciel: `Java Swing`,
    },
    {
        année : "L3",
        Semstre: "Semestre 5",
        modules: "Génie Logiciel",
        NomLogiciel: `ArgoUML`,
    },
    {
        année : "L3",
        Semstre: "Semestre 5",
        modules: "Compilation",
        NomLogiciel: `Flex/Bison`,
    },
    {
        année : "L3",
        Semstre: "Semestre 5",
        modules: "Application Mobile",
        NomLogiciel: `Android Studio`,
    },
]

res.map((element)=>{
    tableElement.innerHTML +=`
    <tr>
        <td>${element.année}</td>
        <td>${element.Semstre}</td>
        <td>${element.modules}</td>
        <td>${element.NomLogiciel}</td>
    </tr>
    `
})

