import { TarefaService } from './../../services/tarefa.service';
import { Tarefa } from './../../interfaces/tarefa';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Form, Validators } from '@angular/forms';


@Component({
  selector: 'app-tarefas',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

  tarefasForm: FormGroup = new FormGroup ({});
  tarefas: Tarefa[] = [];

  constructor(private itensTarefa: TarefaService, private formBuilder: FormBuilder){
    this.tarefasForm = formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      vencimento: [''],
    })
  }

  list(): void{
    this.tarefas = this.itensTarefa.list()
  }

  //métoo executado ao inicializar a página
  ngOnInit(): void{
    this.list()
  }

  //exercício 03

  addTarefa(): void {
    if (this.tarefasForm.valid) {
      const novaTarefa: Tarefa = {
        id: Date.now(), //gera um ID
        ...this.tarefasForm.value
      };

      this.itensTarefa.add(novaTarefa);  //adiciona no service
      this.list();                       //atualiza a lista
      this.tarefasForm.reset();          //limpa o formulário
    }
  }

  removeTarefa(id: number): void {
    this.itensTarefa.remove(id);
    this.list(); //atualiza a lista após remover
  }



}
