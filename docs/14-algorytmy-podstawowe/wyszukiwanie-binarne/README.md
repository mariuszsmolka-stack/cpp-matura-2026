---
layout: default
title: Wyszukiwanie binarne
permalink: /14-algorytmy-podstawowe/wyszukiwanie-binarne/
---

# Wyszukiwanie binarne

Jedno porównanie może wykluczyć około połowy możliwości. Trzeba jednak wiedzieć, dlaczego odrzucona część nie zawiera wyniku.

## Kiedy tego użyć?

Gdy szukasz elementu w uporządkowanej tablicy albo najmniejszej wartości spełniającej monotoniczny warunek. Kluczowe jest uzasadnienie, którą połowę wolno odrzucić.

## Kiedy wybrać coś innego?

Gdy dane są nieuporządkowane i nie wolno zmieniać ich kolejności, klasyczna reguła wyszukiwania binarnego nie działa. Przy pojedynczym pytaniu o małą tablicę zwykła pętla może wystarczyć.

## Przed rozpoczęciem

Powtórz indeksy zwykłych tablic, `int`, `bool`, dzielenie całkowite, pętle i warunki.

## Lekcje

- [Wyszukiwanie binarne - wprowadzenie]({{ '/14-algorytmy-podstawowe/wyszukiwanie-binarne/01-wprowadzenie.html' | relative_url }}) - zgadywanie liczby, przykłady na tablicy, monotoniczność i zadania A-F.
