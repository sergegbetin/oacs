# 📱 GUIDE RESPONSIVE DESIGN - OACS

## 🎯 BREAKPOINTS PERSONNALISÉS

Votre site est maintenant **100% responsive** sur tous les appareils avec ces breakpoints :

| Appareil | Breakpoint | Orientation | Colonnes Grid |
|----------|-----------|-------------|---------------|
| 📱 **Mobile Portrait** | 320px - 480px | Portrait | 1 colonne |
| 📱 **Mobile Landscape** | 481px - 767px | Landscape | 2 colonnes |
| 📱 **Tablet Portrait** | 768px - 1024px | Portrait | 2 colonnes |
| 📱 **Tablet Landscape** | 768px - 1024px | Landscape | 3 colonnes |
| 💻 **Laptop/Desktop** | 1025px - 1280px | - | 3-4 colonnes |
| 🖥️ **Large Desktop** | 1281px+ | - | 4 colonnes |

---

## 🛠️ CLASSES UTILITAIRES DISPONIBLES

### **1. Classes Hide/Show**

```html
<!-- Masquer sur mobile -->
<div class="hide-mobile">Visible uniquement sur tablette et desktop</div>

<!-- Afficher uniquement sur mobile -->
<div class="show-mobile">Visible uniquement sur mobile</div>

<!-- Masquer sur tablette -->
<div class="hide-tablet">Masqué sur tablette</div>

<!-- Afficher uniquement sur tablette -->
<div class="show-tablet">Visible uniquement sur tablette</div>

<!-- Masquer sur desktop -->
<div class="hide-desktop">Masqué sur desktop</div>

<!-- Afficher uniquement sur desktop -->
<div class="show-desktop">Visible uniquement sur desktop</div>
```

### **2. Grid Responsive Automatique**

```html
<!-- S'adapte automatiquement selon l'appareil -->
<div class="grid-responsive">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>

<!-- Résultat :
   Mobile Portrait: 1 colonne
   Mobile Landscape: 2 colonnes
   Tablet: 2 colonnes
   Desktop: 4 colonnes
-->
```

### **3. Padding Responsive**

```html
<!-- Padding qui s'adapte automatiquement -->
<div class="responsive-padding">
    Contenu avec padding adaptatif
</div>

<!-- Résultat :
   Mobile: padding 1rem
   Mobile Landscape: padding 1.5rem
   Tablet: padding 2rem
   Desktop: padding 3rem
-->
```

### **4. Images Responsives**

```html
<!-- Image qui s'adapte au conteneur -->
<img src="image.jpg" class="responsive-img" alt="Description">

<!-- Ou simplement -->
<img src="image.jpg" alt="Description">
<!-- (Toutes les images sont automatiquement responsives) -->
```

### **5. Texte Responsive**

```html
<!-- Centré sur mobile, aligné à gauche sur desktop -->
<p class="text-responsive-center">
    Ce texte est centré sur mobile et aligné à gauche sur desktop
</p>
```

---

## 📐 CLASSES PRÉDÉFINIES

### **Typography Automatique**

Les titres s'adaptent automatiquement selon l'appareil :

```html
<h1>Titre principal</h1>
<!-- Mobile Portrait: 30px -->
<!-- Mobile Landscape: 36px -->
<!-- Tablet Portrait: 48px -->
<!-- Tablet Landscape: 56px -->
<!-- Laptop: 60px -->
<!-- Large Desktop: 64px -->

<h2>Sous-titre</h2>
<!-- Mobile Portrait: 24px -->
<!-- Mobile Landscape: 30px -->
<!-- Tablet: 36px -->
<!-- Desktop: 40-48px -->

<h3>Titre de section</h3>
<!-- Mobile Portrait: 20px -->
<!-- Mobile Landscape: 24px -->
<!-- Tablet: 30px -->
<!-- Desktop: 32-36px -->
```

### **Cards Grid**

```html
<!-- Grid de cartes qui s'adapte -->
<div class="card-grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
</div>

<!-- Résultat :
   Mobile Portrait: 1 colonne, gap 1rem
   Mobile Landscape: 2 colonnes, gap 1.5rem
   Tablet: 2-3 colonnes, gap 2rem
   Desktop: 3-4 colonnes, gap 2-2.5rem
-->
```

### **Hero Section**

```html
<section class="hero-grid">
    <div class="hero-title">Titre Hero</div>
    <div class="hero-subtitle">Sous-titre</div>
    <img class="hero-image" src="hero.jpg" alt="Hero">
</section>

<!-- Adapte automatiquement :
   - Taille des titres
   - Hauteur des images
   - Layout (1 ou 2 colonnes)
-->
```

### **Section Padding**

```html
<section class="section-padding">
    Contenu de la section
</section>

<!-- Padding vertical adaptatif :
   Mobile Portrait: 3rem
   Mobile Landscape: 4rem
   Tablet: 5rem
   Desktop: 5-6rem
-->
```

---

## 🎨 EXEMPLES D'UTILISATION

### **Exemple 1: Section Services**

```html
<section class="section-padding">
    <div class="max-w-7xl mx-auto">
        <h2 class="text-center mb-8">Nos Services</h2>
        
        <div class="card-grid">
            <div class="card-hover bg-white p-6 rounded-lg shadow">
                <h3>Service 1</h3>
                <p>Description du service</p>
            </div>
            <div class="card-hover bg-white p-6 rounded-lg shadow">
                <h3>Service 2</h3>
                <p>Description du service</p>
            </div>
            <div class="card-hover bg-white p-6 rounded-lg shadow">
                <h3>Service 3</h3>
                <p>Description du service</p>
            </div>
            <div class="card-hover bg-white p-6 rounded-lg shadow">
                <h3>Service 4</h3>
                <p>Description du service</p>
            </div>
        </div>
    </div>
</section>
```

### **Exemple 2: Navigation Responsive**

```html
<nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4">
        <!-- Logo -->
        <div class="flex justify-between items-center py-4">
            <img src="logo.png" alt="Logo" class="h-12">
            
            <!-- Desktop Menu -->
            <div class="desktop-menu hidden lg:flex space-x-8">
                <a href="#">Accueil</a>
                <a href="#">Services</a>
                <a href="#">À propos</a>
                <a href="#">Contact</a>
            </div>
            
            <!-- Mobile Menu Button -->
            <button class="mobile-menu-button lg:hidden">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>
    </div>
</nav>

<!-- Mobile Menu -->
<div class="mobile-nav">
    <div class="p-6">
        <a href="#" class="block py-3">Accueil</a>
        <a href="#" class="block py-3">Services</a>
        <a href="#" class="block py-3">À propos</a>
        <a href="#" class="block py-3">Contact</a>
    </div>
</div>

<!-- Overlay -->
<div class="mobile-overlay"></div>
```

### **Exemple 3: Formulaire Responsive**

```html
<form class="max-w-4xl mx-auto responsive-padding">
    <div class="form-grid grid md:grid-cols-2 gap-6">
        <input type="text" placeholder="Prénom" 
               class="w-full px-4 py-3 rounded-lg border">
        <input type="text" placeholder="Nom" 
               class="w-full px-4 py-3 rounded-lg border">
    </div>
    
    <input type="email" placeholder="Email" 
           class="w-full px-4 py-3 rounded-lg border mt-6">
    
    <textarea placeholder="Message" rows="5"
              class="w-full px-4 py-3 rounded-lg border mt-6"></textarea>
    
    <button type="submit" class="btn bg-oacs-primary text-white mt-6">
        Envoyer
    </button>
</form>
```

### **Exemple 4: Images avec Texte**

```html
<section class="section-padding">
    <div class="max-w-7xl mx-auto">
        <div class="hero-grid items-center">
            <!-- Texte -->
            <div class="text-responsive-center">
                <h2>Notre Mission</h2>
                <p class="mt-4">
                    Accompagner nos clients dans leur transformation digitale...
                </p>
                <button class="btn bg-oacs-primary text-white mt-6">
                    En savoir plus
                </button>
            </div>
            
            <!-- Image -->
            <img src="mission.jpg" alt="Mission" class="hero-image rounded-lg shadow-xl">
        </div>
    </div>
</section>
```

---

## 📊 TABLEAUX RESPONSIVES

```html
<div class="table-responsive">
    <table class="w-full">
        <thead>
            <tr>
                <th>Colonne 1</th>
                <th>Colonne 2</th>
                <th>Colonne 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Donnée 1</td>
                <td>Donnée 2</td>
                <td>Donnée 3</td>
            </tr>
        </tbody>
    </table>
</div>
```

---

## 🎯 BONNES PRATIQUES

### **1. Toujours tester sur plusieurs appareils**

```bash
# Utilisez les DevTools Chrome/Firefox
# Testez ces résolutions :
- 375x667 (iPhone SE)
- 390x844 (iPhone 12/13)
- 768x1024 (iPad)
- 1024x768 (iPad Landscape)
- 1280x720 (Laptop)
- 1920x1080 (Desktop)
```

### **2. Utilisez les classes prédéfinies**

```html
<!-- ✅ BON -->
<div class="card-grid">...</div>

<!-- ❌ ÉVITER -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">...</div>
```

### **3. Images optimisées**

```html
<!-- Toujours ajouter alt et utiliser des images optimisées -->
<img src="image-optimized.jpg" 
     alt="Description claire" 
     class="responsive-img"
     loading="lazy">
```

### **4. Formulaires accessibles**

```html
<!-- Font-size 16px minimum pour éviter le zoom sur iOS -->
<input type="text" 
       style="font-size: 16px;"
       placeholder="Votre nom">
```

---

## 🔧 PERSONNALISATION

Si vous avez besoin de breakpoints spécifiques :

```css
/* Dans tailwind.css, ajoutez vos propres règles */

@media (min-width: 600px) and (max-width: 800px) {
  .custom-class {
    /* Vos styles personnalisés */
  }
}
```

---

## ✅ CHECKLIST RESPONSIVE

Avant de déployer, vérifiez :

- [ ] Toutes les images s'affichent correctement sur mobile
- [ ] Les textes sont lisibles (pas trop petits)
- [ ] Les boutons sont cliquables (min 44x44px)
- [ ] Le menu mobile fonctionne
- [ ] Les formulaires sont utilisables sur mobile
- [ ] Pas de scroll horizontal
- [ ] Les espacements sont cohérents
- [ ] Les cartes s'empilent correctement
- [ ] Les tableaux sont scrollables sur mobile
- [ ] Performance : images optimisées, CSS minifié

---

## 🚀 RÉSULTAT

Votre site OACS est maintenant **100% responsive** et s'adapte parfaitement à :

- ✅ iPhone (Portrait & Landscape)
- ✅ Android (Portrait & Landscape)
- ✅ iPad (Portrait & Landscape)
- ✅ Tablettes Android
- ✅ Laptops 13"-15"
- ✅ Desktops 24"+
- ✅ Écrans 4K

**Tous les breakpoints sont gérés automatiquement !** 🎉
