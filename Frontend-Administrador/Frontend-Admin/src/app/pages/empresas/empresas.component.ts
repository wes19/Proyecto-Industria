import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  //Arreglos para leer en html
  categorias : any = [];
  empresas: any = [];

  //Variables de "estado"
  categoriaSel: any;
  regionInvisible : boolean = true;
  idCategoriaSel : string = '';
  idEmpresaSel : string = '';
  idProductoSel : string = '';

  //Variables NGMODEL
  nombreEmpresa : string = '';
  direccionEmpresa : string = '';
  nombreEncargado : string = '';
  telEmpresa : any;
  logotipoEmpresa : string = '';
  bannerEmpresa : string = '';
  estadoSeleccionado:any='Activo';
  activo:any='Activo';
  inactivo:any='Inactivo';
  nombreProducto : string = '';
  precioProducto : string = '';
  imagenProducto : string = '';

  empresaModal : any = [];
  productosModal : any = [];
  productoSel : any = [];

  constructor(private modalService:NgbModal, private categoriasServices : CategoriasService, private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("idAdmin");
    if(token == null){
      this.router.navigate(['/login']);
    }

    this.categoriasServices.obtenerCategorias().subscribe(
      res=>{
        this.categorias = res;
      },
      error=>{
        console.log(error);
      }
    );
  }

  selCat(id:any){
    //console.log(id);
    this.idCategoriaSel = id;
    this.regionInvisible = false;
    this.categoriasServices.obtenerEmpresas(id).subscribe(
      res=>{
        this.empresas = res.empresas;
      },
      error=>{
        console.log(error);
      }
    );
  }

  open(modal:any){
    this.modalService.open(modal);
  }

  //Llamando a ventana modal y mandando la empresa para llenar los inputs
  editarEmpresaModal(modal:any, empresa:any, idEmpresa:any){
    this.modalService.open(modal);
    this.empresaModal = empresa;
    this.idEmpresaSel = idEmpresa;
  }

  editarProductoModal(modal:any, producto:any, idProducto:any){
    this.modalService.open(modal);
    this.productoSel=producto;
    this.idProductoSel = idProducto;
  }

  //Al dar click en guardar cambios, recibir los valores y mandarlos al servicio
  guardarCambiosEmpresa(nE:any, dir:any, nEE:any, tel:any, log:any, ban:any, idModal:any){
    const jsonEmpresaNuevo = {
      idCategoria : this.idCategoriaSel,
      idEmpresa : this.idEmpresaSel,
      nombreEmpresa : nE.value,
      direccion : dir.value,
      nombreEncargado : nEE.value,
      telefono : tel.value,
      logotipo: log.value,
      banner : ban.value,
      estado : this.estadoSeleccionado,
      calificacion : 4
    }
    //console.log(jsonEmpresaNuevo);
    this.categoriasServices.actualizarEmpresa(jsonEmpresaNuevo).subscribe(
      res=>{
        console.log(res);
        this.modalService.dismissAll(idModal);
        this.selCat(this.idCategoriaSel);
      },
      error=>{
        console.log(error);
      }
    );
  }

  abrirProductos(modal:any, productos:any ,id:any){
    this.modalService.open(modal);
    this.productosModal = productos;
    this.idEmpresaSel = id;
  }

  guardarCambiosProducto(nP:any, pre:any, imgRe:any, idModal:any){
    const jsonProducto = {
      idCategoria : this.idCategoriaSel,
      idEmpresa : this.idEmpresaSel,
      idProducto : this.idProductoSel,
      nombreProducto : nP.value,
      precio : pre.value,
      imagenProducto: imgRe.value,
      estado : this.estadoSeleccionado,
    }
    //console.log(jsonProducto);
    this.categoriasServices.actualizarProducto(jsonProducto).subscribe(
      res=>{
        console.log(res);
        this.modalService.dismissAll("editarProducto");
        this.modalService.dismissAll("productos");
        this.selCat(this.idCategoriaSel);
      },
      error=>{
        console.log(error);
      }
    )
  }

  guardarEmpresa(idModal:any){
    const jsonEmpresa = {
      idCategoria : this.idCategoriaSel,
      nombreEmpresa : this.nombreEmpresa,
      direccion : this.direccionEmpresa,
      nombreEncargado : this.nombreEncargado,
      telefono : this.telEmpresa,
      estado : "Activo",
      logotipo : '../assets/images/restaurantes/'+this.logotipoEmpresa,
      banner : '../assets/images/'+this.nombreEmpresa+'/'+this.bannerEmpresa,
      calificacion : 4
    }
    console.log(jsonEmpresa);
    this.categoriasServices.agregarEmpresa(jsonEmpresa).subscribe(
      res=>{
        console.log(res);
        this.modalService.dismissAll(idModal);
        this.selCat(this.idCategoriaSel);
      },
      error=>{
        console.log(error);
      }
    );
  }

  //idCat y empresa
  agregarProducto(idModal:any){
    this.modalService.open(idModal);
  }

  guardarNuevoProducto(idModal:any){
    const jsonNuevoProducto = {
      idCategoria : this.idCategoriaSel,
      idEmpresa : this.idEmpresaSel,
      nombreProducto : this.nombreProducto,
      precio : this.precioProducto,
      imagenProducto: '../assets/images/'+this.imagenProducto,
      estado : "Activo",
    }
    this.categoriasServices.agregarProducto(jsonNuevoProducto).subscribe(
     res =>{
      console.log(res);
      this.modalService.dismissAll(idModal);
      this.selCat(this.idCategoriaSel);
    },
    error=>{
      console.log(error);
    }
    )
}

}
