import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }
  apiResponseAlert(Title: any,icon:any) {
    Swal.fire({
      toast: true,
      position: 'top',
      icon: icon,
      title: Title,
      showConfirmButton: false,
      timer: 3000
    })
  }
}
