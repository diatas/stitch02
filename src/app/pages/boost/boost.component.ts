import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boost',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-slate-50 dark:bg-[#191022] font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
      <!-- Top Navigation -->
      <header class="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
        <div class="flex items-center gap-4 cursor-pointer" routerLink="/">
          <div class="size-8 text-[#7311d4] flex items-center justify-center bg-[#f3eafa] rounded-lg">
            <span class="material-symbols-outlined text-2xl">storefront</span>
          </div>
          <h2 class="text-lg font-bold leading-tight tracking-[-0.015em] dark:text-white">Marketplace</h2>
        </div>
        <div class="hidden md:flex flex-1 justify-end gap-8">
          <nav class="flex items-center gap-6">
            <a class="text-sm font-medium hover:text-[#7311d4] transition-colors dark:text-slate-300 dark:hover:text-[#7311d4]" routerLink="/">Accueil</a>
            <a class="text-sm font-medium text-[#7311d4]" routerLink="/create-listing">Publier une annonce</a>
            <a class="text-sm font-medium hover:text-[#7311d4] transition-colors dark:text-slate-300 dark:hover:text-[#7311d4]" href="#">Aide</a>
            <a class="text-sm font-medium hover:text-[#7311d4] transition-colors dark:text-slate-300 dark:hover:text-[#7311d4]" href="#">Connexion</a>
          </nav>
        </div>
        <div class="md:hidden">
          <span class="material-symbols-outlined cursor-pointer text-slate-600 dark:text-slate-300">menu</span>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl w-full flex flex-col gap-10">
          <!-- Header Section -->
          <div class="text-center space-y-4 max-w-2xl mx-auto">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              Voulez-vous <span class="text-[#7311d4] relative inline-block">
                booster
                <svg class="absolute w-full h-3 -bottom-1 left-0 text-[#7311d4] opacity-20" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" stroke-width="8"></path>
                </svg>
              </span> votre annonce ?
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400">
              Choisissez l'option qui correspond le mieux à vos besoins pour maximiser votre visibilité et vendre plus rapidement.
            </p>
          </div>

          <!-- Pricing Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <!-- Standard Card -->
            <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-800 dark:border-slate-700 relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 group-hover:bg-slate-400 transition-colors"></div>
              <div class="mb-6">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Standard</h3>
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl font-black text-slate-900 dark:text-white">Gratuit</span>
                  <span class="text-sm font-medium text-slate-500 dark:text-slate-400">/ toujours</span>
                </div>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">L'essentiel pour commencer à vendre.</p>
              </div>
              <ul class="flex-1 space-y-4 mb-8">
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">check_circle</span>
                  <span>Publication standard instantanée</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">check_circle</span>
                  <span>Visible pendant 30 jours</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">check_circle</span>
                  <span>Support client par email</span>
                </li>
              </ul>
              <button class="w-full py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold text-sm hover:bg-slate-100 hover:border-slate-300 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                Choisir Standard
              </button>
            </div>

            <!-- Special Offer Card (Featured) -->
            <div class="flex flex-col rounded-2xl border-2 border-[#7311d4] bg-white p-6 shadow-xl relative overflow-hidden dark:bg-slate-800 transform md:-translate-y-2 z-10">
              <div class="absolute top-0 right-0 bg-[#7311d4] text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Populaire
              </div>
              <div class="mb-6">
                <h3 class="text-lg font-bold text-[#7311d4] mb-2">Offre Spéciale</h3>
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl font-black text-slate-900 dark:text-white">9,99 €</span>
                  <span class="text-sm font-medium text-slate-500 dark:text-slate-400">/ mois</span>
                </div>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Boostez votre visibilité x10.</p>
              </div>
              <ul class="flex-1 space-y-4 mb-8">
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0 fill-1">verified</span>
                  <span>Badge "En vedette" sur l'annonce</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">vertical_align_top</span>
                  <span>En tête des résultats de recherche</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">bar_chart</span>
                  <span>Statistiques de vue détaillées</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">support_agent</span>
                  <span>Support prioritaire 24/7</span>
                </li>
              </ul>
              <button class="w-full py-3 px-4 rounded-xl bg-[#7311d4] text-white font-bold text-sm shadow-lg shadow-[#7311d4]/30 hover:bg-[#5e0eb0] hover:shadow-[#7311d4]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#7311d4] focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                Booster mon annonce
              </button>
            </div>

            <!-- Agent Card -->
            <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-800 dark:border-slate-700 relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-[#7311d4] group-hover:from-purple-500 group-hover:to-[#5e0eb0] transition-colors"></div>
              <div class="mb-6">
                <div class="flex justify-between items-start">
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Agent de Vente</h3>
                  <span class="bg-purple-100 text-[#7311d4] text-[10px] font-bold px-2 py-0.5 rounded-full dark:bg-purple-900/30 dark:text-purple-300">PREMIUM</span>
                </div>
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl font-black text-slate-900 dark:text-white">10%</span>
                  <span class="text-sm font-medium text-slate-500 dark:text-slate-400">commission</span>
                </div>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Déléguez tout, on s'occupe de la vente.</p>
              </div>
              <ul class="flex-1 space-y-4 mb-8">
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">manage_accounts</span>
                  <span>Gestion complète de A à Z</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">lock</span>
                  <span>Paiement sécurisé garanti</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">photo_camera</span>
                  <span>Shooting photo professionnel</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span class="material-symbols-outlined text-[#7311d4] text-[20px] shrink-0">handshake</span>
                  <span>Négociation avec les acheteurs</span>
                </li>
              </ul>
              <button class="w-full py-3 px-4 rounded-xl border border-[#7311d4] text-[#7311d4] bg-white font-bold text-sm hover:bg-[#f3eafa] transition-colors dark:bg-transparent dark:hover:bg-[#7311d4]/20 focus:outline-none focus:ring-2 focus:ring-[#7311d4] focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                Contacter un agent
              </button>
            </div>
          </div>

          <!-- Continue without boosting -->
          <div class="flex justify-center mt-4">
            <a class="group flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-2 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <span class="text-sm font-semibold">Continuer sans booster mon annonce</span>
              <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>

          <!-- Trust Badges / Reassurance -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-200 dark:border-slate-800">
            <div class="flex flex-col items-center text-center gap-2">
              <span class="material-symbols-outlined text-3xl text-slate-400 dark:text-slate-500">verified_user</span>
              <p class="text-xs text-slate-500 font-medium">Données Sécurisées</p>
            </div>
            <div class="flex flex-col items-center text-center gap-2">
              <span class="material-symbols-outlined text-3xl text-slate-400 dark:text-slate-500">visibility</span>
              <p class="text-xs text-slate-500 font-medium">+1M Visiteurs/mois</p>
            </div>
            <div class="flex flex-col items-center text-center gap-2">
              <span class="material-symbols-outlined text-3xl text-slate-400 dark:text-slate-500">timer</span>
              <p class="text-xs text-slate-500 font-medium">Vente Rapide</p>
            </div>
            <div class="flex flex-col items-center text-center gap-2">
              <span class="material-symbols-outlined text-3xl text-slate-400 dark:text-slate-500">support</span>
              <p class="text-xs text-slate-500 font-medium">Support 7j/7</p>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="mt-auto bg-white border-t border-slate-200 py-8 dark:bg-slate-900 dark:border-slate-800">
        <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm dark:text-slate-400">© 2024 Marketplace. Tous droits réservés.</p>
          <div class="flex gap-6">
            <a class="text-slate-500 text-sm hover:text-[#7311d4] transition-colors dark:text-slate-400 dark:hover:text-[#7311d4]" href="#">Conditions d'utilisation</a>
            <a class="text-slate-500 text-sm hover:text-[#7311d4] transition-colors dark:text-slate-400 dark:hover:text-[#7311d4]" href="#">Politique de confidentialité</a>
            <a class="text-slate-500 text-sm hover:text-[#7311d4] transition-colors dark:text-slate-400 dark:hover:text-[#7311d4]" href="#">Aide</a>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class BoostComponent {}
