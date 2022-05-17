import Swal from "sweetalert2";

export const error = () => {
  Swal.fire({
    icon: "error",
    title: "Falta nombre de cliente y/o mesa",
    confirmButtonText: "Aceptar",
    background: "rgba(54, 57, 60, 0.8)",
    confirmButtonColor: "#595959",
    color: "#fff",
    width: "45rem",
    customClass: {
      confirmButton: "color",
    },
  });
};
export const errorProducts = () => {
  Swal.fire({
    icon: "error",
    title: "No hay productos agregados",
    confirmButtonText: "Aceptar",
    background: "rgba(54, 57, 60, 0.8)",
    confirmButtonColor: "#595959",
    color: "#fff",
    width: "45rem",
  });
};

export const correct = () => {
  Swal.fire({
    icon: "success",
    title: "La orden a sido enviada a la cocina correctamente",
    confirmButtonText: "Aceptar",
    background: "rgba(54, 57, 60, 0.8)",
    confirmButtonColor: "#595959",
    color: "#fff",
    width: "45rem",
  });
};

/* Cocina */
export const readyAndSentToDelivery = () => {
  Swal.fire({
    icon: "success",
    title: "Pedido listo y enviado a garzon/a correctamente",
    confirmButtonText: "Aceptar",
    background: "rgba(54, 57, 60, 0.8)",
    confirmButtonColor: "#595959",
    color: "#fff",
    width: "45rem",
  });
};

export const deliveredToTable = () => {
  Swal.fire({
    icon: "success",
    title: "El pedido fue entregado a la mesa correctamente",
    confirmButtonText: "Aceptar",
    background: "rgba(54, 57, 60, 0.8)",
    confirmButtonColor: "#595959",
    color: "#fff",
    width: "45rem",
  });
};
