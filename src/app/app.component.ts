import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { Tarefa } from './interfaces/tarefa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarefasComponent, TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'entregavel02';
}
