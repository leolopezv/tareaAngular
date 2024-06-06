import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HttpClientModule], // El import es para importar una librearia o modulo
  providers: [UserService], // El provider es para importar un servicio
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'tareaAngular';
  users: User[] = [];

  constructor(private userService: UserService) {
    userService.obtenerDatos().subscribe(respuesta => {
      this.users = respuesta as Array<User>;
    })
  }


}
