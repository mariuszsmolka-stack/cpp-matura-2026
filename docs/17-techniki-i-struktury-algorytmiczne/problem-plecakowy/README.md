---
layout: default
title: Problem plecakowy 0/1
permalink: /17-techniki-i-struktury-algorytmiczne/problem-plecakowy/
---

# Problem plecakowy 0/1

Wybieramy przedmioty o największej łącznej wartości, nie przekraczając dostępnego limitu. Każdy przedmiot możemy wybrać raz albo wcale.

## Kolejność nauki

- [Co zabrać do plecaka?]({{ '/17-techniki-i-struktury-algorytmiczne/problem-plecakowy/01-intuicja.html' | relative_url }}) - waga, wartość, pojemność i ręczne porównywanie zestawów.
- [Dlaczego zachłanność zawodzi?]({{ '/17-techniki-i-struktury-algorytmiczne/problem-plecakowy/02-zachlannosc.html' | relative_url }}) - trzy kuszące reguły i kontrprzykłady. Dopiero potem pomysł zapisywania mniejszych wyników.
- [Tablica DP - od pomysłu do C++]({{ '/17-techniki-i-struktury-algorytmiczne/problem-plecakowy/03-tablica-dp.html' | relative_url }}) - znaczenie komórki, ręczna tabela, pseudokod i program z tablicą dwuwymiarową.
- [Jak rozpoznać problem plecakowy?]({{ '/17-techniki-i-struktury-algorytmiczne/problem-plecakowy/04-rozpoznawanie.html' | relative_url }}) - pliki, eksperymenty, zakupy, robot i zadanie o ekspedycji.

## Kiedy tego użyć?

Gdy wybierasz niezależne elementy, każdy najwyżej raz. Każdy zużywa wspólny ograniczony zasób i daje korzyść, którą chcesz maksymalizować.

## Kiedy wybrać coś innego?

Sam limit nie oznacza plecaka. Spójne fragmenty, kolizje terminów i wielokrotne używanie jednego elementu zmieniają problem. Nawet dla plecaka 0/1 duża pojemność może wykluczyć tablicę DP po limicie.

## Przed rozpoczęciem

Powtórz zwykłe tablice, pętle, instrukcję `if` i tablice dwuwymiarowe. Pomogą wcześniejsze lekcje o programowaniu dynamicznym i algorytmach zachłannych.
