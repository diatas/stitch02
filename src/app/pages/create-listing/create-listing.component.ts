import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-create-listing',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <div class="bg-slate-50 dark:bg-[#191022] font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <!-- Header -->
      <header class="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div class="px-6 lg:px-10 py-4 max-w-[1440px] mx-auto flex items-center justify-between gap-8">
          <div class="flex items-center gap-10">
            <a class="flex items-center gap-3 group" routerLink="/">
              <div class="size-8 text-[#7311d4]">
                <span class="material-symbols-outlined text-3xl">shopping_bag</span>
              </div>
              <h2 class="text-xl font-bold tracking-tight group-hover:text-[#7311d4] transition-colors">DIATAS Market</h2>
            </a>
          </div>
        </div>
      </header>

      <main class="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8">
          <h1 class="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Create New Listing</h1>
          
          <form [formGroup]="listingForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- Title -->
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Title</label>
              <input 
                type="text" 
                formControlName="title"
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[#7311d4] transition-all"
                placeholder="e.g., Vintage Camera, Modern Sofa"
              >
            </div>

            <!-- Description & AI Generation -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
                <button 
                  type="button" 
                  (click)="generateDescription()"
                  [disabled]="isGeneratingDescription() || !listingForm.get('title')?.value"
                  class="text-xs font-bold text-[#7311d4] hover:text-[#5e0eb0] disabled:opacity-50 flex items-center gap-1"
                >
                  <span class="material-symbols-outlined text-sm" [class.animate-spin]="isGeneratingDescription()">auto_awesome</span>
                  Generate with AI
                </button>
              </div>
              <textarea 
                formControlName="description"
                rows="4"
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[#7311d4] transition-all"
                placeholder="Describe your item..."
              ></textarea>
            </div>

            <!-- Image Generation -->
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Image</label>
              
              <div class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center gap-4 bg-slate-50 dark:bg-gray-800/50 min-h-[300px] relative overflow-hidden group">
                
                @if (generatedImage()) {
                  <img [src]="generatedImage()" class="absolute inset-0 w-full h-full object-cover rounded-xl" alt="Generated listing image">
                  <button 
                    type="button" 
                    (click)="clearImage()"
                    class="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
                  >
                    <span class="material-symbols-outlined">close</span>
                  </button>
                } @else {
                  <div class="text-center space-y-2">
                    <span class="material-symbols-outlined text-4xl text-slate-400">image</span>
                    <p class="text-sm text-slate-500">No image selected</p>
                  </div>
                  
                  <div class="flex gap-4 mt-4">
                    <button 
                      type="button"
                      (click)="generateImage()"
                      [disabled]="isGeneratingImage() || !listingForm.get('description')?.value"
                      class="px-6 py-2.5 bg-[#7311d4] text-white rounded-lg font-bold text-sm hover:bg-[#5e0eb0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-[#7311d4]/20"
                    >
                      <span class="material-symbols-outlined text-lg" [class.animate-spin]="isGeneratingImage()">auto_awesome</span>
                      {{ isGeneratingImage() ? 'Generating...' : 'Generate AI Image' }}
                    </button>
                  </div>
                  <p class="text-xs text-slate-400 mt-2 max-w-xs text-center">
                    Enter a description above to generate a unique image for your listing using AI.
                  </p>
                }
              </div>
            </div>

            <!-- Price & Category -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Price ($)</label>
                <input 
                  type="number" 
                  formControlName="price"
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[#7311d4] transition-all"
                  placeholder="0.00"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Category</label>
                <select 
                  formControlName="category"
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[#7311d4] transition-all appearance-none"
                >
                  <option value="">Select a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-4">
              <a routerLink="/" class="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Cancel
              </a>
              <button 
                type="submit" 
                [disabled]="listingForm.invalid || isSubmitting()"
                class="px-8 py-3 rounded-xl bg-[#7311d4] text-white font-bold hover:bg-[#5e0eb0] transition-colors disabled:opacity-50 shadow-lg shadow-[#7311d4]/20"
              >
                {{ isSubmitting() ? 'Publishing...' : 'Publish Listing' }}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  `
})
export class CreateListingComponent {
  private fb = inject(FormBuilder);
  private geminiService = inject(GeminiService);
  private listingsService = inject(ListingsService);
  private router = inject(Router);

  listingForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0)]],
    category: ['', Validators.required]
  });

  isGeneratingDescription = signal(false);
  isGeneratingImage = signal(false);
  isSubmitting = signal(false);
  generatedImage = signal<string | null>(null);

  async generateDescription() {
    const title = this.listingForm.get('title')?.value;
    if (!title) return;

    this.isGeneratingDescription.set(true);
    const description = await this.geminiService.generateDescription(title);
    if (description) {
      this.listingForm.patchValue({ description });
    }
    this.isGeneratingDescription.set(false);
  }

  async generateImage() {
    const description = this.listingForm.get('description')?.value;
    if (!description) return;

    this.isGeneratingImage.set(true);
    const image = await this.geminiService.generateImage(description);
    if (image) {
      this.generatedImage.set(image);
    }
    this.isGeneratingImage.set(false);
  }

  clearImage() {
    this.generatedImage.set(null);
  }

  onSubmit() {
    if (this.listingForm.valid) {
      this.isSubmitting.set(true);
      
      const formValue = this.listingForm.value;
      
      this.listingsService.addListing({
        title: formValue.title!,
        description: formValue.description!,
        price: Number(formValue.price),
        category: formValue.category!,
        imageUrl: this.generatedImage() || 'https://picsum.photos/seed/default/400/400',
        location: 'Unknown Location' // Default for now
      });

      setTimeout(() => {
        this.isSubmitting.set(false);
        this.router.navigate(['/listings']);
      }, 1000);
    }
  }
}
