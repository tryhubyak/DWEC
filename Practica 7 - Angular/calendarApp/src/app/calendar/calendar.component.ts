import { Component } from '@angular/core';

import { Task } from '../models/task.model'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})

export class CalendarComponent {
  tasks: Task[] = [
    new Task('1', 'Practica Angular', 'Realizar ejercicios de storeApp y calendarApp', new Date('2024-02-01'), new Date('2024-02-06'), 'DWEC', 'Veronika', new Date(), undefined),
    new Task('2', 'Reunión de equipo', 'Planificación para el próximo proyecto', new Date('2024-02-03'), new Date('2024-02-03'), 'Proyecto', 'Juan', new Date(), undefined),
    new Task('3', 'Entrega de informe', 'Preparar y enviar el informe trimestral', new Date('2024-02-05'), new Date('2024-02-05'), 'Informe', 'Maria', new Date(), undefined),
    new Task('4', 'Investigación de mercado', 'Recopilar datos y analizar tendencias', new Date('2024-02-08'), new Date('2024-02-15'), 'Marketing', 'Carlos', new Date(), undefined),
    new Task('5', 'Entrenamiento', 'Sesión de entrenamiento físico', new Date('2024-02-10'), new Date('2024-02-10'), 'Salud', 'Laura', new Date(), undefined),
    new Task('6', 'Proyecto personal', 'Desarrollar una aplicación web pequeña', new Date('2024-02-12'), new Date('2024-02-28'), 'Desarrollo', 'Pedro', new Date(), undefined)
  ];

  
}
