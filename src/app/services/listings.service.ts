import { Injectable, signal } from '@angular/core';

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  location: string;
  datePosted: Date;
  isPremium?: boolean;
  isAgent?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  private listings = signal<Listing[]>([
    {
      id: '1',
      title: 'Modern Villa with Pool',
      description: 'Exquisite 4-bedroom villa located in the quiet suburbs. Features a heated pool and garden.',
      price: 850000,
      category: 'Real Estate',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbP0cbHE_uoH7SiGp7Gq9q-Qt-3Jh72SfqqwP0ESwsdk3Q0NzM21KO-aOAL0W5Wir9uhnd1V1cKnOgNn5vyE-CeoVvx5cJlNR3jTBr-Blx0Qc4g39eOmunfydd_QoJmg-ODtemceSUJVAqIPP_n-eRvbU0LKvwPPUMbTkxrOEP1Qz_QF95fNOGzdfRxvZ71s9PbzSCoBYgO6Uc2B47ehkqeKkxg7hPkzx7EOIxz2JM1kSGte0arBvubhtwj0PIMEfKmHHe6wKUI9aD',
      location: 'Beverly Hills',
      datePosted: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      isPremium: true
    },
    {
      id: '2',
      title: '2023 Sport GT Turbo',
      description: 'Low mileage, pristine condition, single owner. Full service history available.',
      price: 45000,
      category: 'Vehicles',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsO10C9n1xhPeATswVs68k4-n8gTKNifAx5HnyvfU8iPRto06NssKhiUDXhzEzSTF5nAajZagT1kFf2xT7HH3epAqTKfKuWN9jvkRXfJuH5WFXLnwu_Pgob7_i-oNpHO4S0NKcNChj_a_vaOJi0Jyni2f3uxHDszBITXO_672LuGnnkuhun-3aJ3ayY9E48dnkkvXVwzEGS6-k34qUxy8_GKO3aJ61qgHRtyqLHrp9-m5gEQJn5ZKo40KFAD512Mu5zjth1OVTS2DG',
      location: 'Miami, FL',
      datePosted: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      isAgent: true
    },
    {
      id: '3',
      title: 'Sony Noise Cancelling Headphones',
      description: 'Barely used, original box included. Great sound quality for music lovers.',
      price: 220,
      category: 'Electronics',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB73W5Aim2wCbKIyQKqRGK2JauDH9vJp2Slc71p7ieRIhgz-NT9vWw_xAyIeK876URaCj5cIldZz8x4F5E7qljH6mWUyzqzK8sS34-WDq1bFk1OD2PAsdM6dtx5mnNUwc4b85xI_7OEF0kLJ8UGKRFPPfI2Bk2f6dSNddzopEkoInVCwbAlZg_HYw2-ZF3nZwsTfw_7bbzY6fFS3BUxG1200Kx8ekuOWp8l2n4cqXBgQGvmSRTroMOwB3Bpavc2eErWnqJHmOddQwQ2',
      location: 'New York',
      datePosted: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    },
    {
      id: '4',
      title: 'Limited Edition Sneakers',
      description: 'Size 10 US. Brand new, never worn. Collector\'s item.',
      price: 180,
      category: 'Fashion',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7Fjd_czcRYxy2qxcdJODMxyqdsXfHznylr-abGYwWHfNLzTME_WHWUAq09gg91JvdKr_oIj3BC1gfgKjBsxVq1gsgZwLVSpy4nGnCG6cb6hwSZvxc7OdZzAHQGTUu69flkAr0BsQ4FE84h4TY6naJsFO1fYR73vaq9pXiGumG3bOMtQolJXIIn59HFpTlkOiMa4Ty1-765_6ECcGGa7sz1LvvEzNcUJ6AK5Xn1ufWue1XCoPq2VOIT1ofEa1H8I1TxaWG4tR4eM5v',
      location: 'Chicago',
      datePosted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      id: '5',
      title: 'Downtown Loft Apartment',
      description: 'Industrial style loft in the heart of the city. High ceilings and large windows.',
      price: 2500,
      category: 'Real Estate',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFEuIyVYxeSSXUUeSanBd7NITcoDrOi2-e_W_IPfrAAfiL0oPcxoUdxqVSDDZekuZMT72LZcB1T7xP2_OQBRKZroZrcv0gLNGO_JU1TIe8_R0OrMelUibCyRc3Evb_DT5500-rKfiBaUBF2Ohi-K_HhSGRAMAck7VhoiixT6uC4S4psBUtdHKXXKcaayCf_eayrz3-JfqJH8WwqExFHL_a2JkaL_kiu9nmCsI5D0NR40wnrvpYIbh8_e78rfNoesG8yyy3s4QkWHdA',
      location: 'Seattle',
      datePosted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      isAgent: true
    },
    {
      id: '6',
      title: 'Series 7 Smart Watch',
      description: 'Unopened box. Includes extra strap and charger. Perfect condition.',
      price: 350,
      category: 'Electronics',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4ywegzM4elISU3FXdRLWOK5tlEXylF5W2duohlIwMrEjtJGPIrls2e8JQa5xAmtRqDbmonf8zFN-wPz3NzhzpSzuQSqao0MvcLVVD3Dx7Lgvf88nRMBS8qKaYcsGXOQdvWaPUTDm9OrNCy8rTv_2bwlio2F1V1xlneROve4IOjBl4NA_vRFgB5fJtCU7CN20rts4ebIbvWYFFBv7BZsmIPg2asrrJxogFhIZv5XZrXOq5MBrWvYkTWyZRlnZ57pZeOfZv61OsZ7MS',
      location: 'San Francisco',
      datePosted: new Date(Date.now() - 10 * 60 * 1000), // 10 mins ago
      isPremium: true
    }
  ]);

  getListings() {
    return this.listings.asReadonly();
  }

  addListing(listing: Omit<Listing, 'id' | 'datePosted'>) {
    const newListing: Listing = {
      ...listing,
      id: Math.random().toString(36).substr(2, 9),
      datePosted: new Date()
    };
    this.listings.update(current => [newListing, ...current]);
  }
}
