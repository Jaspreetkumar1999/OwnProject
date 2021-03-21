import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }
  apiResponseAlert(Title: any, icon: any) {
    Swal.fire({
      toast: true,
      position: 'top',
      icon: icon,
      title: Title,
      showConfirmButton: false,
      timer: 3000
    })
  }
  inputField(title: string, confirmButtonText: string) {
    Swal.fire({


      // title: 'Multiple inputs',
      // html:
      //   '<input id="swal-input1" class="swal2-input">' +
      //   '<input id="swal-input2" class="swal2-input">',
      // focusConfirm: false,
      // preConfirm: () => {
      //   return [
      //     document.getElementById('swal-input1').value,
      //     document.getElementById('swal-input2').value
      //   ]
      // }


      title: title,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      showLoaderOnConfirm: true,                  
      preConfirm: (login) => {
        return 
      }
    })
  }
}
