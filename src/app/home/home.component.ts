import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
showBanner: boolean = true;
urlImagem: string = "https://i.imgur.com/kDppnOT.jpeg"

ngOnInit(): void {
  const storedValue = localStorage.getItem('showBanner');
  this.showBanner = storedValue === null ? true : JSON.parse(storedValue);
}

OcultarBanner(): void {
  this.showBanner = !this.showBanner;
  localStorage.setItem('showBanner', JSON.stringify(this.showBanner));
}
}