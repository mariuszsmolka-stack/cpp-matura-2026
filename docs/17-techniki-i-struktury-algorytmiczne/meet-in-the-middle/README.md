---
layout: default
title: Meet in the Middle
permalink: /17-techniki-i-struktury-algorytmiczne/meet-in-the-middle/
---

# Meet in the Middle - dzielenie problemu na dwie połowy

Najpierw wyliczamy możliwości dla dwóch mniejszych części. Potem szukamy sposobu, aby sprawnie połączyć ich wyniki.

## Kolejność nauki

- [Podzbiory i ich sumy]({{ '/17-techniki-i-struktury-algorytmiczne/meet-in-the-middle/01-podzbiory.html' | relative_url }}) - zaczynamy od paczek, pustego wyboru i tworzenia list sum.
- [Dokładna suma]({{ '/17-techniki-i-struktury-algorytmiczne/meet-in-the-middle/02-dokladna-suma.html' | relative_url }}) - szukamy dopełnienia do celu za pomocą wyszukiwania binarnego.
- [Limit i liczba sposobów]({{ '/17-techniki-i-struktury-algorytmiczne/meet-in-the-middle/03-zastosowania.html' | relative_url }}) - rozróżniamy największy wynik od liczby wszystkich wyborów.
- [Rozpoznawanie techniki]({{ '/17-techniki-i-struktury-algorytmiczne/meet-in-the-middle/04-rozpoznawanie.html' | relative_url }}) - dzielimy pracę między zespoły i porównujemy metody.

## Kiedy tego użyć?

Gdy sprawdzanie wszystkich podzbiorów jest za drogie, ale możliwości każdej połowy jest jeszcze niewiele. Pełny wybór musi dać się rozdzielić, a wyniki części trzeba umieć szybko połączyć.

## Kiedy wybrać coś innego?

Dla małego wejścia wystarczy pełny przegląd. Dla małych sum korzystniejsze może być programowanie dynamiczne. Pytania o spójne przedziały zwykle wymagają innych technik.

## Przed rozpoczęciem

Potrzebujesz zwykłych tablic, pętli, warunków i prostych funkcji. Powtórz wyszukiwanie binarne. Sortowanie liczb jest objaśnione w drugiej lekcji. Sumy tworzymy przez podwajanie listy, bez operacji bitowych.
