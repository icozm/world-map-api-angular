import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService, CountryInfo } from '../services/country.service';

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css'],
})
export class SvgComponent {
  selectedCountry = 'Click on a country';
  countryInfo: CountryInfo | null = null;

  constructor(private countryService: CountryService) {}

  logID(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const countryId = target.id;

    if (countryId) {
      this.fetchCountryData(countryId.toLowerCase());
    }
  }

  fetchCountryData(countryCode: string) {
    this.countryService.getCountryData(countryCode).subscribe({
      next: (response) => {
        if (response && response[1]) {
          const country = response[1][0];
          this.countryInfo = {
            name: country.name,
            capitalCity: country.capitalCity,
            region: country.region,
            incomeLevel: country.incomeLevel,
            latitude: country.latitude,
            longitude: country.longitude,
          };
          this.selectedCountry = `Selected: ${country.name}`;
        } else {
          this.selectedCountry = 'Country data not found';
          this.countryInfo = null;
        }
      },
      error: (err) => {
        console.error('API error:', err);
        this.selectedCountry = 'Failed to fetch country data';
        this.countryInfo = null;
      },
    });
  }
}
