---
layout: default
title: Programowanie dynamiczne
permalink: /17-techniki-i-struktury-algorytmiczne/programowanie-dynamiczne/
---

# Programowanie dynamiczne

Rozwiązujemy mniejsze problemy i zapisujemy ich wyniki w tablicy. Potem korzystamy z nich przy obliczaniu kolejnych odpowiedzi.

## Kolejność nauki

- [Schody i zapamiętywanie wyników]({{ '/17-techniki-i-struktury-algorytmiczne/programowanie-dynamiczne/01-schody.html' | relative_url }}) - zaczynamy od liczenia sposobów. Ustalamy znaczenie komórki, przypadki początkowe i kolejność obliczeń.
- [Najmniejsza liczba monet]({{ '/17-techniki-i-struktury-algorytmiczne/programowanie-dynamiczne/02-monety.html' | relative_url }}) - zamiast dodawać liczbę sposobów, wybieramy najlepszy wynik. Obsługujemy też kwotę niemożliwą do uzyskania.
- [Najlepsza droga przez planszę]({{ '/17-techniki-i-struktury-algorytmiczne/programowanie-dynamiczne/03-plansza.html' | relative_url }}) - przenosimy ten sam pomysł do tablicy dwuwymiarowej i porównujemy różne zadania.

## Kiedy tego użyć?

Gdy wiele rozważanych rozwiązań korzysta z tych samych mniejszych problemów. Trzeba umieć określić, co zapisujemy, od czego to zależy i w jakiej kolejności obliczamy wyniki.

## Kiedy wybrać coś innego?

Dla prostego sumowania lub szukania najmniejszego elementu wystarczy zwykła pętla. Strategię zachłanną wybierz wtedy, gdy potrafisz udowodnić, że jej kolejne decyzje prowadzą do najlepszego wyniku.

## Przed rozpoczęciem

Potrzebujesz zwykłych tablic, pętli i instrukcji `if`. W trzeciej lekcji używamy tablicy dwuwymiarowej. Warto wcześniej przeczytać lekcję o algorytmach zachłannych.
