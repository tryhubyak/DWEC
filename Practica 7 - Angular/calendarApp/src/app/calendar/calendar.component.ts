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
      'Practica Angular',
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
      'Reunión de equipo',
      'Planificación para el próximo proyecto',
      new Date('2024-02-03'),
      new Date('2024-02-03'),
      'Proyecto',
      'Juan',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T3',
      'Entrega de informe',
      'Preparar y enviar el informe trimestral',
      new Date('2024-02-05'),
      new Date('2024-02-05'),
      'Informe',
      'Maria',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T4',
      'Investigación de mercado',
      'Recopilar datos y analizar tendencias',
      new Date('2024-02-08'),
      new Date('2024-02-15'),
      'Marketing',
      'Carlos',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T5',
      'Entrenamiento',
      'Sesión de entrenamiento físico',
      new Date('2024-02-10'),
      new Date('2024-02-10'),
      'Salud',
      'Laura',
      new Date(),
      new Date(),
      '',
      ''
    ),
    new Task(
      'T6',
      'Proyecto personal',
      'Desarrollar una aplicación web pequeña',
      new Date('2024-02-12'),
      new Date('2024-02-28'),
      'Desarrollo',
      'Pedro',
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

  startTask(task: Task) {
    task.init_date = new Date();
    task.formatted_init_date = this.formatDate(task.init_date!);
    task.isStarted = true;
    console.log(`Task "${task.name}" started at ${task.init_date!}`);
  }

  finishTask(task: Task) {
    task.end_date = new Date();
    task.formatted_end_date = this.formatDate(task.end_date!);
    task.isFinished = true;
    console.log(`Task "${task.name}" finished at ${task.end_date!}`);
  }

  deleteTask(task: Task) {
    const confirmDelete = confirm(
      `Are you sure you want to delete the task "${task.name}"?`
    );

    if (confirmDelete) {
      this.tasks = this.tasks.filter((t) => t !== task);
      console.log(`Task "${task.name}" deleted.`);
    }
  }

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
