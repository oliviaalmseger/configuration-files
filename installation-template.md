## Installera Vite
1. Kör pnpm create vite@latest . i terminaler
2. Välj framework: (vanilla, om inget annat)
3. Välj mellan typescript eller javascript
4. Installera ESlint--> pnpm create @eslint/config@latest
5. Installera Prettier
- pnpm install --save-dev --save-exact prettier
- Skapa en tom config-fil som heter .prettierrc
    node --eval "fs.writeFileSync('.prettierrc','{}\n')"
- Skapa en prettierignore-fil för att ignorera vissa filer
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
- Formatera med pnpm
pnpm exec prettier . --write
- Alternativt med pnpm:
pnpm add -D eslint-config-prettier
7. Installera sass
- npm install --save-dev sass
- Skapa en style.scss-fil och länka in den högst upp i main.ts-filen.
 
## -gitignore-fil
1. Lägg in/kontrollera .gitignore-filen så att ni slipper få med genererade filer (t.ex. .DS_Store, *.css.map, style.css).
 
## Installera Vue
1. I terminalen, kör pnpm create vite@latest . i din projektmapp.
2. Om du får frågan om att mappen inte är tom (för du har .git i den) så välj att behålla existerande filer.
3. Använd piltangenterna för att välja Vue som ramverk.
4. Välj sedan Customize with create-vue-alternativet, då vi ska lägga till routing och state management i vår app.
5. I Package name kan du fylla i namnet för projektet
6. Välj om du vill köra med eller utan TypeScript. 
7. För JSX Support, välj No 
8. Välj Yes på Vue Router.
9. Välj Yes på Pinia.
10. Välj No på Vitest (vi ska inte skriva tester på vår kod).
11. Välj No på End-to-end Testing Solution (samma som ovan).
12. Välj om du vill ha ESLint eller inte.
13. Välj om du vill ha Prettier eller inte.
