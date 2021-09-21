import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

@ViewChild('formTarefa', { static: true }) formTarefa: NgForm | undefined;
  tarefa!: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if(this.formTarefa?.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }
}

/*
No vídeo a seguir introduziremos um novo elemento, o ViewChild, que será explicado em detalhes na aula.

No Angular 12 devido a algumas alterações no processo de compilação do mesmo, foi adicionado um segundo parâmetro ao elemento @ViewChild que utilizaremos a seguir.

Portanto se você estiver acompanhando o curso com o Angular 9, no vídeo a seguir quando implementar a seguinte linha de código:

@ViewChild('formTarefa') formTarefa: NgForm;

Tenha certeza de incluir o novo atributo, ficando da seguinte forma:

@ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
*/
