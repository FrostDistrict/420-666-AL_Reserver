import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ReactSwal = withReactContent(Swal);

export const swalErr = Swal.mixin({
    icon: 'error',
    title: 'Oops...',
});

export const Toast = Swal.mixin({
    toast: true,
    icon: 'success',
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
});

export const toastErr = Swal.mixin({
    toast: true,
    icon: 'error',
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
});