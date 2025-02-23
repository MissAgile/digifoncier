import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css'
})
export class TemoignagesComponent {
  testimonials = [
    {
      id: 1,
      authorName: 'Amadou Diallo',
      authorRole: 'Propriétaire',
      content: 'DigiFoncier m\'a permis de sécuriser mon terrain en quelques semaines seulement. Le processus était simple et transparent.',
      rating: 5,
      date: new Date('2024-02-15'),
      region: 'Dakar',
      isVerified: true
    },
    {
      id: 2,
      authorName: 'Fatou Sow',
      authorRole: 'Agent immobilier',
      content: 'Un outil révolutionnaire pour notre secteur. La vérification des titres est maintenant beaucoup plus rapide.',
      rating: 4,
      date: new Date('2024-02-10'),
      region: 'Thiès',
      isVerified: true
    }
  ];

  regions = ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor'];
  selectedRegion = '';
  sortBy = 'recent';
  filteredTestimonials = this.testimonials;

  filterTestimonials() {
    this.filteredTestimonials = this.testimonials.filter(t => 
      !this.selectedRegion || t.region === this.selectedRegion
    );
    this.sortTestimonials();
  }

  sortTestimonials() {
    this.filteredTestimonials.sort((a, b) => {
      if (this.sortBy === 'recent') {
        return b.date.getTime() - a.date.getTime();
      }
      return b.rating - a.rating;
    });
  }

  openAddTestimonialForm() {
    console.log('Ouverture du formulaire');
  }
}