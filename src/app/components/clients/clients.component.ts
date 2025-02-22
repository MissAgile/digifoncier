import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AproposComponent } from '../apropos/apropos.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { MapsComponent } from '../maps/maps.component';
import { TutoComponent } from '../tuto/tuto.component';
import { TemoignagesComponent } from '../temoignages/temoignages.component';
import { StatComponent } from '../stat/stat.component';
import { BanniereComponent } from '../banniere/banniere.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AproposComponent, ContactsComponent, MapsComponent, TutoComponent, TemoignagesComponent, StatComponent, BanniereComponent,ServicesComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

}
