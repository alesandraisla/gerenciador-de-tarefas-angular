import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true })
  formTarefa!: NgForm;

  tarefa!: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    const tarefa = this.tarefaService.buscarPorId(id);

    if(tarefa) {
      this.tarefa = tarefa;
    }
  }

  atualizar(): void {
    if(this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas'])
    }
  }

}

