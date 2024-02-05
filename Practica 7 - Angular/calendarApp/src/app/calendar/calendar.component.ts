import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  tasks: Task[] = [
    new Task(
      'T1',
      'Practica Angular 7',
      'Realizar ejercicios de storeApp y calendarApp',
      new Date('2024-02-01'),
      new Date('2024-02-06'),
      'DWEC',
      'Veronika',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T2',
      'Proyecto fin de grado',
      'Planificación para el próximo proyecto EAcademy',
      new Date('2024-02-03'),
      new Date('2024-02-03'),
      'TFG',
      'Veronika e Ismail',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T3',
      'Ingles CV ',
      'Grabar video cd presentacion',
      new Date('2024-02-05'),
      new Date('2024-02-05'),
      'Ingles',
      'Veronika',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T4',
      'Investigación de competencia',
      'Recopilar datos y analizar tendencias',
      new Date('2024-02-08'),
      new Date('2024-02-15'),
      'TFG / Empresa',
      'Veronika e Ismail',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T5',
      'Entrenamiento',
      'Gimnacio, dia de piernas',
      new Date('2024-02-10'),
      new Date('2024-02-10'),
      'GYM',
      'Veronika',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T6',
      'Proyecto personal',
      'Desarrollar una aplicación web pequeña en java springboost para practicar',
      new Date('2024-02-12'),
      new Date('2024-02-28'),
      'JAVA',
      'Veronika',
      new Date(),
      new Date(),
      '',
      ''
    ),
  ];

  task: Task = {
    id: '',
    name: '',
    description: '',
    init_date: new Date(),
    end_date: new Date(),
    subject: '',
    asigned_person: '',
    estimated_duration: new Date(),
    real_time: new Date(),
    formatted_init_date: '',
    formatted_end_date: '',
    isStarted: false,
    isFinished: false,
  };

  //Empieza la tarea, formatea el tiempo para poner dia y hora de comienzo
  startTask(task: Task) {
    task.init_date = new Date();
    task.formatted_init_date = this.formatDate(task.init_date!);
    task.isStarted = true;
    console.log(`Task "${task.name}" started at ${task.init_date!}`);
  }

  //Termina la tarea, formatea el tiempo para poner dia y hora de final
  finishTask(task: Task) {
    task.end_date = new Date();
    task.formatted_end_date = this.formatDate(task.end_date!);
    task.isFinished = true;
    console.log(`Task "${task.name}" finished at ${task.end_date!}`);
  }

  //elimina la tarea pidiendo confirmacion
  deleteTask(task: Task) {
    const confirmDelete = confirm(
      `Are you sure you want to delete the task "${task.name}"?`
    );

    if (confirmDelete) {
      this.tasks = this.tasks.filter((t) => t !== task);
      console.log(`Task "${task.name}" deleted.`);
    }
  }

  //Crear tarea
  createTask() {
    this.tasks.push(this.task);

    // Reiniciar la tarea para el próximo ingreso
    this.task = {
      id: '',
      name: '',
      description: '',
      init_date: new Date(),
      end_date: new Date(),
      subject: '',
      asigned_person: '',
      estimated_duration: new Date(),
      real_time: new Date(),
      formatted_init_date: '',
      formatted_end_date: '',
      isStarted: false,
      isFinished: false,
    };
  }

  //Modificar tarea
  selectedTask: Task | null = null;
  modifyTask(task: Task): void {
    this.selectedTask = { ...task };
  }

  saveChanges(): void {
    if (this.selectedTask) {
      const index = this.tasks.findIndex(
        (task) => task.id === this.selectedTask!.id
      );

      if (index !== -1) {
        this.tasks[index] = { ...this.selectedTask };
        console.log('Changes saved successfully.');
      } else {
        console.error('Task not found.');
      }

      this.selectedTask = null;
    } else {
      console.error('No task selected.');
    }
  }

  //Formateo de tiempo usado en finish y start
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
