---
layout: default
title: Przesuwające się okno
permalink: /14-algorytmy-podstawowe/przesuwajace-sie-okno/
---

# Przesuwające się okno

Okno obejmuje kolejne, sąsiadujące elementy tablicy. Gdy zmieniamy jego granice, wykorzystujemy poprzedni wynik, zamiast liczyć wszystko od początku.

## Kiedy tego użyć?

Gdy szukasz najlepszego spośród kolejnych fragmentów stałej długości i potrafisz łatwo aktualizować wynik. Trudniejszy wariant pozwala zmieniać długość okna, jeśli własności danych uzasadniają ruch granic.

## Kiedy wybrać coś innego?

Przy wielu niezależnych pytaniach o dowolne przedziały rozważ sumy prefiksowe. Przy oknie zmiennym nie stosuj reguły skracania według sumy, zanim sprawdzisz jej założenia.

## Przed rozpoczęciem

Powtórz zwykłe tablice, indeksy, pętle `for` i `while` oraz warunki `if`. Przyda się porównanie z sumami prefiksowymi i techniką dwóch wskaźników.

## Lekcje

- [Przesuwające się okno - wprowadzenie]({{ '/14-algorytmy-podstawowe/przesuwajace-sie-okno/01-wprowadzenie.html' | relative_url }}) - ramka, kolejne sumy, wartości ujemne, okno zmienne i zadania A-F.
