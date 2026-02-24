import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-premium',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-slate-50 dark:bg-[#191022] font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen flex flex-col">
      <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <div class="layout-container flex h-full grow flex-col">
          <!-- Header -->
          <header class="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e1429] px-4 md:px-10 py-3 sticky top-0 z-50">
            <div class="flex items-center gap-8">
              <div class="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" routerLink="/">
                <div class="size-8 text-[#7311d4] flex items-center justify-center">
                  <span class="material-symbols-outlined text-3xl">storefront</span>
                </div>
                <h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Marketplace</h2>
              </div>
              <div class="hidden md:flex items-center gap-9">
                <a class="text-slate-600 dark:text-slate-300 hover:text-[#7311d4] dark:hover:text-[#7311d4] transition-colors text-sm font-medium leading-normal" routerLink="/listings">Acheter</a>
                <a class="text-slate-600 dark:text-slate-300 hover:text-[#7311d4] dark:hover:text-[#7311d4] transition-colors text-sm font-medium leading-normal" routerLink="/create-listing">Vendre</a>
                <a class="text-[#7311d4] font-bold text-sm leading-normal" routerLink="/premium">Premium</a>
                <a class="text-slate-600 dark:text-slate-300 hover:text-[#7311d4] dark:hover:text-[#7311d4] transition-colors text-sm font-medium leading-normal" href="#">Aide</a>
              </div>
            </div>
            <div class="flex flex-1 justify-end gap-4 md:gap-8">
              <label class="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                <div class="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
                  <div class="text-slate-500 flex border-none items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span class="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Rechercher" value=""/>
                </div>
              </label>
              <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#7311d4] hover:bg-[#7311d4]/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Connexion</span>
              </button>
            </div>
          </header>

          <main class="flex flex-1 flex-col items-center w-full">
            <div class="w-full max-w-[1200px] px-4 md:px-10">
              <!-- Hero Section -->
              <div class="@container py-10 md:py-16">
                <div class="flex flex-col gap-6 @[864px]:flex-row items-center">
                  <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg @[864px]:w-1/2 relative bg-slate-200">
                    <div class="absolute inset-0 bg-gradient-to-tr from-[#7311d4]/80 to-purple-400/30 mix-blend-multiply z-10"></div>
                    <div class="w-full h-full bg-center bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_4UiJpT5S0tcm-xBPllP-j8kS0qye9uDld73-lwdkrPKqIOtDQjPei3-Od0VCdOfzE228NAQMMKCL17aa5hy5oIdSMUfcYezCLLJpSmsgkiwIT7NG6bfpLzhvjudDXUd_YsloRBnuXkkgPUlskO26KamhByPY8yt5pzW0ptqTjKIWBNhY4OW5gWUj9YqYXrv_rQ5j3CEyjs3IDzLLd4ANyp94aUERRSc94KblVtBraRQvOG2C-hbH0RP-2-Ooqx9U86CBElrpM6hk");'></div>
                  </div>
                  <div class="flex flex-col gap-6 @[864px]:w-1/2 @[864px]:pl-10 justify-center">
                    <div class="flex flex-col gap-4 text-left">
                      <span class="text-[#7311d4] font-bold tracking-wider uppercase text-xs">Services Vendeurs</span>
                      <h1 class="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                        Boostez vos ventes avec nos services premium
                      </h1>
                      <h2 class="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed">
                        Augmentez votre visibilité et vendez plus rapidement grâce à nos options exclusives pour les vendeurs exigeants.
                      </h2>
                    </div>
                    <div class="flex gap-4 pt-2">
                      <button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#7311d4] hover:bg-[#7311d4]/90 transition-colors text-white text-base font-bold leading-normal shadow-lg shadow-[#7311d4]/30">
                        <span class="truncate">Découvrir les services</span>
                      </button>
                      <button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-base font-medium leading-normal">
                        <span class="truncate">En savoir plus</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Comparison Section Title -->
              <div class="text-center py-10 max-w-2xl mx-auto">
                <h2 class="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Comparatif des offres</h2>
                <p class="text-slate-600 dark:text-slate-400 text-lg">Choisissez le niveau d'accompagnement qui correspond à vos objectifs de vente.</p>
              </div>

              <!-- Comparison Cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                <!-- Card 1: Standard -->
                <div class="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1429] p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div class="mb-6">
                    <h3 class="text-slate-900 dark:text-white text-xl font-bold mb-2">Standard</h3>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-4">Pour les vendeurs occasionnels.</p>
                    <div class="flex items-baseline gap-1">
                      <span class="text-slate-900 dark:text-white text-4xl font-black tracking-tight">Gratuit</span>
                    </div>
                  </div>
                  <button class="w-full mb-8 cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold transition-colors">
                    Commencer
                  </button>
                  <div class="space-y-4 flex-1">
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                      <span class="text-slate-700 dark:text-slate-300 text-sm">Visibilité standard dans la recherche</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                      <span class="text-slate-700 dark:text-slate-300 text-sm">3 photos par annonce</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                      <span class="text-slate-700 dark:text-slate-300 text-sm">Support par email (48h)</span>
                    </div>
                    <div class="flex items-start gap-3 opacity-50">
                      <span class="material-symbols-outlined text-slate-400 text-[20px]">cancel</span>
                      <span class="text-slate-500 dark:text-slate-500 text-sm">Pas de mise en avant</span>
                    </div>
                  </div>
                </div>

                <!-- Card 2: Special Offer (Highlight) -->
                <div class="flex flex-col relative rounded-xl border-2 border-[#7311d4] bg-white dark:bg-[#251a33] p-8 shadow-xl transform scale-100 md:scale-105 z-10">
                  <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7311d4] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Populaire
                  </div>
                  <div class="mb-6">
                    <h3 class="text-[#7311d4] text-xl font-bold mb-2">Premium</h3>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-4">Pour vendre plus vite et mieux.</p>
                    <div class="flex items-baseline gap-1">
                      <span class="text-slate-900 dark:text-white text-4xl font-black tracking-tight">29€</span>
                      <span class="text-slate-500 dark:text-slate-400 font-medium">/mois</span>
                    </div>
                  </div>
                  <button class="w-full mb-8 cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-[#7311d4] hover:bg-[#7311d4]/90 text-white text-sm font-bold shadow-lg shadow-[#7311d4]/25 transition-colors" routerLink="/boost">
                    Choisir cette offre
                  </button>
                  <div class="space-y-4 flex-1">
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-[#7311d4] text-[20px]">check_circle</span>
                      <span class="text-slate-900 dark:text-white text-sm font-medium">Visibilité x10 en tête de liste</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-[#7311d4] text-[20px]">check_circle</span>
                      <span class="text-slate-900 dark:text-white text-sm font-medium">Badge "Vendeur Vérifié"</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-[#7311d4] text-[20px]">check_circle</span>
                      <span class="text-slate-900 dark:text-white text-sm font-medium">Jusqu'à 20 photos HD</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-[#7311d4] text-[20px]">check_circle</span>
                      <span class="text-slate-900 dark:text-white text-sm font-medium">Statistiques de vue détaillées</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-[#7311d4] text-[20px]">check_circle</span>
                      <span class="text-slate-900 dark:text-white text-sm font-medium">Support prioritaire 7j/7</span>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Agent -->
                <div class="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1429] p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div class="mb-6">
                    <h3 class="text-slate-900 dark:text-white text-xl font-bold mb-2">Agent de Vente</h3>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-4">Déléguez tout, on s'occupe de tout.</p>
                    <div class="flex items-baseline gap-1">
                      <span class="text-slate-900 dark:text-white text-4xl font-black tracking-tight">Sur devis</span>
                    </div>
                  </div>
                  <button class="w-full mb-8 cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-bold transition-colors">
                    Contacter un agent
                  </button>
                  <div class="space-y-4 flex-1">
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-slate-900 dark:text-white text-[20px]">check_circle</span>
                      <span class="text-slate-700 dark:text-slate-300 text-sm">Gestion complète de A à Z</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-slate-900 dark:text-white text-[20px]">check_circle</span>
                      <span class="text-slate-700 dark:text-slate-300 text-sm">Agent dédié expert</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-slate-900 dark:text-white text-[20px]">check_circle</span>
                      <span class="text-slate-700 dark:text-slate-300 text-sm">Shooting photo professionnel</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-slate-900 dark:text-white text-[20px]">check_circle</span>
                      <span class="text-slate-700 dark:text-slate-300 text-sm">Négociation incluse</span>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="material-symbols-outlined text-slate-900 dark:text-white text-[20px]">check_circle</span>
                      <span class="text-slate-700 dark:text-slate-300 text-sm">Commission au succès uniquement</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Features Grid -->
              <div class="py-16 border-t border-slate-200 dark:border-slate-800">
                <div class="flex flex-col gap-4 mb-10">
                  <h3 class="text-slate-900 dark:text-white text-2xl font-bold">Pourquoi passer au Premium ?</h3>
                  <p class="text-slate-600 dark:text-slate-400">Des outils puissants conçus pour maximiser vos revenus.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <!-- Feature 1 -->
                  <div class="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1e1429] border border-slate-100 dark:border-slate-800">
                    <div class="w-12 h-12 rounded-lg bg-[#7311d4]/10 flex items-center justify-center text-[#7311d4] mb-2">
                      <span class="material-symbols-outlined">visibility</span>
                    </div>
                    <h4 class="text-slate-900 dark:text-white font-bold text-lg">Visibilité Maximale</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      Vos annonces apparaissent en tête des recherches et sont suggérées aux acheteurs les plus pertinents.
                    </p>
                  </div>
                  <!-- Feature 2 -->
                  <div class="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1e1429] border border-slate-100 dark:border-slate-800">
                    <div class="w-12 h-12 rounded-lg bg-[#7311d4]/10 flex items-center justify-center text-[#7311d4] mb-2">
                      <span class="material-symbols-outlined">handshake</span>
                    </div>
                    <h4 class="text-slate-900 dark:text-white font-bold text-lg">Vente Assistée</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      Nos experts analysent le marché pour vous aider à fixer le prix juste et vendre rapidement.
                    </p>
                  </div>
                  <!-- Feature 3 -->
                  <div class="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1e1429] border border-slate-100 dark:border-slate-800">
                    <div class="w-12 h-12 rounded-lg bg-[#7311d4]/10 flex items-center justify-center text-[#7311d4] mb-2">
                      <span class="material-symbols-outlined">verified_user</span>
                    </div>
                    <h4 class="text-slate-900 dark:text-white font-bold text-lg">Sécurité Garantie</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      Transactions sécurisées, vérification des acheteurs et protection contre la fraude.
                    </p>
                  </div>
                  <!-- Feature 4 -->
                  <div class="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1e1429] border border-slate-100 dark:border-slate-800">
                    <div class="w-12 h-12 rounded-lg bg-[#7311d4]/10 flex items-center justify-center text-[#7311d4] mb-2">
                      <span class="material-symbols-outlined">analytics</span>
                    </div>
                    <h4 class="text-slate-900 dark:text-white font-bold text-lg">Analyses Poussées</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      Accédez à des tableaux de bord détaillés pour comprendre qui regarde vos annonces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <!-- Footer -->
          <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e1429] py-10 px-4 md:px-10">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1200px] mx-auto w-full">
              <div class="flex items-center gap-2">
                <div class="size-6 text-[#7311d4] flex items-center justify-center">
                  <span class="material-symbols-outlined text-2xl">storefront</span>
                </div>
                <span class="text-slate-900 dark:text-white font-bold text-lg">Marketplace</span>
              </div>
              <div class="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
                <a class="hover:text-[#7311d4] transition-colors" href="#">Conditions Générales</a>
                <a class="hover:text-[#7311d4] transition-colors" href="#">Politique de Confidentialité</a>
                <a class="hover:text-[#7311d4] transition-colors" href="#">Nous Contacter</a>
              </div>
              <div class="text-sm text-slate-400">
                © 2024 Marketplace Inc.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  `
})
export class PremiumComponent {}
