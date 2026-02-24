import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe, CurrencyPipe],
  template: `
    <div class="bg-slate-50 dark:bg-[#191022] font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <!-- Header -->
      <header class="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div class="px-6 lg:px-10 py-4 max-w-[1440px] mx-auto flex items-center justify-between gap-8">
          <!-- Logo Area -->
          <div class="flex items-center gap-10">
            <a class="flex items-center gap-3 group" routerLink="/">
              <div class="size-8 text-[#7311d4]">
                <span class="material-symbols-outlined text-3xl">shopping_bag</span>
              </div>
              <h2 class="text-xl font-bold tracking-tight group-hover:text-[#7311d4] transition-colors">DIATAS Market</h2>
            </a>
            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center gap-8">
              <a class="text-sm font-semibold hover:text-[#7311d4] transition-colors" routerLink="/listings">All Listings</a>
              <a class="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#7311d4] transition-colors" href="#">Categories</a>
              <a class="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#7311d4] transition-colors" routerLink="/premium">Premium Services</a>
              <a class="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#7311d4] transition-colors" href="#">Agents</a>
            </nav>
          </div>
          <!-- Search & Actions -->
          <div class="flex flex-1 justify-end items-center gap-6">
            <!-- Search Bar -->
            <div class="hidden md:flex flex-1 max-w-md relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input class="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-slate-100 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-[#7311d4] placeholder-slate-400 transition-all" placeholder="Search for cars, homes, or items..." type="text"/>
            </div>
            <!-- Action Buttons -->
            <div class="flex items-center gap-3">
              <a routerLink="/create-listing" class="hidden sm:flex items-center justify-center h-10 px-5 rounded-lg bg-[#7311d4] text-white text-sm font-bold hover:bg-[#7311d4]/90 transition-all shadow-md shadow-[#7311d4]/20">
                <span class="mr-2 material-symbols-outlined text-lg">add_circle</span>
                Sell Item
              </a>
              <button class="flex items-center justify-center h-10 px-5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <!-- Breadcrumbs & Page Title -->
        <div class="mb-8">
          <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
            <a class="hover:text-[#7311d4]" routerLink="/">Home</a>
            <span class="material-symbols-outlined text-base">chevron_right</span>
            <a class="hover:text-[#7311d4]" routerLink="/listings">Marketplace</a>
            <span class="material-symbols-outlined text-base">chevron_right</span>
            <span class="text-slate-900 dark:text-slate-100 font-medium">All Listings</span>
          </div>
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Discover Listings</h1>
              <p class="text-slate-500 dark:text-slate-400 mt-1">Browse thousands of verified items from sellers and professional agents.</p>
            </div>
            <!-- Quick Sort Dropdown (Mobile visible) -->
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-slate-500">Sort by:</span>
              <select class="bg-transparent border-none text-sm font-bold text-slate-900 dark:text-white focus:ring-0 cursor-pointer pr-8">
                <option>Recommended</option>
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Horizontal Quick Filters -->
        <div class="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div class="flex gap-3 min-w-max">
            <button class="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold transition-transform hover:scale-105">
              <span class="material-symbols-outlined text-[18px]">tune</span>
              All Filters
            </button>
            <div class="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-1 self-center"></div>
            <button class="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#7311d4] dark:hover:border-[#7311d4] text-slate-700 dark:text-slate-200 text-sm font-medium transition-all hover:bg-[#7311d4]/5">
              <span class="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-[#7311d4]">category</span>
              Category
              <span class="material-symbols-outlined text-[16px] ml-1">keyboard_arrow_down</span>
            </button>
            <button class="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#7311d4] dark:hover:border-[#7311d4] text-slate-700 dark:text-slate-200 text-sm font-medium transition-all hover:bg-[#7311d4]/5">
              <span class="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-[#7311d4]">attach_money</span>
              Price Range
              <span class="material-symbols-outlined text-[16px] ml-1">keyboard_arrow_down</span>
            </button>
            <button class="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#7311d4] dark:hover:border-[#7311d4] text-slate-700 dark:text-slate-200 text-sm font-medium transition-all hover:bg-[#7311d4]/5">
              <span class="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-[#7311d4]">location_on</span>
              Location
              <span class="material-symbols-outlined text-[16px] ml-1">keyboard_arrow_down</span>
            </button>
            <button class="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#7311d4] dark:hover:border-[#7311d4] text-slate-700 dark:text-slate-200 text-sm font-medium transition-all hover:bg-[#7311d4]/5">
              <span class="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-[#7311d4]">verified</span>
              Condition
              <span class="material-symbols-outlined text-[16px] ml-1">keyboard_arrow_down</span>
            </button>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Left Sidebar: Granular Filters -->
          <aside class="w-full lg:w-64 flex-shrink-0 hidden lg:block">
            <div class="sticky top-24 space-y-8">
              <!-- Categories Block -->
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white mb-4">Categories</h3>
                <div class="space-y-1">
                  <label class="flex items-center gap-3 p-2 rounded-lg bg-[#7311d4]/10 text-[#7311d4] cursor-pointer">
                    <span class="material-symbols-outlined filled text-[20px]">grid_view</span>
                    <span class="text-sm font-semibold">All Categories</span>
                  </label>
                  <label class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-600 dark:text-slate-400 cursor-pointer transition-colors">
                    <span class="material-symbols-outlined text-[20px]">directions_car</span>
                    <span class="text-sm font-medium">Vehicles</span>
                  </label>
                  <label class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-600 dark:text-slate-400 cursor-pointer transition-colors">
                    <span class="material-symbols-outlined text-[20px]">real_estate_agent</span>
                    <span class="text-sm font-medium">Real Estate</span>
                  </label>
                  <label class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-600 dark:text-slate-400 cursor-pointer transition-colors">
                    <span class="material-symbols-outlined text-[20px]">devices</span>
                    <span class="text-sm font-medium">Electronics</span>
                  </label>
                  <label class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-600 dark:text-slate-400 cursor-pointer transition-colors">
                    <span class="material-symbols-outlined text-[20px]">checkroom</span>
                    <span class="text-sm font-medium">Fashion</span>
                  </label>
                </div>
              </div>
              <hr class="border-gray-200 dark:border-gray-800"/>
              <!-- Seller Type -->
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white mb-4">Seller Type</h3>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <div class="relative flex items-center">
                      <input class="peer h-4 w-4 rounded border-gray-300 text-[#7311d4] focus:ring-[#7311d4] dark:border-gray-600 dark:bg-gray-700" type="checkbox"/>
                    </div>
                    <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4] transition-colors">Verified Agent</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <div class="relative flex items-center">
                      <input class="peer h-4 w-4 rounded border-gray-300 text-[#7311d4] focus:ring-[#7311d4] dark:border-gray-600 dark:bg-gray-700" type="checkbox"/>
                    </div>
                    <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4] transition-colors">Private Seller</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <div class="relative flex items-center">
                      <input class="peer h-4 w-4 rounded border-gray-300 text-[#7311d4] focus:ring-[#7311d4] dark:border-gray-600 dark:bg-gray-700" type="checkbox"/>
                    </div>
                    <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4] transition-colors">Business</span>
                  </label>
                </div>
              </div>
              <hr class="border-gray-200 dark:border-gray-800"/>
              <!-- Date Posted -->
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white mb-4">Date Posted</h3>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input class="h-4 w-4 border-gray-300 text-[#7311d4] focus:ring-[#7311d4] dark:border-gray-600 dark:bg-gray-700" name="date" type="radio"/>
                    <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4] transition-colors">Any time</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input class="h-4 w-4 border-gray-300 text-[#7311d4] focus:ring-[#7311d4] dark:border-gray-600 dark:bg-gray-700" name="date" type="radio"/>
                    <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4] transition-colors">Past 24 hours</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input class="h-4 w-4 border-gray-300 text-[#7311d4] focus:ring-[#7311d4] dark:border-gray-600 dark:bg-gray-700" name="date" type="radio"/>
                    <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4] transition-colors">Past week</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          <!-- Main Grid -->
          <div class="flex-1">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              @for (listing of listings(); track listing.id) {
                <article class="group relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border transition-all duration-300"
                  [class.border-2]="listing.isPremium"
                  [class.border-amber-200]="listing.isPremium"
                  [class.dark:border-amber-700/50]="listing.isPremium"
                  [class.border-gray-200]="!listing.isPremium"
                  [class.dark:border-gray-800]="!listing.isPremium"
                  [class.hover:shadow-xl]="true"
                  [class.hover:border-[#7311d4]/30]="!listing.isPremium"
                >
                  <div class="relative h-56 w-full overflow-hidden">
                    <!-- Badge: Premium -->
                    @if (listing.isPremium) {
                      <div class="absolute top-3 left-3 z-10 bg-amber-400 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px]">star</span>
                        Offre Spéciale
                      </div>
                    }
                    <!-- Badge: Agent -->
                    @if (listing.isAgent) {
                      <div class="absolute top-3 left-3 z-10 bg-[#7311d4] text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px]">support_agent</span>
                        Vendu par Agent
                      </div>
                    }
                    <button class="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-white hover:text-red-500 transition-colors backdrop-blur-sm">
                      <span class="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                    <img [src]="listing.imageUrl" [alt]="listing.title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                  </div>
                  <div class="flex flex-col flex-1 p-5">
                    <div class="flex justify-between items-start mb-2">
                      <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">{{ listing.category }}</span>
                      <span class="text-xs text-slate-400">{{ listing.datePosted | date:'shortTime' }}</span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-[#7311d4] transition-colors">{{ listing.title }}</h3>
                    <p class="text-slate-500 text-sm mb-4 line-clamp-2">{{ listing.description }}</p>
                    <div class="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                      <span class="text-xl font-bold" [class.text-[#7311d4]]="listing.isPremium" [class.text-slate-900]="!listing.isPremium" [class.dark:text-white]="!listing.isPremium">{{ listing.price | currency }}</span>
                      <div class="flex items-center gap-1 text-slate-500 text-sm">
                        <span class="material-symbols-outlined text-[16px]">location_on</span>
                        {{ listing.location }}
                      </div>
                    </div>
                  </div>
                </article>
              }
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex justify-center">
              <nav class="flex items-center gap-2">
                <button class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-slate-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50">
                  <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <button class="h-10 w-10 rounded-lg bg-[#7311d4] text-white font-bold text-sm shadow-lg shadow-[#7311d4]/30">1</button>
                <button class="h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">2</button>
                <button class="h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">3</button>
                <span class="text-slate-400 px-2">...</span>
                <button class="h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">12</button>
                <button class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-slate-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <!-- Simple Footer -->
      <footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-12 py-10">
        <div class="max-w-[1440px] mx-auto px-6 lg:px-10 text-center text-slate-500 dark:text-slate-400">
          <div class="flex items-center justify-center gap-2 mb-4 text-slate-900 dark:text-white">
            <span class="material-symbols-outlined text-2xl text-[#7311d4]">shopping_bag</span>
            <span class="font-bold text-lg">DIATAS Market</span>
          </div>
          <p class="text-sm">© 2023 DIATAS Market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `
})
export class ListingsComponent {
  private listingsService = inject(ListingsService);
  listings = this.listingsService.getListings();
}
