import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  produtos: Produto[] = [];
  
  getProdutos(){
    this.service.getAll().subscribe((res: Produto[])=>{
      this.produtos = res;
    });
  }

  constructor(
    private service: ProdutoService,
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

}
