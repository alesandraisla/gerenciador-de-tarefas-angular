import { TarefaService, Tarefa } from './../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private TarefaService: TarefaService) { }

  //é chamado pelo angular, logo após a criação do construtor
  ngOnInit() {
    return this.tarefas = this.listarTodos();
    /* Dessa forma desaparece a frase do html
    this.tarefas = this.listarTodos();
    this.tarefas = [
      new Tarefa(1, "Tarefa 1", false),
      new Tarefa(2, "Tarefa 2", true)
    ];
    */
  }

  listarTodos(): Tarefa[] {
    return this.TarefaService.listarTodos();
  }



}
