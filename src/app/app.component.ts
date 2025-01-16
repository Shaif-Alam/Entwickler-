import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchQuery: string = ''; // Store the search query

  onSearchQueryChanged(query: string): void {
    this.searchQuery = query; // Update search query in parent component
  }
}
