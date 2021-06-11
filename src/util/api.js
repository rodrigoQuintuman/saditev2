export default {
    urlGetAllPacientes : "https://springgcp-316318.rj.r.appspot.com/pacientes",
    urlAddPaciente : "https://springgcp-316318.rj.r.appspot.com/pacientes",
    urlDeletePaciente : "https://springgcp-316318.rj.r.appspot.com/pacientes/",
    urlUpdadtePaciente : "https://springgcp-316318.rj.r.appspot.com/pacientes/",
    urlGetPaciente : "https://springgcp-316318.rj.r.appspot.com/pacientes/",
    urlGetCuentasPersona : function (id){
        return "http://localhost:5000/api/personas/"+id+"/cuentas";
    },
    urlAddCuenta : function (id){
        return "http://localhost:5000/api/personas/"+id+"/cuentas";
    },
    urlDeleteCuenta : "http://localhost:5000/api/cuentas/",
    urlUpdadteCuenta : "http://localhost:5000/api/cuentas/",
}