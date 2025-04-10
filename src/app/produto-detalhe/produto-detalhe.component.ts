import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  imports: [CommonModule],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent {
  produto: any;
  produtos = [
  { id: 1, nome: 'Super Nintendo', preco: 4500, descricao: 'Para quem gosta de Nostalgia!', emEstoque: true },
  { id: 2, nome: 'Dreamcast', preco: 1500, descricao: 'O maior sucesso da Loja!', emEstoque: false },
  { id: 3, nome: 'Playstation 1', preco: 1800, descricao: 'Alta Tecnologia!', emEstoque: true } 
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtos.find(p => p.id === id);
  }
}