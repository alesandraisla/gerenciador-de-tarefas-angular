import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() tarefaConluida!: boolean;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    if(this.tarefaConluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
