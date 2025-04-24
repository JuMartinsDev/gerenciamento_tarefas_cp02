import { Tarefa } from '../interfaces/tarefa';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  //cria a lista
  tarefas: Tarefa[] = [
    {titulo: "Tarefa de casa", descricao: "Angular", vencimento: new Date(2025, 4, 1), id: 1},
    {titulo: "Tarefa de casa", descricao: "Kotlin", vencimento: new Date(2025, 4, 1), id: 2},
    {titulo: "Tarefa de casa", descricao: "Flutter", vencimento: new Date(2025, 4, 1), id: 3}
  ]

  constructor() { }

  //percorre a lista de tarefas
  list(): Tarefa[]{
    return this.tarefas;
  }

  //remover cliente
  remove(id:number){
    const tarefa = this.tarefas.find(c => c.id == id)

    if(tarefa){
      const index = this.tarefas.indexOf(tarefa)
      this.tarefas.splice(index,1)
    }
  }

    //adiciona itens na lista
    add(tarefa: Tarefa) {
      this.tarefas.push(tarefa);
      console.log(this.tarefas);
    }



}
