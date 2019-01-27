import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swiggy';
  searchText = '';
  recentSearches = [];
  deliveryTimeSorting = false;
  ratingSorting = false;
  mockCardData = [
    {
      restaurantName: 'Midnight Mania',
      cuisines: 'Italian, Continental, Pizzas',
      rating: 4.2,
      deliveryTime: 53
    },
    {
      restaurantName: 'Truffles Koramangala',
      cuisines: 'Eat Fit',
      rating: 4.5,
      deliveryTime: 33
    },
    {
      restaurantName: 'Smally’s Resto Cafe',
      cuisines: 'Burger',
      rating: 4.8,
      deliveryTime: 55
    },
    {
      restaurantName: 'Corner House Ice Cream',
      cuisines: 'Chinese',
      rating: 4.6,
      deliveryTime: 20
    }
  ];
  clearSearch() {
    this.searchText = '';
  }
  saveSearch() {
    if (this.recentSearches.length > 5) {
      this.recentSearches = this.recentSearches.slice(1);
    }
    if (
      this.recentSearches.indexOf(this.searchText) === -1 &&
      this.searchText.length > 4
    ) {
      this.recentSearches.push(this.searchText);
    }
  }
  sortByDeliveryTime() {
    this.deliveryTimeSorting = !this.deliveryTimeSorting;
    if (!this.deliveryTimeSorting) {
      this.mockCardData = this.mockCardData.sort((card1, card2) => {
        return card1.deliveryTime - card2.deliveryTime;
      });
    } else {
      this.mockCardData = this.mockCardData.sort((card1, card2) => {
        return card2.deliveryTime - card1.deliveryTime;
      });
    }
  }
  sortByRating() {
    this.ratingSorting = !this.ratingSorting;
    if (!this.ratingSorting) {
      this.mockCardData = this.mockCardData.sort((card1, card2) => {
        return card2.rating - card1.rating;
      });
    } else {
      this.mockCardData = this.mockCardData.sort((card1, card2) => {
        return card1.rating - card2.rating;
      });
    }
  }
}
