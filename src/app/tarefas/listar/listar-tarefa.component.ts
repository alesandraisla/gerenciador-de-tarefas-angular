import { TarefaService, Tarefa } from './../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  // tarefas: Tarefa[] = [];
  tarefas!:Tarefa[];

    constructor(private tarefaService: TarefaService) { }

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
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    const confirmed = confirm('Deseja remover a tarefa "' + tarefa.nome + '"?');
    if (tarefa.id && confirmed) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }


}

