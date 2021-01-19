import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  produtoForm;
  
  constructor(
    private router: Router, 
    public service: ProdutoService, 
    private activatedRoute: ActivatedRoute,
    private local: Location
  ) { }

  ngOnInit(): void {
    if(/delete/gi.test(this.router.url)){
      this.activatedRoute.params.subscribe(params => {
        let id = params['id'];
        this.deletar(id);
      })
    }else{
      this.produtoForm = new FormGroup({
        title: new FormControl(''),
        price: new FormControl(0),
        description: new FormControl(''),
      });
    }
  }

  serializeProduto(objForm: Produto){
    let invalid = [];
    for(let key in objForm){
      let value = objForm[key];
      value !== "" ? null : invalid.push(key);
    }
    (invalid.length)
      ? (alert("Formulário inválido! Revise os campos antes de continuar"))
      : (this.service.create(objForm).subscribe((res)=>{
        this.produtoForm.reset();
        alert("Produto inserido com sucesso");
      }));
  }

  deletar(id: number){
    this.service.delete(id).subscribe((res)=>{
      console.log(res);
      this.local.back();
    });
  }

  onSubmit(e: any){    
    let formValue = this.produtoForm.value;
    this.serializeProduto(formValue);  
  }

}
