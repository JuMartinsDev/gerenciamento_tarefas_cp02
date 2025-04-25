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

  mensagem: string = '';
  tipoMensagem: 'sucesso' | 'erro' | '' = '';


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
        id: Date.now(),
        ...this.tarefasForm.value
      };

      this.itensTarefa.add(novaTarefa);
      this.list();
      this.tarefasForm.reset();

      this.mensagem = 'Tarefa adicionada com sucesso!';
      this.tipoMensagem = 'sucesso';
      this.limparMensagem();
    } else {
      this.mensagem = 'Preencha todos os campos obrigatórios.';
      this.tipoMensagem = 'erro';
      this.limparMensagem();
    }
  }

  removeTarefa(id: number): void {
    this.itensTarefa.remove(id);
    this.list();

    this.mensagem = 'Tarefa removida com sucesso!';
    this.tipoMensagem = 'sucesso';
    this.limparMensagem();
  }

  limparMensagem(): void {
    setTimeout(() => {
      this.mensagem = '';
      this.tipoMensagem = '';
    }, 3000); // esconde após 3 segundos
  }

}
