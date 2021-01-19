import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  produtoDetalhe: Produto;

  constructor(
    private local: Location,
    private service: ProdutoService,
    private activatedRoute: ActivatedRoute
  ) { }

  voltar(){
    this.local.back();
  }

  buscarProduto(id: number){
    this.service.get(id).subscribe((res: any)=>{
      this.produtoDetalhe = res;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.buscarProduto(id);
    });
  }

}
