import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

// fooddetails 
  
servicesDetails = [
  {
    id:1,
    foodName:"Traspaso de Vehiculos y Motos ",
    foodDetails:"Depende del valor fiscal del vehiculo",
    foodPrice:50000,
    foodImg:"https://res.cloudinary.com/doz9yw2iy/image/upload/v1658508967/servicios%20legales/transpasoVehiculos_qggbjg.jpg"
  },
  {
    id:2,
    foodName:"Matrimonios ",
    foodDetails:"Se realizan con cita previa y se requiere de 2 testigos",
    foodPrice:369,
    foodImg:"https://res.cloudinary.com/doz9yw2iy/image/upload/v1658508967/servicios%20legales/matrimonios_gmpuxe.jpg"
  },
  {
    id:3,
    foodName:"Traspaso de Propiedades ",
    serviceDetails:"Depende del valor fiscal de la propiedad",
    foodPrice:149,
    foodImg:"https://res.cloudinary.com/doz9yw2iy/image/upload/v1658508967/servicios%20legales/traspasopropiedad_b2a6ym.webp"
  }

]






}
