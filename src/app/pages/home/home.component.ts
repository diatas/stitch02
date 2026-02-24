import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-slate-50 dark:bg-[#191022] font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <!-- Navbar -->
      <header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#191022]/90 backdrop-blur-md">
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7311d4] text-white">
              <span class="material-symbols-outlined">storefront</span>
            </div>
            <h1 class="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Marketplace</h1>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <a class="text-sm font-semibold text-slate-600 hover:text-[#7311d4] dark:text-slate-300 dark:hover:text-white transition-colors" routerLink="/">Accueil</a>
            <a class="text-sm font-semibold text-slate-600 hover:text-[#7311d4] dark:text-slate-300 dark:hover:text-white transition-colors" routerLink="/listings">Annonces</a>
            <a class="text-sm font-semibold text-slate-600 hover:text-[#7311d4] dark:text-slate-300 dark:hover:text-white transition-colors" routerLink="/create-listing">Publier une annonce</a>
            <a class="text-sm font-semibold text-[#D4AF37] hover:text-yellow-600 transition-colors flex items-center gap-1" routerLink="/premium">
              <span class="material-symbols-outlined text-lg">workspace_premium</span>
              Services Premium
            </a>
          </nav>
          <div class="flex items-center gap-4">
            <button class="hidden sm:flex h-10 items-center justify-center rounded-lg px-6 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors">
              Connexion
            </button>
            <button class="flex h-10 items-center justify-center rounded-lg bg-[#7311d4] px-6 text-sm font-bold text-white shadow-lg shadow-[#7311d4]/30 hover:bg-[#5a0ca8] transition-all">
              S'inscrire
            </button>
          </div>
        </div>
      </header>

      <main class="flex-grow">
        <!-- Hero Section -->
        <section class="relative isolate overflow-hidden bg-slate-50 dark:bg-[#191022] py-16 sm:py-24 lg:py-32">
          <div class="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 dark:opacity-40 mix-blend-multiply" style="background-image: radial-gradient(circle at center, #7311d4 0%, transparent 70%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7AFZ4zE6fQQlTXmx49AYn7DKLm7GmZ6tp_bNExhLpm7wDj6jDHb1Z6qBYO57rPJkw4YnxkV_vlCLUrlf2YovHdBRM0-LYXVpbj1ev84PYQd8sRoEsEl9KxnrqT7lyRGlMMonex4GGFg6E2fTqI8imifz09zYD79RAgJ7G37dwqMXtMCVf9FGSRpmSLhAEimh3xV_Q6nZ3LSzumSmgBhp8KS7NDyvT-LuQDOv35T3SWOe8NdTVb98c93aU4tn7hFVzAGjEqdOfwO3K'); background-size: cover; background-position: center;">
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
            <div class="mx-auto max-w-2xl">
              <div class="mb-8 flex justify-center">
                <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 dark:text-slate-300 ring-1 ring-slate-900/10 dark:ring-white/20 hover:ring-slate-900/20 dark:hover:ring-white/40 bg-white/50 dark:bg-black/30 backdrop-blur-sm">
                  Nouveau : Découvrez nos agents certifiés. <a class="font-semibold text-[#7311d4]" href="#"><span aria-hidden="true" class="absolute inset-0"></span>En savoir plus <span aria-hidden="true">→</span></a>
                </div>
              </div>
              <h1 class="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
                Vendez et achetez en <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#7311d4] to-purple-400">toute liberté</span>
              </h1>
              <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                La plateforme de confiance pour des transactions sécurisées et directes entre particuliers. Trouvez la perle rare ou vendez vos biens d'exception.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <button class="rounded-lg bg-[#7311d4] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#7311d4]/25 hover:bg-[#5a0ca8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7311d4] transition-all" routerLink="/listings">
                  Parcourir les annonces
                </button>
                <button class="rounded-lg px-8 py-3.5 text-sm font-bold leading-6 text-slate-900 dark:text-white ring-1 ring-slate-900/10 dark:ring-white/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Publier une annonce
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Categories -->
        <section class="py-12 bg-white dark:bg-[#1f1629]">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6">Explorer par catégorie</h2>
            <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
              <!-- Category Item: All -->
              <button class="flex min-w-[140px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#191022] p-6 hover:border-[#7311d4] hover:shadow-md transition-all group">
                <div class="rounded-full bg-white dark:bg-slate-800 p-3 text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4] shadow-sm">
                  <span class="material-symbols-outlined">grid_view</span>
                </div>
                <span class="font-semibold text-slate-900 dark:text-white">Tout</span>
              </button>
              <!-- Category Item: Real Estate -->
              <button class="flex min-w-[140px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#191022] p-6 hover:border-[#7311d4] hover:shadow-md transition-all group">
                <div class="rounded-full bg-slate-100 dark:bg-slate-800 p-3 text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4]">
                  <span class="material-symbols-outlined">real_estate_agent</span>
                </div>
                <span class="font-medium text-slate-900 dark:text-white">Immobilier</span>
              </button>
              <!-- Category Item: Vehicles -->
              <button class="flex min-w-[140px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#191022] p-6 hover:border-[#7311d4] hover:shadow-md transition-all group">
                <div class="rounded-full bg-slate-100 dark:bg-slate-800 p-3 text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4]">
                  <span class="material-symbols-outlined">directions_car</span>
                </div>
                <span class="font-medium text-slate-900 dark:text-white">Véhicules</span>
              </button>
              <!-- Category Item: Fashion -->
              <button class="flex min-w-[140px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#191022] p-6 hover:border-[#7311d4] hover:shadow-md transition-all group">
                <div class="rounded-full bg-slate-100 dark:bg-slate-800 p-3 text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4]">
                  <span class="material-symbols-outlined">checkroom</span>
                </div>
                <span class="font-medium text-slate-900 dark:text-white">Mode</span>
              </button>
              <!-- Category Item: Tech -->
              <button class="flex min-w-[140px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#191022] p-6 hover:border-[#7311d4] hover:shadow-md transition-all group">
                <div class="rounded-full bg-slate-100 dark:bg-slate-800 p-3 text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4]">
                  <span class="material-symbols-outlined">devices</span>
                </div>
                <span class="font-medium text-slate-900 dark:text-white">High-Tech</span>
              </button>
              <!-- Category Item: Services -->
              <button class="flex min-w-[140px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#191022] p-6 hover:border-[#7311d4] hover:shadow-md transition-all group">
                <div class="rounded-full bg-slate-100 dark:bg-slate-800 p-3 text-slate-600 dark:text-slate-300 group-hover:text-[#7311d4]">
                  <span class="material-symbols-outlined">handshake</span>
                </div>
                <span class="font-medium text-slate-900 dark:text-white">Services</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Listings Grid -->
        <section class="py-16 bg-slate-50 dark:bg-[#191022]">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Annonces en vedette</h2>
              <a class="text-sm font-bold text-[#7311d4] hover:text-[#5a0ca8] flex items-center gap-1" routerLink="/listings">
                Voir tout <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- Listing Card: Premium Real Estate -->
              <div class="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#1f1629] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <div class="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-[#D4AF37]/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-sm">
                    <span class="material-symbols-outlined text-[14px]">star</span>
                    Premium
                  </div>
                  <div class="absolute top-3 right-3 z-10 rounded-full bg-white/80 dark:bg-black/50 p-1.5 text-slate-900 dark:text-white hover:text-red-500 transition-colors cursor-pointer backdrop-blur-sm">
                    <span class="material-symbols-outlined text-[20px]">favorite</span>
                  </div>
                  <div class="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBt-KXe17HLJ4qab5PEg4-v_QbS6nANfhZ9nK2hkrGCJ3DObolMOUswVO0Ag4r5EJNe6VmKoKQeonVanIoS6jm_XQDR11VGv-zYTMHHBnrWDDq83FUo_WKHgsZ76q275FpjfzRVKNzzpcuANga1VV6eTY-msCPVov3qTItiVEpZBINoZ4YOOhma0NMwL4xy63pkW4ZcD2h-i8RnhB9MLiJVkj61Vd_3BBHQdY3KThOsF3AjWaGl6mvDK-Hx6eBfighbudbL3runvpoc');">
                  </div>
                </div>
                <div class="flex flex-1 flex-col p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-base font-bold text-slate-900 dark:text-white line-clamp-1">Appartement Haussmannien</h3>
                    <span class="text-base font-bold text-[#7311d4]">1.2M €</span>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[14px]">location_on</span>
                    Paris 8ème
                  </p>
                  <div class="mt-auto flex items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div class="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                      <div class="h-full w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBERF9knt-Fxg6s8z3qK04OHC66yKmkVJ0MVUbYKhb-Dvz8CFdcHdyjfJ5XOTrJHNVeSiuqp3nyNMItGEp9PVeNMXUgraxT5E5VAe5-HaZ34hLabiaTnM_3-C_d8gA0wEMTjyp5uF8vLJXsVt1q1OmI70tJkahWocIxZ5gN6kWUhFcmcvAqOi7aWE_QC48kXmJN5f-wXYlVI6CFq8qtoIXqfO_V_ZHMlvtD1nEZER-muSMq6DCjRLe3dCrGSW7AlXJ1viPnhy_I6X9r');"></div>
                    </div>
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-300">Sophie D.</span>
                    <span class="ml-auto text-[10px] text-slate-400">Il y a 2h</span>
                  </div>
                </div>
              </div>
              <!-- Listing Card: Premium Car -->
              <div class="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#1f1629] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <div class="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-[#D4AF37]/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-sm">
                    <span class="material-symbols-outlined text-[14px]">star</span>
                    Premium
                  </div>
                  <div class="absolute top-3 right-3 z-10 rounded-full bg-white/80 dark:bg-black/50 p-1.5 text-slate-900 dark:text-white hover:text-red-500 transition-colors cursor-pointer backdrop-blur-sm">
                    <span class="material-symbols-outlined text-[20px]">favorite</span>
                  </div>
                  <div class="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHnrrsV9uBz84Dwu5koUVTuFAN9ENtf-7Uy3D1FIdb8Wl4viSpNZYzA9WqboCieGatsJ4QWANiNB3krRVFPT88eL_YyXfxhz5McetHaOmcpASEV5DDHRYQpx-jIkbe1_y88McSFyo1w8B26QKhaqaONjyO_1lH1OkqbTaF6vrnPLMI_50BXJdpbBTZ777ULd6OzKYWXUWNZ2H0vtVMCgqIyGDOdY8ZB1onjyh9dg9R5mCBrw-RMFNeIypwJcTz0uubkKPMtAqHHWwb');">
                  </div>
                </div>
                <div class="flex flex-1 flex-col p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-base font-bold text-slate-900 dark:text-white line-clamp-1">Porsche 911 Carrera</h3>
                    <span class="text-base font-bold text-[#7311d4]">95k €</span>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[14px]">speed</span>
                    45 000 km • 2019
                  </p>
                  <div class="mt-auto flex items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div class="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                      <div class="h-full w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAqVfmOfqdCyBu7Xvjs2pJw8_JU-MRrG-BNC6ToVuP7BPQJ7zMsRiJEUTTkl07kWhyj-afyp-TsNIBaGZmMqk5L34z_UnZhEpP2XypR-aLabEJ8Od30GxX_jO4a_nPDac82LQ02k2KOxQdFPGLnvSqyi4Bfcml7iKLmVjzrQZebZiWIBMfkaugGkhu09XC_Za9davJATxKDpSnXgPnwqmTPtuF65O_Vq96L9zIvSXaGIMFPqH9PNHUQZsWM2B5Fsxd4S08ssP37s_Z');"></div>
                    </div>
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-300">Marc L.</span>
                    <span class="ml-auto text-[10px] text-slate-400">Hier</span>
                  </div>
                </div>
              </div>
              <!-- Listing Card: Standard Fashion -->
              <div class="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#1f1629] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <div class="absolute top-3 right-3 z-10 rounded-full bg-white/80 dark:bg-black/50 p-1.5 text-slate-900 dark:text-white hover:text-red-500 transition-colors cursor-pointer backdrop-blur-sm">
                    <span class="material-symbols-outlined text-[20px]">favorite</span>
                  </div>
                  <div class="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj3RRjuzHsQRCzDpU-l65LVZ-FCQD49Aai7w-lmTQ3e2XLi2F79wFAtbIMVH9AEdF7m72YR3ZhbM0jSxjTaP8v-cnrd5dp0lXdD63opoWQDAbGx5DQE65gFRT6wi-Xw2gwr3H2IO0CEPK8oGbfDzM3mf_TY860_vtMp0F5S6MktEAtJF2F-S8JZVNZtluH3HPBMcone3dsttOQMBLMcXjABJ6hdbeRcvXMXcXbcQvM8bFtBboxU50eggcVyUV4e1z0DI4l8teHXlt7');">
                  </div>
                </div>
                <div class="flex flex-1 flex-col p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-base font-bold text-slate-900 dark:text-white line-clamp-1">Sac Hermès Birkin</h3>
                    <span class="text-base font-bold text-slate-700 dark:text-slate-300">12.5k €</span>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[14px]">info</span>
                    Comme neuf
                  </p>
                  <div class="mt-auto flex items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div class="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                      <div class="h-full w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv5BM7AlH5f6Gr2wLsHlZ_2mtNbapemmYQxWuzu5hdAfdwLO-oozjXs-n3aHbCF1pg8Nd6c9JtAROxGEGhGmjZjZJaHcrdA3P0Wz0bJgWKkttdjDxaKI-qDEiTFdqFnKLvu4xRPf8GOuHZj5uLEeZafsgrRoFDA2i5hjnU8YC3egGyodq17vU1LZyrzc8IOWIZQzhU_ORId8hLAef5DzGBjkWdXeCdIe0gSez6e8LFz2qtKg-On9e5IU5Q1SdT-3nOgKtUem8Maop9');"></div>
                    </div>
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-300">Claire M.</span>
                    <span class="ml-auto text-[10px] text-slate-400">Il y a 3j</span>
                  </div>
                </div>
              </div>
              <!-- Listing Card: Standard Tech -->
              <div class="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#1f1629] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <div class="absolute top-3 right-3 z-10 rounded-full bg-white/80 dark:bg-black/50 p-1.5 text-slate-900 dark:text-white hover:text-red-500 transition-colors cursor-pointer backdrop-blur-sm">
                    <span class="material-symbols-outlined text-[20px]">favorite</span>
                  </div>
                  <div class="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcffV3-NGuo9nVh6MDOk1_5WdxPtaw2Dp4kReGqG6taIfiMKt4EDlcZadnUECrEuVSQQ5fzkf47Ii6rjm-mVY0FsgYJugRRK4bbySZfQX3XNaT7eNljvJ_X3-1MAVFIm83BFs8yDw9rgUKWkWBktAXJlvBYlR-CDfR6rfqQmv5H8FF-o_030PsUHFnWIgx6I4LIG_PWgVOlfMoxqVcV7wXMApYBJzIm3t1wHEeMktY0th7EDco-r3WdHqpu7TmQP7eHUehMsA8HJsY');">
                  </div>
                </div>
                <div class="flex flex-1 flex-col p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-base font-bold text-slate-900 dark:text-white line-clamp-1">MacBook Pro M2</h3>
                    <span class="text-base font-bold text-slate-700 dark:text-slate-300">2.4k €</span>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[14px]">memory</span>
                    16 pouces • 1TB
                  </p>
                  <div class="mt-auto flex items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div class="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                      <div class="h-full w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0AO2In8Wl7HbWkqhy3jhGI4q6kYBuqzNMGhwck0jd88lTGDTGA89EEwMdKEku622kReE9ccjZ5mJfKMCt49xki25q4d7Qt2Q6JjNEDXxtWUuker5XELWNdPx8oJ9019OHuVXHW3vacZvjK1kC5R2s1CNXmbL2DexrzSk_IHxFzIdTWtSgRO_rFFPmI4dZm1elj61mkKQyBfCLcYkL-lTijuhGI3_tLoPfPKtwnu73fXeCEKaBko6RYQ-WjJpZZnk3ikl6jegOAzux');"></div>
                    </div>
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-300">Thomas B.</span>
                    <span class="ml-auto text-[10px] text-slate-400">Il y a 5j</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Agent Service -->
        <section class="relative py-20 bg-white dark:bg-[#1f1629] overflow-hidden">
          <div class="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-[#7311d4]/5 blur-3xl"></div>
          <div class="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-3xl"></div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div class="rounded-3xl bg-slate-900 dark:bg-black overflow-hidden shadow-2xl">
              <div class="flex flex-col lg:flex-row">
                <div class="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                  <div class="inline-flex items-center gap-2 rounded-full bg-[#7311d4]/20 px-3 py-1 text-xs font-bold text-[#7311d4] mb-6 w-fit">
                    <span class="material-symbols-outlined text-sm">security</span>
                    Service Exclusif
                  </div>
                  <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                    Vendez l'esprit tranquille avec nos <span class="text-[#7311d4]">Agents de Vente</span>
                  </h2>
                  <p class="text-lg text-slate-300 mb-8 max-w-lg">
                    Pour vos biens de valeur, déléguez la vente à nos experts certifiés. Photos pro, négociation et transaction sécurisée incluses.
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <button class="rounded-lg bg-[#7311d4] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#7311d4]/30 hover:bg-[#5a0ca8] transition-all">
                      Trouver un agent
                    </button>
                    <button class="rounded-lg px-6 py-3 text-sm font-bold text-white border border-slate-700 hover:bg-slate-800 transition-all">
                      Comment ça marche ?
                    </button>
                  </div>
                </div>
                <div class="lg:w-1/2 h-64 lg:h-auto relative">
                  <div class="absolute inset-0 h-full w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAntV4qcfuVzCCFq72G453sVs9hQ2FtaZt-UXcNigC9nmnJzCbNLioD_iadgQD_OeXLcU2Nx18YKl_HIpBLmYUMeRBxdsFMyxFm5m4zP-M-MCFq998VjcMAmbMOuQtL09gJqGdpfDvS8ChXZUAnUHa5j1PHeGPxxmNS1P8HYr0_h0C9ef2JdhT5_dSFQU7uUiBpU06XidHJMldbT9rqYj63ViKnG_pA-aX8PHh7QON3jxOnEW0MUW-enbBQAbyHQBn-odUyGcqwUBon');">
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-900 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="bg-slate-50 dark:bg-[#191022] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div class="col-span-2 md:col-span-1">
              <div class="flex items-center gap-2 mb-4">
                <div class="flex h-6 w-6 items-center justify-center rounded bg-[#7311d4] text-white">
                  <span class="material-symbols-outlined text-[16px]">storefront</span>
                </div>
                <span class="text-lg font-bold text-slate-900 dark:text-white">Marketplace</span>
              </div>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                La référence pour l'achat et la vente de biens d'exception entre particuliers.
              </p>
            </div>
            <div>
              <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4">À propos</h3>
              <ul class="flex flex-col gap-2">
                <li><a class="text-sm text-slate-600 dark:text-slate-400 hover:text-[#7311d4] transition-colors" href="#">Qui sommes-nous</a></li>
                <li><a class="text-sm text-slate-600 dark:text-slate-400 hover:text-[#7311d4] transition-colors" href="#">Carrières</a></li>
                <li><a class="text-sm text-slate-600 dark:text-slate-400 hover:text-[#7311d4] transition-colors" href="#">Presse</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4">Aide</h3>
              <ul class="flex flex-col gap-2">
                <li><a class="text-sm text-slate-600 dark:text-slate-400 hover:text-[#7311d4] transition-colors" href="#">Centre d'aide</a></li>
                <li><a class="text-sm text-slate-600 dark:text-slate-400 hover:text-[#7311d4] transition-colors" href="#">Confiance et sécurité</a></li>
                <li><a class="text-sm text-slate-600 dark:text-slate-400 hover:text-[#7311d4] transition-colors" href="#">Conditions générales</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-4">Suivez-nous</h3>
              <div class="flex gap-4">
                <a class="text-slate-400 hover:text-[#7311d4] transition-colors" href="#"><span class="sr-only">Facebook</span>FB</a>
                <a class="text-slate-400 hover:text-[#7311d4] transition-colors" href="#"><span class="sr-only">Twitter</span>TW</a>
                <a class="text-slate-400 hover:text-[#7311d4] transition-colors" href="#"><span class="sr-only">Instagram</span>IG</a>
              </div>
            </div>
          </div>
          <div class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-xs text-slate-500 dark:text-slate-400">© 2024 Marketplace Inc. Tous droits réservés.</p>
            <div class="flex gap-6">
              <a class="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="#">Confidentialité</a>
              <a class="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class HomeComponent {}
